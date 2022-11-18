import { INTEGER, Model, STRING } from 'sequelize';
import Accounts from './Accounts';
import db from '.';

class Users extends Model {
    id!: number;
    username: string;
    password: string;
    accountId: number;
}
  
Users.init({
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    accountId: {
      type: INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    sequelize: db,
    tableName: 'Users',
  });

    Users.hasMany(Accounts, { foreignKey: 'accountId' , as: 'idAccount' });

    Accounts.belongsTo(Users, { foreignKey: 'accountId', as: 'idAccount' });
  
export default Users;
