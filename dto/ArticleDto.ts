import moment from 'moment';
import { IArticle } from '../model/article';

export default class ArticleDto implements IArticle {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly points: number;
  readonly user_name: string;
  readonly total_comments: number;
  readonly created_at: Date;
  constructor(
    id: number,
    title: string,
    url: string,
    points: number,
    user_name: string,
    total_comments: number,
    created_at: Date
  ) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.points = points;
    this.user_name = user_name;
    this.total_comments = total_comments;
    this.created_at = created_at;
  }

  public toJSON(): IArticleDto {
    return {
      id: this.id,
      title: this.title,
      url: this.url,
      points: this.points,
      userName: this.user_name,
      totalComments: this.total_comments,
      created: moment(this.created_at).fromNow(),
    };
  }
}

export interface IArticleDto {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly points: number;
  readonly userName: string;
  readonly totalComments: number;
  readonly created: string;
}
