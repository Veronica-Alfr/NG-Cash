import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  database: process.env.DB_NAME || 'ng-cash',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
}

module.exports = config;