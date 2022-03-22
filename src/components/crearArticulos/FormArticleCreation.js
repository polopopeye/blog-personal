import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const FormArticleCreation = ({
  titleRef,
  ImgURLRef,
  DescRef,
  OrderRef,
  editorRef,
  postInHtml,
}) => {
  return (
    <>
      <input
        placeholder="titulo"
        ref={titleRef}
        type="text"
        class="p-4 text-xl w-full"
      ></input>
      <input
        placeholder="imagen URL"
        ref={ImgURLRef}
        id="imgPost"
        type="text"
        class="p-4 text-xl w-full"
      ></input>
      <input
        placeholder="Descripción del post"
        ref={DescRef}
        type="text"
        class="p-4 text-xl w-full"
      ></input>
      <input
        placeholder="Orden"
        ref={OrderRef}
        type="number"
        class="p-4 text-xl w-full"
      ></input>
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
