import React, { useEffect } from 'react';
import twFormater from '../../utils/twFormater';
import getArticlesList from './getArticlesList';

const ArticleItem = ({ dataPost }) => {
  const { desc, imgPost, name, order } = dataPost;

  return (
    <>
      <div
        id={name}
        className="wrapper w-full rounded-b-md shadow-lg overflow-hidden filteredSearch bg-cover bg-center mb-1 p-4"
        style={{ backgroundImage: 'url(' + imgPost + ')', order: order }}
      >
        <div
          className={twFormater({
            base:
              'bg-opacity-30 bg-gray-800 p-4 font-mono text-center space-y-3 duration-300 text-white transition-all ',
            hover: 'bg-gray-800 bg-opacity-60',
          })}
        >
          <h3
            className={twFormater({
              base: 'text-xl font-bold rounded-md hover:text-white',
              hover: 'bg-gray-900 bg-opacity-50 ',
            })}
          >
            {name}
          </h3>
          <hr />
          {desc}
        </div>
        <a
          href={'/post/article?p=' + name}
          className={twFormater({
            base:
              'bg-opacity-70 bg-gray-700 w-full flex justify-center py-4 text-white font-semibold transition-all duration-300',
            hover: 'bg-red-500 bg-opacity-60 ',
          })}
        >
          Mas info
        </a>
      </div>
    </>
  );
};

export default ArticleItem;
