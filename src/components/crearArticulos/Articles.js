import React, { useEffect, useRef, useState } from 'react';

import './modules/styleEditor.css';

import { createArticle } from './modules/createArticle';
import { Menu } from '@headlessui/react';
import { articles } from './constants';
import FormArticleCreation from './FormArticleCreation';
import handleEditArticle from './modules/handleEditArticle';
import isConnected from '../utils/isConnected';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-xl p-2">{t('createNewArticle')}</h1>
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
              <button className="p-4 bg-red-600 text-gray-100">
                {t('publishAnsw')}
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
                    className="bg-green-400 text-gray-100 rounded-xl p-4"
                  >
                    {t('publish')}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </>
      ) : (
        <div className="bg-red-800 text-gray-100 p-4 rounded-sm">
          {t('notLoggedIn')}
        </div>
      )}
    </>
  );
};

export default Articles;
