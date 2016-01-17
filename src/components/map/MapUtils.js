import _ from 'lodash';

class MapUtils {
  static _parseGeocoderResponse(response) {
		var me = this;
		var locations  = response.map(function(item){
			var address_types = {};

			item.address_components.forEach(function(component){
				component.types.forEach(function(type){
					address_types[type] = component.long_name;
				});
			});

			return {
				country: address_types.country,
				street: address_types.route,
				street_number: address_types.street_number,
				city : _.find(address_types, function(address, key){
					return key.match(/administrative_area_/);
				}),
				formatted_address :  item.formatted_address,
				location : me.toPoint(item.geometry.location),
				place_id : item.place_id
			};

		});


		return locations;
	}

	static reverseGeocode(point) {
		var me = this;
		var location = this.toLatLng(point);
		var geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.geocode({latLng: location}, function(response){
				resolve(me._parseGeocoderResponse(response));
			}, function(error){
        reject(error);
      });
    });
	}

	static toPoint(latLng) {
		if (latLng && latLng instanceof google.maps.LatLng){
			return [ latLng.lat(), latLng.lng() ];
		} else if (latLng.getPosition){
			return this.toPoint( latLng.getPosition() );
		} else {
			return null;
		}
	}

	static toLatLng (point){
		if (_.isArray(point)){
			return new google.maps.LatLng(point[0], point[1]);
		} else if (!(point instanceof google.maps.LatLng)){
			return new google.maps.LatLng(point);
		} else {
			return point;
		}
	}

	static toPointBounds(bounds) {
		return [ this.toPoint(bounds.getSouthWest()), this.toPoint(bounds.getNorthEast()) ];
	}

	static toBounds(points) {
		var bounds = new google.maps.LatLngBounds();
				bounds.extend( this.toLatLng(points[0]));
				bounds.extend( this.toLatLng(points[1]));

		return bounds;
	}

	static getBounds(items, convert) {
		var me = this;
		var bounds = new google.maps.LatLngBounds();
		_.forEach(items, function(item){
			if (item.getPosition){
				bounds.extend( me.toLatLng( item.getPosition() ) );
			} else if (item.getCenter){
				bounds.extend( me.toLatLng( item.getCenter() ) );
			}
		});

		return convert === false ? bounds : this.toPointBounds( bounds );
	}

	static getCenter(items) {
		return this.toPoint( this.getBounds(items, false).getCenter() );
	}

	static on(eventName, subject, callback) {
		return google.maps.event.addListener(subject,eventName, callback);
	}

	static getPixelPosition(point, map) {
		var position = this.toLatLng( point );
		var scale = Math.pow(2, map.getZoom());
		var nw = new google.maps.LatLng(
		    map.getBounds().getNorthEast().lat(),
		    map.getBounds().getSouthWest().lng()
		);
		var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
		var worldCoordinate = map.getProjection().fromLatLngToPoint( position );

		return [
	    Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
	    Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
		];
	}
}

export default MapUtils;
