module.exports = (sequelize, type) => {
    return sequelize.define('tbl_users_ext', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        phone_number     : type.STRING,
        birth_date : type.STRING,
        address     : type.STRING,
        postcode    : type.STRING,
        company_id : type.INTEGER


    })
}