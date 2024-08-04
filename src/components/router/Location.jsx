import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function location() {

  let location = useLocation()
  console.log(location)

  useEffect (() =>
    {
      console.log("current pathname:",location.pathname)
      console.log("current search:",location.search)
      console.log("current hash:",location.hash)

    },[location])



  return (
    <div>
      <h1>current pathname:{location.pathname}</h1>
      <p>current search: {location.search}</p>
      <p>current hash:{location.hash}</p>
    </div>
  )
}

export default Location
