import { Sequelize, Dialect } from 'sequelize';
import article from '../model/article';

const {
  MYSQL_USER = 'user',
  MYSQL_PASSWORD = 'user',
  MYSQL_DATABASE = 'scraper-app',
  DB_HOST = 'scraper-app-db',
  DB_PORT = '3306',
  NODE_ENV = 'development',
} = process.env;

export default class Db {
  private static _config = {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: DB_HOST,
    port: Number.parseInt(DB_PORT),
  };

  private static _connection: Sequelize;

  private static get config() {
    return this._config;
  }

  static async establish(): Promise<Sequelize> {
    if (!this._connection) {
      this._connection = new Sequelize({
        ...this.config,
        dialect: 'mysql' as Dialect,
      });

      await this._connection.authenticate();
      article(this._connection);
      await this._connection.sync(
        NODE_ENV !== 'production' ? { force: true, alter: true } : {}
      );
    }

    return this._connection;
  }
}
