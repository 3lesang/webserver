import { useRef, useEffect } from 'react';
import { API_URL } from './config';
function Head() {
  const addButton = useRef();
  const addModal = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    const res = await fetch(`${API_URL}/post`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
    const status = await res.json();
    if (status.status == 'ok') {
      alert('Them thanh cong');
      addModal.current.classList.remove('show');
    } else {
      alert('Them that bai');
    }
  };
  useEffect(() => {
    const handleClick = () => {
      addModal.current.classList.add('show');
    };
    const closeModal = (e) => {
      if (e.target === addModal.current) {
        addModal.current.classList.remove('show');
      }
    };
    addButton.current.addEventListener('click', handleClick);
    addModal.current.addEventListener('click', closeModal);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('click', closeModal);
    };
  }, []);
  return (
    <header>
      <div className="logo">
        <a href="/">Trang chủ</a>
      </div>
      <div
        className="new"
        id="add"
        ref={addButton}
      >
        <i className="fa-duotone fa-plus"></i>
      </div>
      <div
        className="modal"
        id="addModal"
        ref={addModal}
      >
        <form
          encType="multipart/form-data"
          method="post"
          className="formAdd"
          onSubmit={handleSubmit}
          id="formAdd"
        >
          <div className="container">
            <input
              type="text"
              name="title"
              className="input title__place"
              placeholder="Tiêu đề bài viết...."
              spellCheck="false"
              required
            />
          </div>
          <div className="container">
            <input
              type="file"
              name="thumb"
              className="file"
            />
          </div>

          <div className="container">
            <textarea
              id=""
              name="content"
              cols="30"
              rows="10"
              className="input"
              placeholder="Nội dung bài viết"
              spellCheck="false"
            ></textarea>
          </div>
          <button
            type="submit"
            className="button"
          >
            Đăng
          </button>
        </form>
      </div>
    </header>
  );
}
export default Head;
