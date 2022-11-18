import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Accounts extends Model {
    id!: number;
    balance: string;
}
  
Accounts.init({
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: STRING,
        allowNull: false,
    },
  }, {
    timestamps: false,
    sequelize: db,
    tableName: 'Accounts',
  });
  
export default Accounts;
