import React from 'react'
import MainLayout from './layouts/MainLayout'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Dashboard from './components/Dashboard'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App