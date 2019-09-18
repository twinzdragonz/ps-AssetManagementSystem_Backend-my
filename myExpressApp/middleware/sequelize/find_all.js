const Sequelize = require('sequelize');
const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function findAllRows() {

    let notes = await Note.findAll({ raw: true });
    console.log(notes);

    sequelize.close();
}

findAllRows();