import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import App from '../App.jsx'
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';

const myRouter = createBrowserRouter([{
    Component: App,
    children: [
        {
            path: "/",
            Component: HomePage,
        },
        {
            path: "/about",
            Component: AboutMe,
        },
        {
            path: "/projects",
            Component: Projects,
        },
    ]
}]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={myRouter} />
    </React.StrictMode>,
)