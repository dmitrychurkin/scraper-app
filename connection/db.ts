import { Sequelize, Dialect } from 'sequelize';
import article from '../model/article';

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  DB_HOST,
  DB_PORT,
} = process.env;

export default class Db {
  private static _config = {
    username: MYSQL_USER ?? 'user',
    password: MYSQL_PASSWORD ?? 'user',
    database: MYSQL_DATABASE ?? 'scraper-app',
    host: DB_HOST ?? 'scraper-app-db',
    port: Number.parseInt(DB_PORT ?? '3306'),
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
      await this._connection.sync({ force: true, alter: true });
    }

    return this._connection;
  }
}
