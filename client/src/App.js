/*global google*/

import React, { Component } from 'react';
import './App.css';
import dotenv from 'dotenv';

dotenv.config();

class App extends Component {
  constructor (props) {
    super(props)
    // this.runScript();
    this.state = {

    }
  }

  // runScript () {
  //   let script = document.createElement('script');
  //   const mapKey = process.env.REACT_APP_MAPKEY;
  //   console.log(this);
  //
  //   script.setAttribute('type', 'text/javascript');
    // script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=drawing`);
  //   document.getElementsByTagName('head')[0].appendChild(script);
  // }

  componentDidMount () {
    console.log(google.maps);
    const mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(40.3058035,-105.7208812),
      mapTypeId: 'terrain'
    }

    let mapTile = new google.maps.Map(this.refs.mapCanvas, mapOptions);



    // fetch('/api/weather', {
    //   method: 'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: JSON.stringify({
    //     lat: 40.016457,
    //     long: -105.285884
    //   })
    // })
    // .then(jsonWeather => jsonWeather.json())
    // .then(res => console.log(res))

    const drwngMgrProps = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['marker', 'polygon', 'polyline']
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      polygonOptions: {
        draggable: true,
        editable: true,
        clickable: true,
        fillColor: '#E4801C',
        fillOpacity: 0.2,
        strokeColor: '#E4801C',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        zIndex: 1
      },
      polylineOptions: {
        draggable: true,
        editable: true,
        geodesic: true,
        strokeColor: '#E4801C',
        strokeOpacity: 0.8,
        strokeWeight: 2
      }
    }

  let drawingManager = new google.maps.drawing.DrawingManager(drwngMgrProps);
  drawingManager.setMap(mapTile);
  }

  render() {
    return (
      <div className="App">
        <div className='GMap-canvas' ref="mapCanvas"></div>
      </div>
    );
  }
}

export default App;
