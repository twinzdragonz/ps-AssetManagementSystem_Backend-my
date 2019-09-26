const Sequelize = require('sequelize');

const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});


class SequelizeSimplified
{
    select(table,key)
   {
        let Node = sequelize.define(table, {
            key: Sequelize.STRING
        });

        let element =  Node.findOne();

        console.log(element.get(key));
        sequelize.close();

        return element

   }
   // im not sure i can do like this
   update(table,key,arguments)
   {

    let Node = sequelize.define(table, {
        key: Sequelize.STRING
    });
       
        let id = await Node.update(
             arguments
            );

        sequelize.close();

        return id;
   }




}
module.exports = SequelizeSimplified;
