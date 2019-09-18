const Sequelize = require('sequelize');
const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

Note.findById(1).then((note) => {
    console.log(note.get({ plain: true }));
    console.log('********************')
    console.log(`id: ${note.id}, description: ${note.description}`);
}).finally(() => {
    sequelize.close();
});