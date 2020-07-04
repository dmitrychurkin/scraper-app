import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { getTimestamp } from '../util';
import { Article, IArticle } from '../model/article';
import { db } from '../connection';

export default async (): Promise<Article[] | void> => {
  const articles: Array<IArticle> = [];
  const html = await fetch('https://news.ycombinator.com').then((res) =>
    res.text()
  );
  const $ = cheerio.load(html);

  $('.athing').map((_, el) => {
    const detail = $(el.nextSibling).find('.subtext');

    articles.push({
      id: Number.parseInt(el.attribs.id),
      title: $(el).find('.title .storylink').text(),
      url: $(el).find('.title a').attr().href,
      points: Number.parseInt(detail.find('.score').text().split(' ')[0]) || 0,
      user_name: detail.find('.hnuser').text(),
      total_comments:
        Number.parseInt(detail.children().last().text().split('comments')[0]) ||
        0,
      created_at: getTimestamp(
        ...detail.find('.age').text().split(' ').slice(0, 2)
      ),
    });
  });

  if (articles.length) {
    await db.establish();
    const fields = [
      'id',
      'title',
      'url',
      'points',
      'user_name',
      'total_comments',
      'created_at',
    ];
    return Article.bulkCreate(articles, {
      fields,
      updateOnDuplicate: fields,
    });
  }
};
