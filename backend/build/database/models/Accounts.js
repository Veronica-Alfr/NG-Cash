"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Accounts extends sequelize_1.Model {
}
Accounts.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: _1.default,
    tableName: 'Accounts',
});
exports.default = Accounts;
//# sourceMappingURL=Accounts.js.map