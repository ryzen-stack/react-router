import React from 'react'
import { BrowserRouter,Routes, Route,  } from 'react-router-dom'
import Home from './components/Home'
import Log from './components/Log'
import Details from './Details'
import Nav from './components/Nav'
import Products from './components/Products'
import Mobiles from "./components/router/Mobiles"
import Pendrives from "./components/router/Pendrives"
import Camera from "./components/router/Camera"
import Pnf from "./components/Pnf"


function App() {

  return (
    <BrowserRouter>

    <Nav links = {["Home","login","products"]} myclass= "home"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}>
       <Route index element={<Mobiles/>}/>
       <Route path='/products/mobile' element={<Mobiles/>}/>
        <Route path='/products/pendrive' element={<Pendrives/>}/>
        <Route path='/products/camera' element={<Camera/>}/>
       </Route>
       <Route path='/products/mobile/:pid' element={<Details/>}/>
       <Route path='/products/mobile/:pid/:mid' element={<Details/>}/>
      <Route path='/login' element={<Log/>}/>
      <Route path='*' element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
