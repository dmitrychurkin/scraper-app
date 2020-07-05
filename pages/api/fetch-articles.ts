import { NextApiRequest, NextApiResponse } from 'next';
import { fetch } from '../../controller';

const fetchArticles = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await fetch();
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    res.statusCode = 400;
    res.json({
      success: false,
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

export default fetchArticles;
