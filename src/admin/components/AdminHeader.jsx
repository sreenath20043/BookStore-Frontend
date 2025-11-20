import React from 'react'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,

  NavbarToggle,
} from "flowbite-react";

function AdminHeader() {
  return (
    <div>
      <Navbar fluid className='bg-black!' >
              <NavbarBrand href="https://flowbite-react.com">
                <img src="https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-school-materials-clip-art-cartoon-open-book-png-png-image_10147974.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
              </NavbarBrand>
              <div className="flex md:order-2">
                <Button className='p' href='/login' color={"dark"}>Login</Button>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                  }
                >
                  
                  
                  <DropdownDivider />
                  <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
              </div>
             
            </Navbar>
          <div className='bg-blue-50'>  <marquee behavior="" direction="">Welcome, Admin! You're all set to manage and monitor the system . Let's get to work!</marquee></div>
    </div>
  )
}

export default AdminHeader