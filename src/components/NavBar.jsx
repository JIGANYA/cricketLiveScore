import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function NavBar() {
  
  return (
    <>
    
    <div className='NavBar'>
      <Link id='link' to='/live'> MatchList</Link>
     
      <Link id='link' to='/country'>CountryList</Link>
      <Link id='link' to='point'>PointList</Link>
    </div>
    <Outlet/>
    

    </>
  )
}
