import React from 'react'
import ReactDOM  from 'react-dom/client'
import {App}  from './Components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Actors, Movies, MoviesInformation, Profile, Navbar } from './Components/helper.js';

const router=createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:'/movie/:id',
            element:<MoviesInformation/>
        },
        {
            path:'/actors/:id',
            element:<Actors/>
        },
        {
            path:'/',
            element:<Movies/>
        },
        {
            path:'/profile/:id',
            element:<Profile/>
        }
    ]
        
    
}])

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}>
   <App/>
   </RouterProvider>
)
