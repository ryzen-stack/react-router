import React from 'react'
import { Data } from '../Data'
import { NavLink, useLocation } from 'react-router-dom'
import "../../CSS/product1.css"

function Mobiles() {

  return (
    <section className='product1'>
      {Data.map(({name,id,img,price})=>{
        return <NavLink key={id} className="mobiles" to={`/products/mobile/${id}`}>
          <img src={img} alt="" />
          <h6>{name} <br /> Price: {price}</h6>
        </NavLink>
      })}
      
    </section>
  )
}

export default Mobiles
