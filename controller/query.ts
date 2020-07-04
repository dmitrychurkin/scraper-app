import { Article } from '../model/article';
import ArticleDto from '../dto/ArticleDto';
import { db } from '../connection';

export default async (): Promise<any> => {
  await db.establish();
  const articles = await Article.findAll({
    order: [['created_at', 'DESC']],
  });
  return articles.map((article: any) =>
    new ArticleDto(
      article.id,
      article.title,
      article.url,
      article.points,
      article.user_name,
      article.total_comments,
      article.created_at
    ).toJSON()
  );
};
