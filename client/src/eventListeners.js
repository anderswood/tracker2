/*global google*/

export const addDrawModeChanged = (drawingManager) => {
  google.maps.event.addListener(drawingManager, 'drawingmode_changed', () => {
    // if (this.state.selectedOverlay) {
    //   this.state.selectedOverlay.setEditable(false)
    //   this.state.selectedOverlay.setDraggable(false)
    // }
  })
}
