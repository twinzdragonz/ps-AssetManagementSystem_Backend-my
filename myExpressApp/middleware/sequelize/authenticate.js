const Sequelize = require('sequelize');


// It contains the dbtype :username, password, the host name, database port and database name.
const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, { operatorsAliases: false });

//We instantiate Sequelize.
sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  sequelize.close();
});