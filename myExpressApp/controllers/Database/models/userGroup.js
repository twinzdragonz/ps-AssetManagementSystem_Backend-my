module.exports = (sequelize, type) => {
    return sequelize.define('tbl_user_group', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        group_name     : type.STRING

    })
}