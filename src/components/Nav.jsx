import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({links,myclass}) {
  return (
    <>
      <nav className={myclass}>
        {links.map ((link,id) =>
          {
            return <NavLink key={id}  to={`${link.toLowerCase() === "home" ? "/" : link.toLowerCase()}`}>{link}</NavLink>

          }) }
      </nav>
    </>
  )
}

export default Nav
