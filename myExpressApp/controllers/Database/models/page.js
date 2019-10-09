module.exports = (sequelize, type) => {
    return sequelize.define('tbl_page', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
         page_url   : type.STRING,


    })
}