import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import store from '../../store';

import ArticleItem from './modules/ArticleItem';
import ArticleNotFound from './modules/ArticleNotFound';

const ArticleList = () => {
  const i18Lang = useTranslation('common')?.i18n.language;
  const [mounted, setMounted] = useState(false);

  const getFilteredArticles = () =>
    store
      .getState()
      .articles.filter((art) => art.lang === i18Lang)
      .sort((a, b) => Number(b.timeStamp) - Number(a.timeStamp));

  const [articles, setArticles] = useState<typeof store extends { getState: () => { articles: infer A } } ? A : never>([] as any);

  useEffect(() => {
    setMounted(true);
    setArticles(getFilteredArticles());

    const unsubscribe = store.subscribe(() => {
      setArticles(getFilteredArticles());
    });

    return () => unsubscribe();
  }, [i18Lang]);

  if (!mounted) return null;

  return (
    <section className="bg-secondary w-full md:max-w-5xl mx-auto flex-start justify-center items-center p-4">
      <ArticleNotFound />

      {articles.map((dataPost, index) => {
        return <ArticleItem key={dataPost.id || index} dataPost={dataPost} />;
      })}
    </section>
  );
};

export default ArticleList;
