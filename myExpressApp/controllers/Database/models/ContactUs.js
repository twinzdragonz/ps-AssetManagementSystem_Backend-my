module.exports = (sequelize, type) => {
    return sequelize.define('tbl_customer_inquiry', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
         email   : type.STRING,
         phone_number : type.STRING,
         message : type.STRING


    })
}