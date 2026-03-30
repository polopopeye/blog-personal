import { useEffect, useState } from 'react';
import firebase from '../../../../lib/firebase';

interface Comment {
  id: string;
  name: string;
  text: string;
  createdAt: number;
  userId?: string;
}

interface CommentsProps {
  articleId: string;
}

const Comments = ({ articleId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setUser(u);
      if (u?.displayName) setName(u.displayName);
    });
  }, []);

  useEffect(() => {
    if (!articleId) return;

    const unsubscribe = firebase
      .firestore()
      .collection('posts')
      .doc(articleId)
      .collection('comments')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const loaded: Comment[] = [];
        snapshot.forEach((doc) => {
          loaded.push({ id: doc.id, ...doc.data() } as Comment);
        });
        setComments(loaded);
      });

    return () => unsubscribe();
  }, [articleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSending(true);
    try {
      await firebase
        .firestore()
        .collection('posts')
        .doc(articleId)
        .collection('comments')
        .add({
          name: name.trim(),
          text: text.trim(),
          createdAt: Date.now(),
          userId: user?.uid || null,
        });
      setText('');
    } catch (error) {
      console.error('Error al publicar comentario:', error);
    }
    setSending(false);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="mt-8 border-t border-gray-600 pt-6">
      <h2 className="text-lg font-bold mb-4">Comentarios ({comments.length})</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!!user?.displayName}
          className="w-full p-3 rounded border border-gray-500 bg-primary text-quaternary placeholder-gray-400 focus:outline-none focus:border-blue-400"
          required
        />
        <textarea
          placeholder="Escribe tu comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full p-3 rounded border border-gray-500 bg-primary text-quaternary placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-y"
          required
        />
        <button
          type="submit"
          disabled={sending || !name.trim() || !text.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {sending ? 'Enviando...' : 'Comentar'}
        </button>
        {user && (
          <span className="ml-3 text-sm text-gray-400">
            Conectado como {user.displayName}
          </span>
        )}
      </form>

      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-gray-400 text-sm">No hay comentarios aún. ¡Sé el primero!</p>
        )}
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded bg-primary border border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-sm">{comment.name}</span>
              <span className="text-xs text-gray-400">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="text-sm whitespace-pre-wrap">{comment.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
