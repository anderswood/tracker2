/*global google*/

import * as eventListeners from './eventListeners';

import React, { Component } from 'react';

import { drawingMgrProps, initMapOptions } from './mapProps';

class MapTile extends Component {

  componentDidMount () {
    let mapTile = new google.maps.Map(this.refs.mapCanvas, initMapOptions());
    let drawingManager = new google.maps.drawing.DrawingManager(drawingMgrProps());

    drawingManager.setMap(mapTile);

    this.props.handleAddMap(mapTile);

    eventListeners.addDrawModeChanged(drawingManager);
  }

  render () {
    return(
      <div className='GMap-canvas' ref="mapCanvas"></div>
    )
  }

}

export default MapTile;
