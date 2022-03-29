import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
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
      <div className="w-full md:max-w-4xl mx-auto px-8 font-mono">
        {/* Header */}
        <div>
          <h1 className="text-center">{article.title}</h1>
          <h1 className="text-center">{article.timeStamp}</h1>
          <div className="text-center">{article.desc}</div>
        </div>
        {/* Article */}
        {article.postinHTML && (
          <div className="text-center">{parse(article.postinHTML)}</div>
        )}
      </div>
    </>
  );
};

GetSingleArticle.propTypes = {
  idOrSlug: PropTypes.string.isRequired,
};

export default GetSingleArticle;

// const postData = {
//   id: string,
//   lang: string,
//   title: string,
//   slug: string,
//   coverImg: string,
//   desc: string,
//   postinHTML: string,
//   timeStamp: number,
// };
