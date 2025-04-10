import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from '../Task/CounterComponent'
import ModernTodoList from '../Task/TodoList'
import ToggleText from '../Task/ToggleShowHide'
import CharCounter from '../Task/CharCounter'
import Livesearch from '../Task/LiveSearch'
import ApiFetch from '../Task/ApiFetch'
import FormValidator from '../Task/FormValidator'
import Accordian from '../Task/Accordian'
import ThemeToggle from '../Task/ThemeToggle'
import Timer from '../Task/Timer'
import Dynamicid from '../Task/Dynamicid'
import Adminpannel from '../Task/Adminpannel'
import Homepage from '../Task/Homepage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<ModernTodoList />} />
        <Route path='/toggle' element={<ToggleText />} />
        <Route path='/char' element={<CharCounter />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/livesearch' element={<Livesearch />} />
        <Route path='/apifetch' element={<ApiFetch />} />
        <Route path='/formvalidator' element={<FormValidator />} />
        <Route path='/Accordian' element={<Accordian />} />
        <Route path='/ThemeToggle' element={<ThemeToggle />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/dynamic/:id' element={<Dynamicid />} />
        <Route path='/adminpannel' element={<Adminpannel />} />
      </Routes>
    </Router>
  )
}

export default App