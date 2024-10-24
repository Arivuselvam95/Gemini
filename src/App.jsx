import React from 'react'
import Sidebar from './Components/SideBar/Sidebar.jsx'
import Main from './Components/Main/Main.jsx'
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
