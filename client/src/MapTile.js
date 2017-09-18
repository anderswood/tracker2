/*global google*/

import React, { Component } from 'react';

import { drawingMgrProps, initMapOptions } from './mapProps';
import { createOverlay } from './helper';

class MapTile extends Component {

  componentDidMount () {
    let mapTile = new google.maps.Map(this.refs.mapCanvas, initMapOptions());
    let drawingManager = new google.maps.drawing.DrawingManager(drawingMgrProps());

    drawingManager.setMap(mapTile);
    // this.props.handleAddMap(mapTile);
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
      drawingManager.setDrawingMode(null);
      completeEvent.overlay.id = Date.now();
      let newOverlay = createOverlay(completeEvent)

      this.props.handleUpdateOverlays(newOverlay);

      google.maps.event.addListener(completeEvent.overlay.getPath(), 'insert_at', () => {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      })

      google.maps.event.addListener(completeEvent.overlay.getPath(), 'set_at', () => {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      })

      google.maps.event.addListener(completeEvent.overlay, 'click', ()=> {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      })
    });
  }

  render () {
    return(
      <div className='GMap-canvas' ref="mapCanvas"></div>
    )
  }

}

export default MapTile;
