import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import store from '../../store';

import ArticleItem from './modules/ArticleItem';
import ArticleNotFound from './modules/ArticleNotFound';

const ArticleList = () => {
  const i18Lang = useTranslation()?.i18n.language;

  const [articles, setArticles] = useState(
    store
      .getState()
      .articles.filter((art) => art.lang === i18Lang)
      .sort((a, b) => b.timeStamp - a.timeStamp)
  );
  store.subscribe(() =>
    setArticles(
      store
        .getState()
        .articles.filter((art) => art.lang === i18Lang)
        .sort((a, b) => b.timeStamp - a.timeStamp)
    )
  );

  useEffect(() => {
    setArticles(
      store
        .getState()
        .articles.filter((art) => art.lang === i18Lang)
        .sort((a, b) => b.timeStamp - a.timeStamp)
    );
  }, [i18Lang]);

  return (
    <section className="bg-secondary w-full md:max-w-5xl mx-auto flex-start justify-center items-center p-4">
      <ArticleNotFound />

      {articles.map((dataPost) => {
        console.log(articles);
        return <ArticleItem dataPost={dataPost} />;
      })}
    </section>
  );
};

export default ArticleList;
