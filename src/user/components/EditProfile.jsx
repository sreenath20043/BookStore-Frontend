import React from 'react'
import { Button, Drawer,  DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

function EditProfile() {

   const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className='float-right -mt-[60px] mr-20'>Edit</Button>
      

      <Drawer open={isOpen} onClose={handleClose}>
       <h3 className='text-3xl text-white mb-4'>Edit your Profile</h3>
        <DrawerItems>
         <form action="#">

          <div className="flex justify-center">
          <img className="rounded-full w-45 h-45" src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="image description" />
        </div>

            <div className="mb-6 mt-6">
              
              <TextInput id="full-name" name="name" placeholder="Full Name" type="text" />
            </div>
            <div className="mb-6">
              
              <TextInput id="password" name="password" placeholder="Enter your password" type='password' />
            </div>
            <div className="mb-6">
              
              <TextInput id="password" name="password" placeholder="Confirm your password" type='password' />
            </div>
            <div className="mb-6">
              
              <Textarea id="message" name="message" placeholder="Book Store user" rows={4} />
            </div>
            <div className="mb-6">
             <div>
                 <div className="flex justify-end-safe">
                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset</button>

                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
               </div>
             </div>
            </div>
           
          </form>
        </DrawerItems>
      </Drawer>

    </div>
  )
}

export default EditProfile