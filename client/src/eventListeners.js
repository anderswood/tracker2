/*global google*/

export const addDrawModeChanged = (drawingManager) => {
  google.maps.event.addListener(drawingManager, 'drawingmode_changed', () => {
    // if (this.state.selectedOverlay) {
    //   this.state.selectedOverlay.setEditable(false)
    //   this.state.selectedOverlay.setDraggable(false)
    // }
  })
}

export const addOverlayComplete = (drawingManager) => {
  google.maps.event.addListener(drawingManager, 'overlaycomplete', (completeEvent) => {
    if (completeEvent.type === 'polygon' || completeEvent.type === 'polyline') {
      drawingManager.setDrawingMode(null);

      let newOverlay = completeEvent.overlay;
      newOverlay.type = completeEvent.type;
      newOverlay.id = Date.now();

      addClickListener(newOverlay);
      console.log(this.props);
      // add to displayed overalys
      // add to selected overlays-
      // this.retrieveOverlayCoordsFromMap(newOverlay);
      // this.setSelectedShape(newOverlay)
    }
  });
}

export const addClickListener = (newOverlay) => {
  google.maps.event.addListener(newOverlay, 'click', ()=> {
    // this.setSelectedShape(newOverlay)
    google.maps.event.addListener(newOverlay.getPath(), 'insert_at', (e) => {
      // this.retrieveOverlayCoordsFromMap(newOverlay);
    })
    google.maps.event.addListener(newOverlay.getPath(), 'set_at', (e) => {
      // this.retrieveOverlayCoordsFromMap(newOverlay);
    })
  })
}
