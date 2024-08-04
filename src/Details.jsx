import React, { useRef, useState } from 'react'
import { Data } from './components/Data'
import { Outlet, useParams, useLocation } from 'react-router'
import "./CSS/Details.css"
import { NavLink } from 'react-router-dom'

function Details() {

  let { pid } = useParams()
  

  let { mid } = useParams()
 
 

  let { name, ram, storage, color, price, Description, images } = Data.find(({ id }) => {
    return id === parseInt(pid)
  })

  return (
    <div className='details-container'>
      <div className='details-header'>
        <h2>{name} {color}, {storage}, {ram} </h2>
      </div>
      <div className='details-image'>
        <div className='productimg'>
          {images.map((img, id) => {
            return <NavLink key={id} to={`/products/mobile/${pid}/${id}`}>
              <img src={img} alt="" className='productimg' />
            </NavLink>
          })}
        </div>
        {images.map((img, i) => {
          return parseInt(mid) === i && <img key={i} src={img} alt="" />
        })}
        {images.map((img, i) => {
          return (parseInt(pid) === i && mid === undefined) && <img key={i} src={img} alt="" />
        })}
      </div>

      <div className='details-price'>
        <h2>Price: {price}</h2>
      </div>
      <div className='details-description'>
        <small><span>Description:</span>{Description}</small>
      </div>

    </div>
  )
}

export default Details

