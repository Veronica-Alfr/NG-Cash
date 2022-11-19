"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Accounts_1 = require("./Accounts");
const _1 = require(".");
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    accountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: _1.default,
    tableName: 'Users',
});
Users.hasMany(Accounts_1.default, { foreignKey: 'accountId', as: 'idAccount' });
Accounts_1.default.belongsTo(Users, { foreignKey: 'accountId', as: 'idAccount' });
exports.default = Users;
//# sourceMappingURL=Users.js.map