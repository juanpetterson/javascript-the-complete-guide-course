import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const adressForm = document.querySelector('form');
    const locateUserButton = document.getElementById('locate-btn');
    this.shareButton = document.getElementById('share-btn');
    this.sharedLinkInputElement = document.getElementById('share-link');

    locateUserButton.addEventListener(
      'click',
      this.locateUserHandler.bind(this)
    );
    adressForm.addEventListener('submit', this.findAdressHandler.bind(this));
    this.shareButton.addEventListener(
      'click',
      this.sharePlaceHandler.bind(this)
    );
  }

  sharePlaceHandler() {
    if (!navigator.clipboard) {
      this.sharedLinkInputElement.select();
      return;
    }

    navigator.clipboard
      .writeText(this.sharedLinkInputElement.value)
      .then(() => {
        alert('Copiedd into clipboard');
      })
      .catch(err => {
        console.log(err);
        this.sharedLinkInputElement.select;
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareButton.disabled = false;
    this.sharedLinkInputElement.value = `${
      location.origin
    }/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${
      coordinates.lng
    }`;
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more moderns browser of manually enter an address'
      );
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      async success => {
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        };

        const address = await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace(coordinates, address);
      },
      error => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an addres manually'
        );
      }
    );
  }

  async findAdressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;

    if (!address || address.trim().length === 0) {
      alert('Invalid addres enter - please try again!');
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

new PlaceFinder();
