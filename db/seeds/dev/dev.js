const dataObj = require('./data_helper.js');



exports.seed = (knex, Promise) => {
  return knex('coordinates').del()
  .then( () => knex('overlays').del())
  .then( () => knex('tours').del())
  .then( () => knex('submitters').del())
  .then( () => {
    return Promise.all();
  })
  .catch( error => console.log(`Error seeding data: ${error}`));
};
