import React, { useEffect, useState } from 'react'

import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from 'react-router-dom';

function Header() {
  //to hold user details 
  const [userData,setUserData]=useState({})
  // get user details
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  console.log(userDetails);

  useEffect(()=>{
    setUserData(userDetails)
  },[])
  
  return (
    <div>
      <Navbar fluid className='bg-black!' >
        <NavbarBrand href="https://flowbite-react.com">
          <img src="https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-school-materials-clip-art-cartoon-open-book-png-png-image_10147974.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {
            userData?
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={userData.profile} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{userData.username}</span>
              <span className="block truncate text-sm font-medium">{userData.email}</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <Link to={'/profile'}><DropdownItem>Profile</DropdownItem></Link>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown> :   
          <Link to={'/login'}> 
          <Button className='p' color={"dark"}>Login</Button>
          </Link>
          }
          
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" >
            Home
          </NavbarLink>
          <NavbarLink href="/allBooks">Book</NavbarLink>
          <NavbarLink href="/careers">Careers</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>

    </div>
  )
}

export default Header