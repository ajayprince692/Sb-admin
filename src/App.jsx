import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import User from './components/user'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='user' element={<User/>}/>
    </Routes>
    </BrowserRouter>

  </div>
}

export default App