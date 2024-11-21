import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Project from './pages/Project.jsx';
import Certificate from './pages/Certificate.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [  
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about-me",
          element: <AboutMe />
        },
      
        {
          path: "project",
          element: <Project />
        },
      
        {
          path: "certificate",
          element: <Certificate />
        },
      
        {
          path: "contact",
          element: <Contact />
        }
      ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
