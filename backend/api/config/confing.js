export default {
    database: 'users',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: '../database/users.sqlite',
        define: {
            underscored: true
        }
    }
};