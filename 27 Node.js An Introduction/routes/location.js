const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const dbName = 'locations';

const url = `mongodb+srv://<username>:<password>@cluster0-hfyur.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(url);

// const locationStorage = {
//   locations: []
// };

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();
  const { address, lat, lng } = req.body;

  client.connect(function(err, client) {
    const db = client.db(dbName);

    db.collection('user-location').inserOne(
      {
        address,
        coords: { lat, lng }
      },
      function(err, r) {
        res.json({ message: 'Stored location!', locId: r.insertedId });
      }
    );
  });

  // locationStorage.locations.push({
  //   id,
  //   address,
  //   coords: { lat, lng }
  // });

  // res.json({ message: 'Stored location!', locId: id });
});

router.get('/location/:id', (req, res, next) => {
  const locationId = +req.params.id;

  client.connect(
    function(err, client) {
      const db = client.db(dbName);

      let locationId;
      try {
        locationId = new mongodb.ObjectId(locationId);
      } catch (error) {
        // return to make sure the other code does not execute
        return res.status(500).json({ message: 'Invalid id!' });
      }

      db.collection('user-locations').findOne({
        _id: new mongodb.ObjectID(locationId)
      });
    },
    function(err, doc) {
      if (!doc) {
        return res.status(404).json({ message: 'Not found!' });
      }
      res.json({ address: doc.address, coordinates: doc.coords });
    }
  );

  // const location = locationStorage.locations.find(location => {
  //   return location.id === locationId;
  // });

  // if (!location) {
  //   return res.status(404).json({ message: 'Not found!' });
  // }

  // res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;
