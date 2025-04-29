import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumeEditor from './components/ResumeEditor'
import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen">
     <Navbar />
     <div className="flex flex-1">
        <Sidebar />
        <ResumeEditor />
      </div>
    </div>
  )
}

export default App
