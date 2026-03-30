import { useEffect, useRef, useState, useCallback } from 'react';

import { createArticle } from './modules/createArticle';
import { Menu } from '@headlessui/react';
import { articles } from './constants';
import FormArticleCreation from './FormArticleCreation';
import handleEditArticle from './modules/handleEditArticle';
import isConnected from '../utils/isConnected';
import { useTranslation } from 'next-i18next';

const Articles = () => {
  const inputArticleTitle = useRef<HTMLInputElement>(null),
    inputArticleImgURL = useRef<HTMLInputElement>(null),
    inputArticleDesc = useRef<HTMLInputElement>(null),
    inputArticleSlug = useRef<HTMLInputElement>(null),
    inputArticleTimeStamp = useRef<HTMLInputElement>(null),
    inputArticleLang = useRef<HTMLSelectElement>(null);

  const getContentRef = useRef<(() => string) | null>(null);

  const [idArticle, setIdArticle] = useState<string | undefined>(undefined),
    [isUserConected, setIsUserConected] = useState(false);

  const [postInHtml, setPostInHtml] = useState<string | undefined>(undefined);

  useEffect(() => {
    isConnected(setIsUserConected);
    const urlParams = new URLSearchParams(window?.location?.search);
    if (urlParams.get(articles.propID))
      setIdArticle(urlParams.get(articles.propID)!);
  }, []);

  useEffect(() => {
    handleEditArticle(idArticle, {
      inputArticleTitle,
      inputArticleImgURL,
      inputArticleDesc,
      inputArticleSlug,
      inputArticleTimeStamp,
      inputArticleLang,
      setPostInHtml,
    });
  }, [idArticle]);

  const handleEditorReady = useCallback((getContent: () => string) => {
    getContentRef.current = getContent;
  }, []);

  const [validationError, setValidationError] = useState<string | null>(null);

  const FORBIDDEN_TAGS = ['html', 'head', 'body', 'doctype'];

  const validateHtml = (html: string): string | null => {
    const lower = html.toLowerCase();
    const found: string[] = [];
    for (const tag of FORBIDDEN_TAGS) {
      const pattern = tag === 'doctype' ? '<!doctype' : `<${tag}[\\s>]`;
      if (new RegExp(pattern, 'i').test(lower)) {
        found.push(`<${tag}>`);
      }
    }
    if (found.length > 0) {
      return `Etiquetas erróneas encontradas: ${found.join(', ')}. Elimínalas antes de publicar.`;
    }
    return null;
  };

  const handlePublish = () => {
    const postContent = getContentRef.current?.() || '';
    const error = validateHtml(postContent);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError(null);
    createArticle({
      tittle: inputArticleTitle.current?.value || '',
      post: postContent,
      img: inputArticleImgURL.current?.value || '',
      desc: inputArticleDesc.current?.value || '',
      slug: inputArticleSlug.current?.value || '',
      timeStamp: inputArticleTimeStamp.current?.value || '',
      lang: inputArticleLang.current?.value || '',
      id: idArticle,
    });
  };

  const { t } = useTranslation('common');

  return (
    <>
      <h1 className="text-xl p-2">{t('createNewArticle')}</h1>
      {isUserConected ? (
        <>
          <FormArticleCreation
            titleRef={inputArticleTitle}
            ImgURLRef={inputArticleImgURL}
            DescRef={inputArticleDesc}
            postInHtml={postInHtml}
            slugRef={inputArticleSlug}
            timeStampRef={inputArticleTimeStamp}
            langRef={inputArticleLang}
            onEditorReady={handleEditorReady}
          />

          {validationError && (
            <div className="bg-red-900 border border-red-500 text-red-100 p-3 rounded mt-2 text-sm">
              {validationError}
            </div>
          )}

          <Menu>
            <Menu.Button>
              <button className="p-4 bg-red-600 text-gray-100 mt-2">
                {t('publishAnsw')}
              </button>
            </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {() => (
                  <button
                    onClick={handlePublish}
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
