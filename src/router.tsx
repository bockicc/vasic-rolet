import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/routes/__root'
import HomePage from '@/routes/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
