import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffie from './Components/AddCoffie.jsx'
import CoffeeShop from './Components/CoffeeShop.jsx'
import CoffeeUpdate from './Components/CoffeeUpdate.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
  },
  {
    path:'/addcoffee',
    element:<AddCoffie></AddCoffie>
  }
  ,
  {
    path:'/coffee-shop',
    element:<CoffeeShop></CoffeeShop>,
    loader:()=> fetch('http://localhost:5000/coffee')
   
  },
  {
    path:'/coffee-update/:id',
    element:<CoffeeUpdate></CoffeeUpdate>,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
