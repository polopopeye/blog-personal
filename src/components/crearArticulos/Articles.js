import React, { useEffect, useRef, useState } from 'react';

import './components/styleEditor.css';
import isConnected from './components/isConnected';
import { createArticle } from './components/send2DB';
import { Menu } from '@headlessui/react';
import firebase from 'gatsby-plugin-firebase';
import { articles } from './constants';
import FormArticleCreation from './components/FormArticleCreation';

const Articles = () => {
  const editorRef = useRef(),
    inputArticleTitle = useRef(),
    inputArticleImgURL = useRef(),
    inputArticleDesc = useRef(),
    inputArticleOrder = useRef();

  const [idArticle, setIdArticle] = useState(undefined);
  const [isUserConected, setIsUserConected] = useState(false);

  const handleEditArticle = (idArticle) => {
    const db = firebase.firestore();
    db.collection(articles.dbDocName)
      .doc(idArticle)
      .get()
      .then((doc) => {
        const { name, imgPost, desc, order, postinHTML } = doc.data();

        if (doc.exists) {
          inputArticleTitle.current.value = name;
          inputArticleImgURL.current.value = imgPost;
          inputArticleDesc.current.value = desc;
          inputArticleOrder.current.value = order;
          editorRef.current.setContent(postinHTML);
        } else {
          return articles.ifaceMesssages.notFoundArticleID;
        }
      });
  };

  const crearPost = ({ tittle, imgPost, descPost, orderPost, postContent }) => {
    if (
      inputArticleTitle.current.value.length <=
        articles.minCharLength.default &&
      imgPost.length <= articles.minCharLength.default &&
      descPost.length <= articles.minCharLength.default &&
      postContent.length <= articles.minCharLength.post
    ) {
      return articles.ifaceMesssages.ArticleFieildTooShort;
    }

    if (idArticle)
      createArticle(
        tittle,
        postContent,
        imgPost,
        descPost,
        orderPost,
        idArticle
      );
    else createArticle(tittle, postContent, imgPost, descPost, orderPost);

    return true;
  };

  useEffect(() => {
    isConnected(setIsUserConected);
    const urlParams = new URLSearchParams(window?.location?.search);
    if (urlParams.get(articles.propID))
      setIdArticle(urlParams.get(articles.propID));
  }, []);

  useEffect(() => {
    if (idArticle) handleEditArticle(idArticle);
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
                    onClick={crearPost({
                      tittle: inputArticleTitle.current.value,
                      imgPost: inputArticleImgURL.current.value,
                      descPost: inputArticleDesc.current.value,
                      orderPost: inputArticleOrder.current.value,
                      postContent: editorRef.current.getContent(),
                    })}
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
