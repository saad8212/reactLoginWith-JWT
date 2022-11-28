import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './login'
import Header from './header'
function CreateRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path = "/login" element = {<Login/>}></Route>
                <Route path = "/" element = {<Header/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default CreateRoutes