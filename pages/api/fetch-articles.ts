import { NextApiRequest, NextApiResponse } from 'next';
import { fetch } from '../../controller';

const fetchArticles = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const articles = await fetch();
  res.statusCode = 200;
  res.json({ articles });
};

export default fetchArticles;
