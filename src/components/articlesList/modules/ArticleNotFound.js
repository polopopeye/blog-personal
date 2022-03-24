import React, { useState } from 'react';
import twFormater from '../../utils/twFormater';

const ArticleNotFound = () => {
  const notFoundImgs = [
    'https://media1.giphy.com/media/JEVqknUonZJWU/giphy.gif?cid=790b76113ccb81495cdc4c21852c4201539e15fb5c484b1f&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/H9nnXKNfa5wf6/giphy.gif?cid=790b7611e32e3dbfddfadbecb074632bc260baae650ad628&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/l22ysLe54hZP0wubek/giphy.gif?cid=790b7611ca87307afe53c08fc543a23448e97640634692ea&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/2WxWfiavndgcM/giphy.gif?cid=790b7611c7e378828412a97b5174aeacdcb020fe39eb3af1&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/srVgXpqz5QdTG/giphy.gif?cid=790b76115d680ce8cbadebd789c530665e48fb9c944e2de0&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=790b7611c84e6ebd4f40f06f34e4309fb0f9fc8292497c11&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/xT5P0s6cg7G7ppCQhi/giphy.gif?cid=790b761194d754493171740fd2460ab07e31eb4ce8fd3977&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/26tOZxcbcZzxDlek8/giphy.gif?cid=790b76116c4b606e7133ba29208b2fede44ed478fa44cfd3&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/2LxosfDt7NIbu/giphy.gif?cid=790b7611ad7b2df3801bb15befe8892804cba2a395620724&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/mnYbbNlmsE9CE/giphy.gif?cid=790b761198db8cd14335a1b18454466f01eef25a0e79874a&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/FG6EQNhs3s7ug/giphy.gif?cid=790b76112106cde63665abcfc0b6007b537fb19934a99ec8&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/8084NkUdQeAtW/giphy.gif?cid=790b7611a35f56b37ffddeb68d472f1fbe85d335df56ced4&rid=giphy.gif&ct=g',
  ];

  const randImgNumber = Math.floor(Math.random() * notFoundImgs.length - 1 + 1);

  const [imgIndex, setImgIndex] = useState(randImgNumber);

  setTimeout(() => {
    setImgIndex(randImgNumber);
  }, 5000);

  return (
    <>
      <h1
        id="noresultsIndex"
        class="text-2xl text-center p-2 select-none"
        style={{ display: 'none' }}
      >
        Sry, no hay resultados...
        <center>
          <img
            src={notFoundImgs[imgIndex]}
            class={twFormater({
              base: 'w-full rounded-xl select-none pt-12',
              md: 'w-64',
            })}
          />
        </center>
      </h1>
    </>
  );
};

export default ArticleNotFound;
