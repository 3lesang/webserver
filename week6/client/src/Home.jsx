import { useEffect } from 'react';
import { usePost } from './Context';
import Card from './Card';

function Home() {
  const { posts } = usePost();
  useEffect(() => {
    document.title = 'Home';
  }, []);
  if (posts.length === 0)
    return (
      <main>
        <p>Trang chưa có bài viết nào, hãy thêm bài đi!</p>
      </main>
    );
  return (
    <main>
      {posts.map((blog) => (
        <Card
          {...blog}
          key={blog.id}
        />
      ))}
    </main>
  );
}

export default Home;
