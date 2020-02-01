const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('Storage', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p1',
      title: 'A first product',
      price: 20,
      tags: ['Epensive', 'Luxury']
    });
  };
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
  if (db) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p2',
      title: 'A first product',
      price: 20,
      tags: ['Epensive', 'Luxury']
    });
  }
});

retrieveBtn.addEventListener('click', () => {
  if (db) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');

    const request = productsStore.get('p2');

    request.onsuccess = function() {
      console.log(request.result);
    };
  }
});
