/*global google*/

import React, { Component } from 'react';
import './App.css';

import { polygonParams, polylineParams, drawingMgrProps, initMapOptions } from './mapProps';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }


  componentDidMount () {
    let mapTile = new google.maps.Map(this.refs.mapCanvas, initMapOptions());
    let drawingManager = new google.maps.drawing.DrawingManager(drawingMgrProps());

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
