
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'diandra', website: 'www.diandrassite.com'},
        {username: 'amy' },
        { username: 'bill'}

      ]);
    });
};
