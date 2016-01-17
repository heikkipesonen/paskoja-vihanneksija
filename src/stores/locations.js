class Locations {
    constructor () {
        this.items = [];

        this.load().then((items) => {
          this.items = [...items];
        });
    }

    load () {
      return fetch('../data/locations.json').then((data) => {
        return data.json().then((response) => {
          return response;
        });
      })
    }

}

export default new Locations();
