import React, { useEffect, useRef, useState } from 'react';

import './modules/styleEditor.css';
import isConnected from '../isConnected';
import { createArticle } from './modules/createArticle';
import { Menu } from '@headlessui/react';
import { articles } from './constants';
import FormArticleCreation from './FormArticleCreation';
import handleEditArticle from './modules/handleEditArticle';

const Articles = () => {
  const editorRef = useRef(),
    inputArticleTitle = useRef(),
    inputArticleImgURL = useRef(),
    inputArticleDesc = useRef(),
    inputArticleOrder = useRef();

  const [idArticle, setIdArticle] = useState(undefined),
    [isUserConected, setIsUserConected] = useState(false);

  const [postInHtml, setPostInHtml] = useState(undefined);

  useEffect(() => {
    isConnected(setIsUserConected);
    const urlParams = new URLSearchParams(window?.location?.search);
    if (urlParams.get(articles.propID))
      setIdArticle(urlParams.get(articles.propID));
  }, []);

  useEffect(() => {
    handleEditArticle(idArticle, {
      inputArticleTitle,
      inputArticleImgURL,
      inputArticleDesc,
      inputArticleOrder,

      setPostInHtml,
    });
  }, [idArticle]);

  return (
    <>
      <script
        src="https://cdn.tiny.cloud/1/4ge8itj7zovsnq0e89lw5enf1fudbp3nyiin4xdch5zmnzjq/tinymce/5/tinymce.min.js"
        referrerpolicy="origin"
      />
      {isUserConected ? (
        <>
          <FormArticleCreation
            titleRef={inputArticleTitle}
            ImgURLRef={inputArticleImgURL}
            DescRef={inputArticleDesc}
            OrderRef={inputArticleOrder}
            editorRef={editorRef}
            postInHtml={postInHtml}
          />
          <Menu>
            <Menu.Button>
              <button class="p-4 bg-red-600 text-gray-100">
                {articles.ifaceMesssages.btn.publishAnsw}
              </button>
            </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {() => (
                  <button
                    onClick={() =>
                      createArticle({
                        tittle: inputArticleTitle.current.value,
                        post: editorRef.current.getContent(),
                        img: inputArticleImgURL.current.value,
                        desc: inputArticleDesc.current.value,
                        order: inputArticleOrder.current.value,
                        id: idArticle,
                      })
                    }
                    class="bg-green-400 text-gray-100 rounded-xl p-4"
                  >
                    {articles.ifaceMesssages.btn.publish}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </>
      ) : (
        <div class="bg-red-800 text-gray-100 p-4 rounded-sm">
          {articles.ifaceMesssages.notLoggedIn}
        </div>
      )}
    </>
  );
};

export default Articles;
