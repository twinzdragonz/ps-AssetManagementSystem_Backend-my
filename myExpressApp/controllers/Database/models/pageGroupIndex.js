module.exports = (sequelize, type) => {
    return sequelize.define('tbl_page_group_indices', {
        page_id: type.INTEGER,
        group_id : type.INTEGER

    })
}