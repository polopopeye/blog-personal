import React, { useEffect } from 'react';
import getArticlesList from './modules/getArticlesList';

const ArticleList = () => {
  useEffect(() => {
    console.log(getArticlesList());
  }, []);

  return (
    <>
      <div
        // id="${doc.data().name}"
        class="wrapper w-full rounded-b-md shadow-lg overflow-hidden   filteredSearch"
        // style="background:url('${
        //         doc.data().imgPost
        //       }');background-size: cover;background-position:center;margin-bottom: 0.25em;
        //       padding: 1em;order:${doc.data().order}"
      >
        <div class="bg-opacity-30 bg-gray-800 p-4 font-mono text-center  space-y-3 transition duration-300 hover:bg-opacity-60 hover:bg-gray-800 text-white">
          <h3 class=" hover:bg-opacity-50 text-xl font-bold   rounded-md  hover:bg-gray-900 hover:text-white">
            {/* ${doc.data().name} */}titulo asdasd
          </h3>
          <hr />
          {/* ${doc.data().desc} */}asdasdasd
        </div>
        <a
          //   href="/post/article?p=${
          //         doc.data().name
          //       }"
          class="hover:bg-opacity-60 bg-opacity-70 bg-gray-700 w-full flex justify-center py-4 text-white font-semibold transition duration-300 hover:bg-red-500"
        >
          Mas info
        </a>
      </div>
    </>
  );
};

export default ArticleList;
