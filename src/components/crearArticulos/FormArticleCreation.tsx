import { RefObject } from 'react';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('./modules/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-md bg-white p-4 min-h-[400px] text-gray-400">Cargando editor...</div>,
});

interface FormArticleCreationProps {
  titleRef: RefObject<HTMLInputElement>;
  ImgURLRef: RefObject<HTMLInputElement>;
  DescRef: RefObject<HTMLInputElement>;
  postInHtml?: string;
  slugRef: RefObject<HTMLInputElement>;
  timeStampRef: RefObject<HTMLInputElement>;
  langRef: RefObject<HTMLSelectElement>;
  onEditorReady: (getContent: () => string) => void;
}

const FormArticleCreation = ({
  titleRef,
  ImgURLRef,
  DescRef,
  postInHtml,
  slugRef,
  timeStampRef,
  langRef,
  onEditorReady,
}: FormArticleCreationProps) => {
  return (
    <div className="w-full space-y-2">
      <input
        placeholder="Título"
        ref={titleRef}
        type="text"
        className="p-4 text-xl w-full text-black border rounded"
      />
      <input
        placeholder="Imagen URL"
        ref={ImgURLRef}
        id="imgPost"
        type="text"
        className="p-4 text-xl w-full text-black border rounded"
      />
      <input
        placeholder="Descripción del post"
        ref={DescRef}
        type="text"
        className="p-4 text-xl w-full text-black border rounded"
      />
      <input
        placeholder="SLUG / URL"
        ref={slugRef}
        type="text"
        className="p-4 text-xl w-full text-black border rounded"
      />
      <input
        placeholder="TIMESTAMP"
        defaultValue={new Date().getTime().toString().substring(0, 10)}
        ref={timeStampRef}
        type="number"
        className="p-4 text-xl w-full text-black border rounded"
      />

      <select ref={langRef} className="text-black w-full p-4 border rounded">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="jp">Japones</option>
      </select>

      <RichTextEditor initialContent={postInHtml} onReady={onEditorReady} />
    </div>
  );
};

export default FormArticleCreation;
