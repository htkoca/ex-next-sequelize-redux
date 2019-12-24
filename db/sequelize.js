// dependencies
import Sequelize from 'sequelize';

// sequelize dependencies
import { Question } from '@/db/models';

// init instances
const sql = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
);

// connect test
sql
  .authenticate()
  .then(() => {
    console.log('CONNECTED! ');
  })
  .catch((err) => {
    console.log('SOMETHING DONE GOOFED');
  })
  .done();

const db = {
  sql,
  Question: Question(sql, Sequelize)
};

export default db;
