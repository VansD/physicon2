import React, { useEffect, useRef } from 'react';
import ArticleCard from './ArticleCard';
import styles from "@/styles/articles/articlePage.module.scss";
import { observer } from 'mobx-react-lite';
import { EmptyArticles } from './EmptyArticles';
import { ArticlesListProps } from '@/pages/articles';
import { Alert } from '../common/Alert';
import { articleStore } from '@/stores/articleStore';
import rubricStore from '@/stores/rubricStore';
import { Pagination } from '../common/Pagination';
import { Loader } from '../common/Loader';

const ArticlesList: React.FC<ArticlesListProps> = observer(({ initialArticles, initialTotalPages, error }) => {
  const { fetchArticles, paginationData, setTotalPages, setArticles, articles, totalPages, isLoading } = articleStore;
  const { activeRubrics, clearActiveRubrics } = rubricStore;

  const firstRender = useRef(true);

  useEffect(() => {
    const getFilteredData = async () => {
      await fetchArticles(1, activeRubrics)
    }

    if (!firstRender.current)
      getFilteredData()

  }, [activeRubrics.length]);

  useEffect(() => {
    setArticles(initialArticles);
    setTotalPages(initialTotalPages);
    firstRender.current = false;
  }, [initialArticles, initialTotalPages]);

  if (error)
    return <EmptyArticles>
      <Alert message={error ?? ""} />
    </EmptyArticles>

  if (isLoading)
    return <Loader />


  if (articles?.length === 0)
    return <EmptyArticles />


  const setCurrentPageCallback = async (page: number) => {
    clearActiveRubrics();
    await fetchArticles(page);
  }

  const handlePrevChange = async () => {
    const prevPage = paginationData.currentPage - 1;
    clearActiveRubrics();
    await fetchArticles(prevPage);
  }

  const handleNextChange = async () => {
    const nextPage = paginationData.currentPage + 1;
    clearActiveRubrics();
    await fetchArticles(nextPage);
  }

  return (<React.Fragment>
    <div className={styles.container}>
      <div className={styles.list}>
        {articles && articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
    {totalPages > 1 && <Pagination
      currentPage={paginationData.currentPage}
      totalPages={totalPages}
      onChangePage={setCurrentPageCallback}
      onPrevPage={handlePrevChange}
      onNextPage={handleNextChange}
    />}
  </React.Fragment>
  );
});

export default ArticlesList;