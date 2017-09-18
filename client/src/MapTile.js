/*global google*/

import React, { Component } from 'react';

import { drawingMgrProps, initMapOptions } from './mapProps';

class MapTile extends Component {

  componentDidMount () {
    let mapTile = new google.maps.Map(this.refs.mapCanvas, initMapOptions());
    let drawingManager = new google.maps.drawing.DrawingManager(drawingMgrProps());

    drawingManager.setMap(mapTile);
    this.props.handleAddMap(mapTile);
    this.addDrawModeChanged(drawingManager);
    this.addOverlayComplete(drawingManager);
  }

  addDrawModeChanged (drawingManager) {
    google.maps.event.addListener(drawingManager, 'drawingmode_changed', () => {
      // if (this.state.selectedOverlay) {
      //   this.state.selectedOverlay.setEditable(false)
      //   this.state.selectedOverlay.setDraggable(false)
      // }
    })
  }

  addOverlayComplete (drawingManager) {
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (completeEvent) => {
      if (completeEvent.type === 'polygon' || completeEvent.type === 'polyline') {
        drawingManager.setDrawingMode(null);

        // addClickListener(newOverlay);
        // add to displayed overalys
        // add to selected overlays-
        this.props.handleAddSelectedOverlay(completeEvent);
        this.props.handleAddDisplayedOverlay(completeEvent);
        // this.retrieveOverlayCoordsFromMap(newOverlay);
        // this.setSelectedShape(newOverlay)
      }
    });
  }

  render () {
    return(
      <div className='GMap-canvas' ref="mapCanvas"></div>
    )
  }

}

export default MapTile;
