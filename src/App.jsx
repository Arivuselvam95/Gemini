import React from 'react'
import Sidebar from './Components/SideBar/Sidebar'
import Main from './Components/Main/Main'
import "./index.css"

const App = () => {
  return (
    <div className='main-interface'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
