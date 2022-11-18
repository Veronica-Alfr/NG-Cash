import { INTEGER, Model, STRING } from 'sequelize';
import Accounts from './Accounts';
import db from '.';

class Transactions extends Model {
    id!: number;
    debitedAccountId: number;
    creditedAccountId: number;
    value: string;
}
  
Transactions.init({
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    debitedAccountId: {
      type: INTEGER,
      allowNull: false,
    },
    creditedAccountId: {
      type: INTEGER,
      allowNull: false,
    },
    value: {
      type: STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    createdAt: true,
    sequelize: db,
    tableName: 'Transactions',
  });

    Accounts.hasMany(Transactions, { foreignKey: 'debitedAccountId' , as: 'IdDebitedAccount' });
    Accounts.hasMany(Transactions, { foreignKey: 'creditedAccountId' , as: 'IdcreditedAccount' });
    
    Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccountId', as: 'IdDebitedAccount' });
    Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccountId', as: 'IdcreditedAccount' });

export default Transactions;
