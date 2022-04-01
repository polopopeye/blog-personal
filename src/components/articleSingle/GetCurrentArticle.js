import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import store from '../../store';
import setCurrentArticle from './modules/setCurrentArticle';
import { format } from 'fecha';
import { Link } from 'gatsby';
import getArticlesList from '../articlesList/modules/getArticlesList';
import ArticleNotFound from '../articlesList/modules/ArticleNotFound';

const GetSingleArticle = (idOrSlug) => {
  const [article, setArticle] = useState(store.getState().currentArticle);
  const [articles, setArticles] = useState(store.getState().articles);
  const [currentTime, setCurrentTime] = useState('fetching...');
  getArticlesList();

  useEffect(() => {
    setCurrentArticle(idOrSlug);
  }, []);

  store.subscribe(() => {
    setArticle(store.getState().currentArticle);
    setArticles(store.getState().articles);

    setCurrentTime(
      format(store.getState().currentArticle?.timeStamp, 'dddd MMMM Do, YYYY')
    );
  });

  const ResultsContainer = () => {
    return (
      <>
        <div
          className=" fixed left-0 w-full top-36 md:top-20 md:pr-72 md:ml-64"
          onClick={() => {
            for (
              let i = 0;
              i < document.getElementsByClassName('filteredSearch').length;
              i++
            ) {
              const itemSearch = document.getElementsByClassName(
                'filteredSearch'
              )[i];
              itemSearch.style.display = 'none';
            }
          }}
        >
          <div className="rounded-md bg-primary max-w-max mx-auto">
            <ArticleNotFound />
          </div>
          {articles.map((article, index) => (
            <div
              key={index}
              className="filteredSearch max-w-3xl m-auto bg-center bg-cover p-8 bg-primary"
              style={{
                backgroundImage: 'url(' + article.coverImg + ')',
                display: 'none',
              }}
            >
              <Link href={'/' + article.slug}>
                <h4 className="text-2xl font-mono">{article.title}</h4>
                {article.timeStamp && (
                  <h5 className="text-right">
                    {format(article.timeStamp, 'dddd MMMM Do, YYYY')}
                  </h5>
                )}
                <div className="text-sm p-8">{article.desc}</div>
                <div className="hidden">{article.postinHTML}</div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full  md:max-w-5xl mx-auto px-8 font-mono bg-secondary">
        <ResultsContainer />

        {article.error === 404 ? (
          <ArticleNotFound display="block" />
        ) : (
          <>
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
              <div className="articleBody text-justify">
                {parse(article.postinHTML)}
              </div>
            )}
          </>
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
