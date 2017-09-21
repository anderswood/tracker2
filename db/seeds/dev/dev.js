const dataObj = require('../data_helper.js');

const submitters = dataObj.submitters;
const tours = dataObj.tours;

const createSubmitter = (knex, submitter, tourArr) => {
  return knex('submitters').insert({
    name: submitter.name,
    email: submitter.email,
    notes: submitter.notes
  }, 'id')
  .then(submitterId => {
    let tourPromises = [];

    tourArr.forEach( tour => {
      tourPromises.push(createTour(knex, tour, submitterId[0]));
    })
    return Promise.all(tourPromises);
  })
}

const createTour = (knex, tour, submitterId) => {
  return knex('tours').insert({
    submitter_id: submitterId,
    tour_app_id: tour.tourId,
    overlay_qty: tour.overlays.length,
    tour_name: tour.info.name,
    tour_last_visited: tour.info.lastVisited,
    tour_agency: tour.info.agency,
    tour_description: tour.info.descripiton
  }, 'id')
  .then( tourId => {
    let overlayPromises = [];

    tour.overlays.forEach( overlay => {
      overlayPromises.push(createOverlay(knex, overlay, tourId[0]));
    })
    return Promise.all(overlayPromises);
  })
}

const createOverlay = (knex, overlay, tourId) => {
  return knex('overlays').insert({
    tour_id: tourId,
    overlay_app_id: overlay.overlayId,
    overlay_type: overlay.overlayType
  }, 'id')
  .then( overlayId => {
    let coordinatePromises = [];

    overlay.overlayCoords.forEach( coordsPair => {
      coordinatePromises.push(createCoordinates(knex, coordsPair, overlayId[0]));
    })
    return Promise.all(coordinatePromises);
  })
}

const createCoordinates = (knex, coordsPair, overlayId) => {
  return knex('coordinates').insert({
    overlay_id: overlayId,
    coordinates_lat: coordsPair.lat,
    coordinates_lng: coordsPair.lng
  });
}

exports.seed = (knex, Promise) => {
  return knex('coordinates').del()
  .then( () => knex('overlays').del())
  .then( () => knex('tours').del())
  .then( () => knex('submitters').del())
  .then( () => {
    let submitterPromises = [];

    for (i = 0; i < 2; i++) {
      let submitter = submitters[i];
      let tourArr = tours[i];

      submitterPromises.push(createSubmitter(knex, submitter, tourArr))
    }

    return Promise.all(submitterPromises);
  })
  .catch( error => console.log(`Error seeding data: ${error}`));
};
