const Sequelize = require('sequelize');
const UserModel = require('./models/user');

// It contains the dbtype :username, password, the host name, database port and database name.
const path = 'postgres://twinzdragonz:twinz0000@54.251.165.232:81/ams_db';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

const User = UserModel(sequelize,Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });

  module.exports = {
    User
  }




