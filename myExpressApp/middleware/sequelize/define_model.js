const Sequelize = require('sequelize');

const path = 'postgres://postgres:twinz0000@localhost:5432/postgres';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

// why we need to hardcode here since we can parse using function
let tbl_users = sequelize.define('tbl_users', {
    username : Sequelize.STRING,
    password : Sequelize.STRING,
    login_time : Sequelize.TIME,
    logout_time : Sequelize.TIME,
    is_firsttimer_user : Sequelize.BOOLEAN,
    uuid : Sequelize.UUID,
    page_access : Sequelize.INTEGER,
    pror_money : Sequelize.NUMBER,
    curr_money : Sequelize.NUMBER
    // this can be flexible?
});

tbl_users.sync().then(() => {
    console.log('tbl_users. created');
}).finally(() => {
    sequelize.close();
})

// why we need to hardcode here since we can parse using function =_=
let tbl_users_ext = sequelize.define('tbl_users_ext', {
    // foreach key ?? : Value ?? assign this. 
     address : Sequelize.STRING,
     postcode : Sequelize.INTEGER,
     office_number : Sequelize.INTEGER,
     mobile_number : Sequelize.INTEGER,
     three_step_sign : Sequelize.BOOLEAN,

    // this can be flexible?
});

tbl_users_ext.sync().then(() => {
    console.log('tbl_users_ext created');
}).finally(() => {
    sequelize.close();
})

// why we need to hardcode here since we can parse using function =_=
let tbl_dummy = sequelize.define('tbl_dummy', {
    // foreach key ?? : Value ?? assign this. 
     descriptions : Sequelize.STRING
    // this can be flexible?
});

tbl_dummy.sync().then(() => {
    console.log('tbl_dummy created');
}).finally(() => {
    sequelize.close();
})


