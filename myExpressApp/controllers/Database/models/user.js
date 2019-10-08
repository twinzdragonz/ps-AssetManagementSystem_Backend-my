module.exports = (sequelize, type) => {
    return sequelize.define('tbl_users', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username     : type.STRING,
        password : type.STRING,
        salt     : type.STRING,
        token    : type.STRING
    })
}