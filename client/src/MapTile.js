/*global google*/

import React, { Component } from 'react';

import { drawingMgrProps, initMapOptions } from './mapProps';
import { createOverlay } from './helper';
import NewTour from './NewTour';
import TourListContainer from './containers/TourListContainer';


class MapTile extends Component {
  constructor (props) {
    super(props)
    this.state ={
      mapObj: ''
    }
  }

  componentDidMount () {
    this.resetMap()
  }

  resetMap () {
    let mapTile = new google.maps.Map(this.refs.mapCanvas, initMapOptions());
    let drawingManager = new google.maps.drawing.DrawingManager(drawingMgrProps());

    drawingManager.setMap(mapTile);
    // this.props.handleAddMap(mapTile);
    this.addDrawModeChanged(drawingManager);
    this.addOverlayListeners(drawingManager);
    this.setState({mapObj: mapTile});
  }

  addDrawModeChanged (drawingManager) {
    google.maps.event.addListener(drawingManager, 'drawingmode_changed', () => {
      // if (this.state.selectedOverlay) {
      //   this.state.selectedOverlay.setEditable(false)
      //   this.state.selectedOverlay.setDraggable(false)
      // }
    })
  }

  addOverlayListeners (drawingManager) {
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (completeEvent) => {
      drawingManager.setDrawingMode(null);
      completeEvent.overlay.id = Date.now();
      let newOverlay = createOverlay(completeEvent);

      this.props.handleUpdateOverlays(newOverlay);

      google.maps.event.addListener(completeEvent.overlay.getPath(), 'insert_at', () => {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      });

      google.maps.event.addListener(completeEvent.overlay.getPath(), 'set_at', () => {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      });

      google.maps.event.addListener(completeEvent.overlay, 'click', ()=> {
        let newOverlay = createOverlay(completeEvent);

        this.props.handleUpdateOverlays(newOverlay);
      });
    });
  }

  render () {
    return(
      <section className='canvas-container'>
        <div className='GMap-canvas' ref="mapCanvas"></div>
        <NewTour handleResetMap={ this.resetMap.bind(this) } />
        <TourListContainer  handleResetMap={ this.resetMap.bind(this) }
                            mapObj={ this.state.mapObj }/>
        {/* <SubmitToursBtn /> */}
      </section>
    )
  }

}

export default MapTile;
