// dependencies
import Sequelize from 'sequelize';

// init instances
const sql = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
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

export default sql;
