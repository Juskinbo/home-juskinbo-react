import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Friends from '../pages/Friends'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'friends',
        element: <Friends />,
      },
    ],
  },
])
