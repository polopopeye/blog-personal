import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const FormArticleCreation = ({
  titleRef,
  ImgURLRef,
  DescRef,
  editorRef,
  postInHtml,
  slugRef,
  timeStampRef,
  langRef,
}) => {
  return (
    <>
      <input
        placeholder="titulo"
        ref={titleRef}
        type="text"
        className="p-4 text-xl w-full text-black"
      ></input>
      <input
        placeholder="imagen URL"
        ref={ImgURLRef}
        id="imgPost"
        type="text"
        className="p-4 text-xl w-full text-black"
      ></input>
      <input
        placeholder="Descripción del post"
        ref={DescRef}
        type="text"
        className="p-4 text-xl w-full text-black"
      ></input>

      <input
        placeholder="SLUG / URL"
        ref={slugRef}
        type="string"
        className="p-4 text-xl w-full text-black"
      ></input>
      <input
        placeholder="TIMESTAMP"
        defaultValue={new Date().getTime().toString().substring(0, 10)}
        ref={timeStampRef}
        type="number"
        className="p-4 text-xl w-full text-black"
      ></input>

      <select ref={langRef} className="text-black w-full">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="jp">Japones</option>
      </select>

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={postInHtml}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            ' imagetools advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'a11ychecker   casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
          ],

          toolbar_mode: 'floating',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Kenneth Suarez',

          toolbar:
            ' paste preview | undo redo | media image imagetools | checklist code | formatpainter pageembed table | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat ',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
};

export default FormArticleCreation;
