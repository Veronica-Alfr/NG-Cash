"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Accounts_1 = require("./Accounts");
const _1 = require(".");
class Transactions extends sequelize_1.Model {
}
Transactions.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    debitedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    creditedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    value: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: true,
    sequelize: _1.default,
    tableName: 'Transactions',
});
Accounts_1.default.hasMany(Transactions, { foreignKey: 'debitedAccountId', as: 'IdDebitedAccount' });
Accounts_1.default.hasMany(Transactions, { foreignKey: 'creditedAccountId', as: 'IdcreditedAccount' });
Transactions.belongsTo(Accounts_1.default, { foreignKey: 'debitedAccountId', as: 'IdDebitedAccount' });
Transactions.belongsTo(Accounts_1.default, { foreignKey: 'creditedAccountId', as: 'IdcreditedAccount' });
exports.default = Transactions;
//# sourceMappingURL=Transactions.js.map