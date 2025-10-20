import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/Root/Root.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import Apps from './Pages/Apps/Apps.jsx';
import Details from './Pages/Details/Details.jsx';
import SaveCardList from './Pages/SaveCardList/SaveCardList.jsx';
import Header from './component/Header/Header.jsx';

// const Home = lazy(() => import('./Pages/Home/Home.jsx'))
// const Apps = lazy(() => import('./Pages/Apps/Apps.jsx'))
// const SaveCardList = lazy(() => import('./Pages/SaveCardList/SaveCardList.jsx'))
// const Details = lazy(()=> import('./Pages/Details/Details.jsx'))



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/home.json'),
        Component: Home
      },
      {
        path: 'apps',
        loader: () => fetch('/apps.json'),
        Component: Apps
      },
      {
        path: 'save',
        loader: () => fetch('/apps.json'),
        Component: SaveCardList
      },
      {
        path: ('details/:id'),
        loader: () => fetch('/apps.json'),
        Component: Details
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>

      
        <RouterProvider  router={router} ></RouterProvider>
        
      
      
  </StrictMode>,
)
