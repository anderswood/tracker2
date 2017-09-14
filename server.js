var fetch = require('node-fetch');
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.post('/api/weather', (req, res) => {
//   // const { lat, long } = req.body;
//   const mapsKey = process.env.mapKey;
//
//   fetch(`https://maps.googleapis.com/maps/api/js?key=${mapsKey}&libraries=drawing`)
//   .then(response => {
//     console.log(response.status);
//     if(response.status === 200) {
//       // console.log(response)
//       return response.json();
//     } else {
//       res.json({error: 'error fetching weather'});
//     }
//   })
//   .then(weather => res.send(weather))
//   .catch(err => console.log(err))
// });

// app.post('/api/coords', (req, res) => {
//   const address = req.body.address;
//   const GoogGeoKey = process.env.geoKey;
//
//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GoogGeoKey}`)
//   .then(response => {
//     if(response.status === 200) {
//       return response.json();
//     } else {
//       res.json({error: 'error fetching coords'})
//     }
//   })
//   .then(coords => res.send(coords))
//   .catch(err => console.log(err))
// });

app.listen(app.get('port'), () => {
  console.log(`server is running on http://localhost:${app.get('port')}/`);
})
