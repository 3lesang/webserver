import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from './config';

function Card(props) {
  const more = useRef();
  const menu = useRef();
  const modal = useRef();
  const post = useRef();
  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    const res = await fetch(`${API_URL}/post/${props.id}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
    const status = await res.json();
    if (status.status == 'ok') {
      alert('Update thanh cong!');
      modal.current.classList.remove('show');
    } else {
      alert('Update that bai');
    }
  };
  const handleDelete = async () => {
    if (confirm('Ban co muon xoa khong?')) {
      const res = await fetch(`${API_URL}/post/${props.id}`, {
        method: 'delete',
      });
      const status = await res.json();
      if (status.status == 'ok') {
        alert('Xoa thanh cong!');
      } else {
        alert('Xoa that bai');
      }
      post.current.remove();
    }
  };
  useEffect(() => {
    function showMenu() {
      menu.current.classList.add('show');
    }
    function closeMenu(e) {
      if (e.target !== menu.current && e.target != more.current) {
        menu.current.classList.remove('show');
      }
    }
    function closeModal(e) {
      if (e.target === modal.current) {
        modal.current.classList.remove('show');
      }
    }
    window.addEventListener('click', closeMenu);
    more.current.addEventListener('click', showMenu);
    modal.current.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);
  return (
    <div
      className="post"
      ref={post}
    >
      <div
        className="cicle"
        ref={more}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <ul
        className="menu"
        ref={menu}
      >
        <li
          className="edit menu__item"
          data-id={props.id}
          onClick={() => {
            modal.current.classList.add('show');
          }}
        >
          Chỉnh sửa
        </li>
        <li
          className="delete menu__item"
          data-id={props.id}
          onClick={handleDelete}
        >
          Xóa
        </li>
      </ul>
      <div>
        <Link to={`/post/${props.slug}`}>
          <img
            src={props.thumb}
            className="thumb"
          />
          <h3 className="title">{props.title}</h3>
          <p className="content">{props.content}</p>
        </Link>
        <p>
          <strong>{props.auth}</strong>
          <small>{props.created_at}</small>
        </p>
      </div>
      <div
        id={`modal__${props.id}`}
        className="modal"
        ref={modal}
      >
        <form
          method="post"
          className="formAdd"
          onSubmit={handleEdit}
        >
          <div className="container">
            <input
              type="text"
              name="title"
              className="input title__place"
              placeholder="Tiêu đề bài viết...."
              defaultValue={props.title}
              spellCheck="false"
            />
          </div>
          <div className="container">
            <input
              type="file"
              name="thumb"
            />
          </div>
          <div className="container">
            <textarea
              id=""
              name="content"
              cols="30"
              rows="10"
              className="input"
              spellCheck="false"
              placeholder="Nội dung bài viết"
              defaultValue={props.content}
            ></textarea>
          </div>
          <button
            type="submit"
            className="button"
          >
            Lưu
          </button>
        </form>
      </div>
    </div>
  );
}
export default Card;
