
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'
import { StrictMode } from 'react'

import './styles/index.scss'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Router}
        />
    </StrictMode>
)
