import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Home from './components/Home'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <RouterProvider router={appRouter}/>
      
    </>
  )
}

export default App
