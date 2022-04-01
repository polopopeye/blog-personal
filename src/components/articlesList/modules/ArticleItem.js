import { Link } from 'gatsby';
import React from 'react';
import twFormater from '../../utils/twFormater';

const ArticleItem = ({ dataPost }) => {
  const { desc, imgPost, coverImg, name, title, slug, order } = dataPost;

  return (
    <>
      <div
        id={name}
        className="filteredSearch w-full rounded-md p-8  shadow-lg overflow-hidden  bg-cover bg-center mb-2"
        style={
          imgPost
            ? {
                backgroundImage: 'url(' + imgPost + ')',

                order: order,
              }
            : {
                backgroundImage: 'url(' + coverImg + ')',
              }
        }
      >
        <div className="p-4">
          <h3
            className={twFormater({
              base:
                'font-mono text-4xl font-bold rounded-md p-2 w-auto bg-primary opacity-80 mx-auto',
            })}
          >
            {name || title}
          </h3>

          <div className="rounded-md opacity-80 bg-primary  p-2 mt-28 font-sans text-center text-quaternary mx-16">
            {desc}
          </div>
        </div>
        <Link
          href={'/' + slug}
          className={twFormater({
            base:
              'rounded-md bg-secondary opacity-80 w-full flex justify-center p-2 text-quaternary font-semibold  transition-all duration-500',
            hover: 'bg-tertiary  opacity-100',
          })}
        >
          Mas info
        </Link>
      </div>
    </>
  );
};

export default ArticleItem;
