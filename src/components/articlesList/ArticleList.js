import React, { useState } from 'react';
import store from '../../store';

import ArticleItem from './modules/ArticleItem';
import ArticleNotFound from './modules/ArticleNotFound';

const ArticleList = () => {
  const [articles, setArticles] = useState(store.getState().articles);
  store.subscribe(() => setArticles(store.getState().articles));

  return (
    <section
      id="sectionPost"
      className=" w-full flex-start justify-center items-center px-2"
    >
      <ArticleNotFound />

      {articles.map((dataPost) => (
        <ArticleItem dataPost={dataPost} />
      ))}
    </section>
  );
};

export default ArticleList;
