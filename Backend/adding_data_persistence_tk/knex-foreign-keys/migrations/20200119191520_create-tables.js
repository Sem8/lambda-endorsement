exports.up = function(knex) {
  // 1 farm has many ranchers
  return knex.schema
    .createTable("farms", tbl => {
      tbl.increments();
      tbl.string("farm_name", 128).notNullable();
    })
    .createTable("ranchers", tbl => {
      tbl.increments();
      tbl.string("rancher_name", 128);
      // foreign key that points to farms table
      tbl
        .integer("farm_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("farms");
    })
    .createTable('farm_animals', tbl => {
        tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        tbl.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('animals')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ranchers')
    .dropTableIfExists('farms')
};
