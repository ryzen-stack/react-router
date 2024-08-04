import React from 'react'
import Nav from './Nav'
import { Outlet, useLocation } from 'react-router-dom'
import "../CSS/style.css"

function Products() {
   
  return (
    <div className='add-item' >
      <Nav links={["mobile","camera","pendrive"]} myclass="product" />
      <Outlet/>
    </div>
  )
}

export default Products
