import { Link } from 'gatsby';
import React from 'react';

const ArticleItem = ({ dataPost }) => {
  const { desc, imgPost, name, slug } = dataPost;

  return (
    <div
      key={slug}
      id={name}
      className="filteredSearch w-full rounded-md p-8  shadow-lg overflow-hidden  bg-cover bg-center mb-2"
      style={{
        backgroundImage: 'url(' + imgPost + ')',
      }}
    >
      <div className="p-4">
        <h3 className="font-mono text-4xl font-bold rounded-md p-2 w-auto bg-primary opacity-80 mx-auto">
          {name}
        </h3>

        <div className="rounded-md opacity-80 bg-primary  p-2 mt-28 font-sans text-center text-quaternary mx-16">
          {desc}
        </div>
      </div>
      <Link
        href={'/' + slug}
        className="rounded-md bg-secondary opacity-80 w-full flex justify-center p-2 text-quaternary font-semibold  transition-all duration-500 hover:bg-tertiary  hover:opacity-100"
      >
        Mas info
      </Link>
    </div>
  );
};

export default ArticleItem;
