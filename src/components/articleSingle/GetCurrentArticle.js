import React, { useEffect, useState } from 'react';
import store from '../../store';
import setCurrentArticle from './modules/setCurrentArticle';

const GetSingleArticle = (idOrSlug) => {
  useEffect(() => {
    setCurrentArticle(idOrSlug);
  }, []);

  const [article, setArticle] = useState(store.getState().currentArticle);
  store.subscribe(() => {
    console.log('store.getState()');
    setArticle(store.getState().currentArticle);
    console.log(article);
  });

  return (
    <>
      <div>GetSingleArticle</div>
    </>
  );
};

export default GetSingleArticle;
