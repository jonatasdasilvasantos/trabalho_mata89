const { Sequelize, DataType } = require('sequelize');

export default (Sequelize, DataType) => {
    const Users = Sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        university: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        employee: {
            type: DataType.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Users;
}