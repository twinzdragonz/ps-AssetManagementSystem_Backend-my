module.exports = (sequelize, type) => {
    return sequelize.define('tbl_user_group_indices', {
       user_id:type.INTEGER,
       group_id:type.INTEGER

    })
}