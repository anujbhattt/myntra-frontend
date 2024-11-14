import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincontent from './routes/Maincontent.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  children: [
    { path: "/", element: <Maincontent></Maincontent> },

    {
      path: "/bag",
      element: <Bag></Bag>
    },
  ]
}]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore} >
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
