import React, { useEffect, useState } from 'react';
import store from '../../store';
import ArticleItem from './modules/ArticleItem';
import ArticleNotFound from './modules/ArticleNotFound';
import getArticlesList from './modules/getArticlesList';

const ArticleList = () => {
  const [articles, setArticles] = useState(store.getState().articles);
  useEffect(() => {
    getArticlesList(setArticles);
  }, []);
  return (
    <section
      id="sectionPost"
      class=" w-full flex-start justify-center items-center px-2"
    >
      <ArticleNotFound />
      {articles.map((dataPost) => {
        return (
          <>
            <ArticleItem dataPost={dataPost} />
          </>
        );
      })}
    </section>
  );
};

export default ArticleList;
