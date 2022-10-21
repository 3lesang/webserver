import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from './Context';
import { API_URL } from './config';
function Post() {
  const { posts } = usePost();
  const params = useParams();
  const form = useRef();
  const post = posts.find((post) => post.slug === params.slug);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      comment: e.target.comment.value,
    };

    const res = await fetch(`${API_URL}/post/${post.id}/comment`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
    const status = await res.json();
    if (status.status == 'ok') {
      alert('Them thanh cong');
    } else {
      alert('Them that bai');
    }
  };
  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <div className="comment">
        <form
          method="post"
          ref={form}
          onSubmit={handleSubmit}
          className="cmt__form"
        >
          <textarea
            id="comment"
            name="comment"
            cols="80"
            rows="5"
            className="cmt__input"
            placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết!"
          ></textarea>
          <button
            type="submit"
            className="button"
          >
            Gửi
          </button>
        </form>
        <ul>
          {post?.comments.map((comment) => (
            <li key={comment.id}>
              <p>
                <strong>{comment.auth}</strong>
                <small>{comment.created_at}</small>
              </p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Post;
