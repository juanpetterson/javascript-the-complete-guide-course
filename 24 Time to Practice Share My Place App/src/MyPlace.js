import { Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);

    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: parseFloat(queryParams.get('lat')), // parseFloat and + is for the same purpose
  lng: +queryParams.get('lng')
};

const address = queryParams.get('address');

new LoadedPlace(coords, address);
