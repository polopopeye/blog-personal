import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import store from '../../store';
import setCurrentArticle from './modules/setCurrentArticle';
import { format } from 'fecha';

const GetSingleArticle = (idOrSlug) => {
  useEffect(() => {
    setCurrentArticle(idOrSlug);
  }, []);

  const [article, setArticle] = useState(store.getState().currentArticle);
  const [currentTime, setCurrentTime] = useState('fetching...');

  store.subscribe(() => {
    setArticle(store.getState().currentArticle);

    setCurrentTime(
      format(store.getState().currentArticle.timeStamp, 'dddd MMMM Do, YYYY')
    );

    console.log(article);
  });
  console.log(currentTime);

  return (
    <>
      <div className="w-full md:max-w-4xl mx-auto px-8 font-mono bg-secondary">
        {/* Header */}
        <div
          style={{
            backgroundImage: `url(${article.coverImg})`,
            backgroundBlendMode: 'darken',
          }}
          className="bg-tertiary p-4 rounded-b-lg font-extrabold bg-center bg-cover "
        >
          {currentTime && <h1 className="text-center">{currentTime}</h1>}
          <h1 className="text-center text-2xl">{article.title}</h1>
          <div className="  text-sm text-justify font-light font-sans">
            {article.desc}
          </div>
        </div>
        {/* Article */}
        {article.postinHTML && (
          <div className="text-justify">{parse(article.postinHTML)}</div>
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
