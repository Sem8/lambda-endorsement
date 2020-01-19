const db = require('./db-config.js');

db.select('*').from('users');

// shortcut
db('users'); // resolves to an array full of users with promises

db('users').where({ id: 3 }); // an array containing any users that match the where


db('users').insert({ name: 'amanda', age: 76 });
// resolves to an array containing the ide of the new user

db('users').where({ id: 5 }).update({ age: 77 });
// resolves to the count of records updated