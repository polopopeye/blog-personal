import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEffect, useState } from 'react';

interface RichTextEditorProps {
  initialContent?: string;
  onReady?: (getContent: () => string) => void;
}

const MenuBar = ({ editor, onToggleHtml }: { editor: any; onToggleHtml: () => void; isHtmlMode: boolean }) => {
  if (!editor) return null;

  const btnClass = (active: boolean) =>
    `px-2 py-1 text-sm border rounded ${active ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`;

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive('bold'))}>
        <b>B</b>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive('italic'))}>
        <i>I</i>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={btnClass(editor.isActive('underline'))}>
        <u>U</u>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={btnClass(editor.isActive('strike'))}>
        <s>S</s>
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={btnClass(editor.isActive('heading', { level: 1 }))}>
        H1
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btnClass(editor.isActive('heading', { level: 2 }))}>
        H2
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btnClass(editor.isActive('heading', { level: 3 }))}>
        H3
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={btnClass(editor.isActive({ textAlign: 'left' }))}>
        Left
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={btnClass(editor.isActive({ textAlign: 'center' }))}>
        Center
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={btnClass(editor.isActive({ textAlign: 'right' }))}>
        Right
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive('bulletList'))}>
        List
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btnClass(editor.isActive('orderedList'))}>
        1. List
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btnClass(editor.isActive('blockquote'))}>
        Quote
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={btnClass(editor.isActive('codeBlock'))}>
        Code
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button
        type="button"
        onClick={() => {
          const url = prompt('URL de la imagen:');
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
        className={btnClass(false)}
      >
        Img
      </button>
      <button
        type="button"
        onClick={() => {
          const url = prompt('URL del enlace:');
          if (url) editor.chain().focus().setLink({ href: url }).run();
          else editor.chain().focus().unsetLink().run();
        }}
        className={btnClass(editor.isActive('link'))}
      >
        Link
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button type="button" onClick={() => editor.chain().focus().undo().run()} className={btnClass(false)}>
        Undo
      </button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()} className={btnClass(false)}>
        Redo
      </button>

      <span className="w-px bg-gray-300 mx-1" />

      <button type="button" onClick={onToggleHtml} className={btnClass(false) + ' font-mono'}>
        &lt;/&gt; HTML
      </button>
    </div>
  );
};

const FORBIDDEN_TAGS = ['html', 'head', 'body', 'doctype'];

function stripForbiddenTags(html: string): string {
  let cleaned = html;
  for (const tag of FORBIDDEN_TAGS) {
    if (tag === 'doctype') {
      cleaned = cleaned.replace(/<!doctype[^>]*>/gi, '');
    } else {
      cleaned = cleaned.replace(new RegExp(`</?${tag}[^>]*>`, 'gi'), '');
    }
  }
  return cleaned.trim();
}

const RichTextEditor = ({ initialContent, onReady }: RichTextEditorProps) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlSource, setHtmlSource] = useState('');
  const [htmlWarning, setHtmlWarning] = useState<string | null>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: initialContent || '<p>Escribe tu artículo aquí...</p>',
    editorProps: {
      attributes: {
        class: 'prose max-w-none min-h-[400px] p-4 focus:outline-none text-black',
      },
    },
  });

  useEffect(() => {
    if (editor && onReady) {
      onReady(() => {
        if (isHtmlMode) return htmlSource;
        return editor.getHTML();
      });
    }
  }, [editor, onReady, isHtmlMode, htmlSource]);

  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  const checkForbiddenTags = (html: string): string[] => {
    const found: string[] = [];
    const lower = html.toLowerCase();
    for (const tag of FORBIDDEN_TAGS) {
      const pattern = tag === 'doctype' ? '<!doctype' : `<${tag}[\\s>]`;
      if (new RegExp(pattern, 'i').test(lower)) found.push(`<${tag}>`);
    }
    return found;
  };

  const handleHtmlChange = (value: string) => {
    setHtmlSource(value);
    const bad = checkForbiddenTags(value);
    setHtmlWarning(bad.length > 0 ? `Etiquetas no permitidas: ${bad.join(', ')}` : null);
  };

  const toggleHtmlMode = () => {
    if (!editor) return;

    if (isHtmlMode) {
      const cleaned = stripForbiddenTags(htmlSource);
      editor.commands.setContent(cleaned);
      setHtmlWarning(null);
      setIsHtmlMode(false);
    } else {
      setHtmlSource(editor.getHTML());
      setHtmlWarning(null);
      setIsHtmlMode(true);
    }
  };

  return (
    <div className="border rounded-md bg-white overflow-hidden">
      <MenuBar editor={editor} onToggleHtml={toggleHtmlMode} isHtmlMode={isHtmlMode} />
      {htmlWarning && (
        <div className="bg-yellow-100 border-b border-yellow-400 text-yellow-800 px-3 py-2 text-sm">
          ⚠ {htmlWarning} — se eliminarán automáticamente al volver a la vista visual.
        </div>
      )}
      {isHtmlMode ? (
        <textarea
          value={htmlSource}
          onChange={(e) => handleHtmlChange(e.target.value)}
          className="w-full min-h-[400px] p-4 font-mono text-sm text-black bg-gray-900 text-green-400 focus:outline-none"
          spellCheck={false}
        />
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
};

export default RichTextEditor;
