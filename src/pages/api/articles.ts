import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = '1', rubrics = "" } = req.query;
  const currentPage = parseInt(page as string, 10);

  const externalApiUrl = `https://oblakoz.ru/_next/data/FP2fpEsz_SVEwoLoYME61/articles.json?rubrics=${rubrics}&page=${currentPage}`;

  try {
    const response = await fetch(externalApiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Ошибка при получении данных: ${error}` });
  }
}