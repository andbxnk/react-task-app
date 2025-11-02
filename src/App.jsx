import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import ShowAllTask from './screens/ShowAllTask'
import AddTask from './screens/AddTask'
import UpdateTask from './screens/UpdateTask'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/showalltask" element={<ShowAllTask/>} />
        <Route path="/addtask" element={<AddTask/>} />
        <Route path="/updatetask" element={<UpdateTask/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
