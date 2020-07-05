import { Model, DataTypes, Sequelize } from 'sequelize';

export class Article extends Model {}

export default (sequelize: Sequelize): Article =>
  Article.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_comments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'article',
      timestamps: false,
    }
  );

export interface IArticle {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly points: number;
  readonly user_name: string;
  readonly total_comments: number;
  readonly created_at: Date;
}
