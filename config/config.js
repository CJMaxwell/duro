const dotenv = require('dotenv');

dotenv.config();

const creds = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: 'postgres',
    operatorsAliases: false,
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false
    //   }
    // },
    // dialectOptions: {
    //   ssl: {
    //     require: false,
    //     rejectUnauthorized: false
    //   }
    // },
  },
  test: {
    url: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: 'postgres',
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};

module.exports = creds;