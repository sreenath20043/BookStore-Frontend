import React from 'react'
import Header from '../components/Header'
import { Button } from "flowbite-react";
import { TextInput, Textarea } from "flowbite-react";
import { MdVerified } from "react-icons/md";
import EditProfile from '../components/EditProfile';
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import BookStoreFooter from '../../components/BookStoreFooter';

function Profile() {
  return (
    <div>
      <Header />

      <section>
        <div className="w-full h-45 bg-black"> </div>
          <div className="-mt-[95px] ml-10">
          <img className="rounded-full w-50 h-50" src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="image description" />
        </div>

        <div className="mt-10 ml-18 pr-8 ">
          <span className='flex items-center gap-3'>
            <h2 className='text-3xl mb-6 '>User Name</h2><MdVerified color='blue' className='size-6 -mt-[13px]' />
          </span>
          <EditProfile />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit doloribus eligendi sequi, rerum quis! Cum minima sunt nihil, quo nostrum omnis sequi porro voluptate pariatur a doloremque iste deleniti veritatis eveniet delectus odio laborum atque dolores. Nobis, molestias id!</p>
        </div>

      </section>

      <section>
        <div className=' flex justify-center mt-18 p-5 px-30'>
          <Tabs aria-label="Full width tabs" variant="fullWidth">
            <TabItem title="Sell Book" >
              <section >

                <form className='bg-gray-100 mt-12 m-32 p-5 rounded-3xl' action="">
                  <h2 className='text-2xl text-center'>Book Details</h2>
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex max-w-md flex-col gap-4 ml-16">
                      <TextInput required color="white" type="text" id="" placeholder="Title" />
                      <TextInput required color="white" type="text" id="" placeholder="Author" />
                      <TextInput required color="white" type="text" id="" placeholder="No of Pages" />
                      <TextInput required color="white" type="text" id="" placeholder="Image url" />
                      <TextInput required color="white" type="text" id="" placeholder="Price" />
                      <TextInput required color="white" type="text" id="" placeholder="Discount Price" />
                      <Textarea color="white" id="comment" placeholder="Abstract" required rows={4} />
                    </div>

                    <div className="flex max-w-md flex-col gap-4 ml-12">
                      <TextInput required color="white" type="text" id="" placeholder="Title" />
                      <TextInput required color="white" type="text" id="" placeholder="Author" />
                      <TextInput required color="white" type="text" id="" placeholder="No of Pages" />
                      <TextInput required color="white" type="text" id="" placeholder="Image url" />

                      <div className="ml-7">
                        <label htmlFor="imgfile">
                          <input id='imgfile' type="file" hidden />
                          <img src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG.png" width={'150px'} />
                        </label>
                      </div>


                      <div className="flex justify-end-safe">
                        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset</button>

                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </TabItem>
            <TabItem title="Book Status" >
             <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex-1 md:mr-6">
        <h3 className="text-xl font-semibold">The Da Vinci Code</h3>
        <p className="text-sm text-gray-600">Dan Brown</p>
        <p className="text-blue-600 font-medium mt-1">$20</p>
        <p className="text-gray-700 mt-3 text-justify">
          In The Da Vinci Code, Harvard symbologist Robert Langdon is summoned to
          the Louvre Museum in Paris, where the curator has been found murdered.
          The crime scene is marked with cryptic symbols, leading Langdon and
          cryptologist Sophie Neveu on a trail of secrets hidden in famous
          artworks...
        </p>
        <div className="mt-4">
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            SOLD
          </span>
        </div>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"
        alt="The Da Vinci Code"
        className="w-40 h-56 object-cover rounded mt-4 md:mt-0"
      />
    </div>
            </TabItem>
            <TabItem title="Purchase History" >
              <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex-1 md:mr-6">
        <h3 className="text-xl font-semibold">The Da Vinci Code</h3>
        <p className="text-sm text-gray-600">Dan Brown</p>
        <p className="text-blue-600 font-medium mt-1">$20</p>
        <p className="text-gray-700 mt-3 text-justify">
          In The Da Vinci Code, Harvard symbologist Robert Langdon is summoned to
          the Louvre Museum in Paris, where the curator has been found murdered.
          The crime scene is marked with cryptic symbols, leading Langdon and
          cryptologist Sophie Neveu on a trail of secrets hidden in famous
          artworks...
        </p>
        <div className="mt-4">
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            SOLD
          </span>
        </div>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"
        alt="The Da Vinci Code"
        className="w-40 h-56 object-cover rounded mt-4 md:mt-0"
      />
    </div>
            </TabItem>
          </Tabs>
        </div>

      </section>


      <BookStoreFooter/>
    </div>
  )
}

export default Profile