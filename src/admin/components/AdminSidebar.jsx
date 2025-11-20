import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
 <div>
      <div className='h-screen bg-blue-50'>
        <img src="public/book2.png" alt="" />
        <h1 className='text-center text-2xl'>Admin</h1>
        <div className="text-center text-justify ms-10 font-bold">
          <div className="my-3">
            <Link to={'/AdminHome'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Home</label>
            </Link>
          </div>
          <div className="my-3">
            <Link to={'/adminbook'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">All Books</label>
            </Link>
          </div>
          <div className="my-3">
           <Link to={'/admincareers'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Careers</label>
           </Link>
          </div>
          <div className="my-3">
           <Link to={'/adminsetting'}>
              <input type="radio" name='admin' id='' />
              <label htmlFor="">Settings</label>
           </Link>
          </div>

        </div>
      </div>
 </div>
  )
}

export default AdminSidebar