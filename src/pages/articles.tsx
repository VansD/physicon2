import { GetServerSideProps } from 'next';
import ArticlesList from '../components/articles/ArticlesList';
import { Article } from '../types/article';
import React from 'react';
import { Filters } from '@/components/articles/Filters';
import { Rubric } from '@/types/rubric';
import Head from 'next/head';

export interface ArticlesListProps {
  initialArticles: Article[];
  initialTotalPages: number;
  error?: string;
}

export interface FiltersProps {
  rubrics: Rubric[];
}

export interface MetaTitleProps {
  metaTitle: string;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/articles');
    const data = await response.json();
    const initialArticles = data.pageProps.articles;
    const rubrics = data.pageProps.rubrics;
    const initialTotalPages = data.pageProps.totalPages;
    const metaTitle = data.pageProps.metaData.title;

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=300'
    );

    return { props: { initialArticles, rubrics, initialTotalPages, metaTitle } };
  } catch (err) {
    return {
      props: {
        articles: [],
        totalPages: 0,
        error: `Ошибка при получении данных: ${err}`
      },
    };
  }
};

const ArticlesPage: React.FC<ArticlesListProps & FiltersProps & MetaTitleProps> =
  ({ initialArticles, rubrics, initialTotalPages, error, metaTitle }) => {
    return <React.Fragment>
      <Head >
        <title>{metaTitle}</title>
      </Head>
      <Filters rubrics={rubrics} />
      <ArticlesList initialArticles={initialArticles} initialTotalPages={initialTotalPages} error={error}/>
    </React.Fragment>;
  };

export default ArticlesPage;