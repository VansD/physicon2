import React from 'react';
import styles from "@/styles/articles/articleCard.module.scss";
import { formatDate } from '@/utils/date';
import viewedImg from "../../../public/images/viewed.svg";
import { Article } from '@/types/article';
//import '../../../envConfig';
import Image from 'next/image';

interface ArticleProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <a className={styles.card}>
      <Image src={process.env.NEXT_PUBLIC_API + article.coverSrc} alt={article.title} className={styles.image} width={0} height={0} sizes="100vw" loading='lazy' />
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.info_viewed}>Статьи • {formatDate(article.date)}</span>
          <span className={styles.info_viewed}><Image src={viewedImg} alt="Просмотры"/>&nbsp;&nbsp;{article.views}</span>
        </div>
        <div className={styles.info_title}>{article.title}</div>
      </div>
    </a>
  );
};

export default ArticleCard;