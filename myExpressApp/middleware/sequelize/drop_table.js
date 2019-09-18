const Sequelize = require('sequelize');

const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let tbl_dummy = sequelize.define('tbl_dummy', {
    description: Sequelize.STRING
});

// table.SQL_FUNC -> ECHO
tbl_dummy.drop().then(() => {
    console.log('table deleted');
}).finally(() => {
    sequelize.close();
});