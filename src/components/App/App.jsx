import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Homepage from '../Homepage/Homepage'
import Sidebar from '../Sidebar/Sidebar'
import Test from '../Test/Test'
import Study from '../Study/Study'
import { Routes, Route } from 'react-router-dom'
import StackView from '../StackView/StackView'
import { stackList } from '../../utils/stackList'

function App() {

  return (
    <div className='page'>
     <div className="page__content">
      <Header />
      <div className="page__content-sidebar">
        <Sidebar />
        <div className="page__content-main">
        <Routes>
          <Route path='/study' element={<Study />}></Route>
          <Route path='/' element={<Homepage stackChoice={stackList} />}></Route>
          <Route path='/:stackId' element={<StackView stackChoice={stackList}/>}></Route>
          <Route path='/test' element={<Test />} />
        </Routes>
        </div>
      </div>
     </div>
    </div >
  )
}

export default App
