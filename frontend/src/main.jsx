import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import Course from './pages/Course'
import Allocation from './pages/Allocation'
import Professor from './pages/Professor'
import Department from './pages/Department'
import DepartmentForm from './pages/Department/DepartmentForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Outlet />
          </>
        }>
          <Route path='/allocation' element={ <Allocation />} />
          <Route path='/professor' element={<Professor />} />
          <Route path='/course' element={ <Course />} />
          <Route path='/department' element={ <Outlet />}>
            <Route element={ <Department />} index />
            <Route path=':id' element={ <DepartmentForm />} />
          </Route>
         <Route path="*" element={<div>Page not found...</div>} />
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
