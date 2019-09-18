const Sequelize = require('sequelize');
const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function updateRow() {

    let id = await Note.update(
        { description: 'Finished reading history book' },
        { where: { id: 1 } });
    sequelize.close();
}

updateRow();