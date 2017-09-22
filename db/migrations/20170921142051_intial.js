
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('submitters', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('notes');
    }),
    knex.schema.createTable('tours', table => {
      table.increments('id').primary();
      table.integer('submitter_id').unsigned();
      table.foreign('submitter_id').references('submitters.id');
      table.bigInteger('tour_app_id');
      table.integer('overlay_qty');
      table.string('tour_name');
      table.string('tour_last_visited');
      table.string('tour_agency');
      table.string('tour_description');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('overlays', table => {
      table.increments('id').primary();
      table.integer('tour_id').unsigned();
      table.foreign('tour_id').references('tours.id');
      table.bigInteger('overlay_app_id');
      table.string('overlay_type');
    }),
    knex.schema.createTable('coordinates', table => {
      table.increments('id').primary();
      table.integer('overlay_id').unsigned();
      table.foreign('overlay_id').references('overlays.id');
      table.string('coordinates_lat');
      table.string('coordinates_lng');
    }), 
  ]);
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('coordinates'),
    knex.schema.dropTable('overlays'),
    knex.schema.dropTable('tours'),
    knex.schema.dropTable('submitters'),
  ]);
};
