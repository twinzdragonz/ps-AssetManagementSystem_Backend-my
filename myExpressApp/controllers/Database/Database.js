const Sequelize = require('sequelize');

// user
const UserModel = require('./models/user');
const UserGroupModel = require('./models/userGroup');
const UserGroupIndexModel = require('./models/userGroupIndex');
// page access 
const PageModel = require('./models/page');
const PageGroupIndexModel = require('./models/pageGroupIndex');


// It contains the dbtype :username, password, the host name, database port and database name.
const path = 'postgres://twinzdragonz:twinz0000@54.251.165.232:81/ams_db';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

const User = UserModel(sequelize,Sequelize);
const UserGroup = UserGroupModel(sequelize,Sequelize);
const UserGroupIndex = UserGroupIndexModel(sequelize,Sequelize);
const Page = PageModel(sequelize,Sequelize);
const PageGroupIndex = PageGroupIndexModel(sequelize,Sequelize);


sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });

  module.exports = {
    User,
    UserGroup,
    UserGroupIndex,
    Page,
    PageGroupIndex
  }




