
export const createOverlay = (completeEvent) => {
  let rawOverlay = completeEvent.overlay;
  let overlayCoords = rawOverlay.getPath().getArray().map((coordPair, i) => {
    return {lat: coordPair.lat(), lng: coordPair.lng()}
  });

  return {
    overlayId: completeEvent.overlay.id || Date.now(),
    overlayType: completeEvent.type,
    overlayCoords: overlayCoords
  };
}
