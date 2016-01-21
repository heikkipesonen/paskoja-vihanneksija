export default {
  disableDefaultUI:true,
  center: new google.maps.LatLng(60.162863613884376, 24.936561584472656),
  zoom:8,
  minZoom:1,
  // styles:[{'featureType':'landscape','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','stylers':[{'saturation':-100},{'lightness':51},{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'road.arterial','stylers':[{'saturation':-100},{'lightness':30},{'visibility':'on'}]},{'featureType':'road.local','stylers':[{'saturation':-100},{'lightness':40},{'visibility':'on'}]},{'featureType':'transit','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'administrative.province','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':-25},{'saturation':-100}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]}]
  // styles:[{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.government','elementType':'labels.text.fill','stylers':[{'color':'#b43b3b'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'hue':'#ff0000'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'lightness':'8'},{'color':'#bcbec0'}]},{'featureType':'road','elementType':'labels.text.fill','stylers':[{'color':'#5b5b5b'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#7cb3c9'},{'visibility':'on'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#abb9c0'}]},{'featureType':'water','elementType':'labels.text','stylers':[{'color':'#fff1f1'},{'visibility':'off'}]}]
  // mapTypeId:'toner',
  // mapTypeControlOptions:{
  // 	mapTypeIds: ['toner']
  // }
  styles: [
      {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': [
              {
                  'saturation': 36
              },
              {
                  'color': '#000000'
              },
              {
                  'lightness': 40
              }
          ]
      },
      {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': [
              {
                  'visibility': 'on'
              },
              {
                  'color': '#000000'
              },
              {
                  'lightness': 16
              }
          ]
      },
      {
          'featureType': 'all',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'administrative',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#000000'
              },
              {
                  'lightness': '20'
              }
          ]
      },
      {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers': [
              {
                  'color': '#000000'
              },
              {
                  'lightness': 17
              },
              {
                  'weight': 1.2
              }
          ]
      },
      {
          'featureType': 'administrative.locality',
          'elementType': 'labels.text',
          'stylers': [
              {
                  'weight': '0.01'
              },
              {
                  'lightness': '100'
              }
          ]
      },
      {
          'featureType': 'administrative.neighborhood',
          'elementType': 'labels.text',
          'stylers': [
              {
                  'lightness': '100'
              },
              {
                  'saturation': '-100'
              },
              {
                  'weight': '0.01'
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#424242'
              },
              {
                  'lightness': '15'
              }
          ]
      },
      {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#565555'
              },
              {
                  'lightness': 21
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#e0e0e0'
              },
              {
                  'lightness': '10'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers': [
              {
                  'color': '#e4e4e4'
              },
              {
                  'lightness': 29
              },
              {
                  'weight': '0.01'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#afafaf'
              },
              {
                  'lightness': '10'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'labels.text.fill',
          'stylers': [
              {
                  'weight': '0.01'
              },
              {
                  'color': '#ffdd00'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#c5c4c4'
              },
              {
                  'lightness': '11'
              },
              {
                  'gamma': '1'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'elementType': 'labels.text.stroke',
          'stylers': [
              {
                  'weight': '0.01'
              }
          ]
      },
      {
          'featureType': 'transit',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#b2b2b2'
              },
              {
                  'lightness': 19
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
              {
                  'lightness': '-100'
              },
              {
                  'visibility': 'on'
              },
              {
                  'color': '#222222'
              }
          ]
      }
  ]
};
