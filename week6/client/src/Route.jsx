import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Post from './Post';
import { PostProvider } from './Context';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PostProvider>
        <App />
      </PostProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'post/:slug',
        element: <Post />,
      },
    ],
  },
]);

export { router };
