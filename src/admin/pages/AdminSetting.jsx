import React from 'react'
import AdminSideBar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { HiPencil } from "react-icons/hi";

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <section className='flex'>
        <div className="w-64">
          <AdminSideBar />
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto py-10">
      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Settings
      </h1>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: Info Section */}
        <div className="text-justify text-gray-700 leading-relaxed">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia
            asperiores in cupiditate voluptatem quisquam nemo vitae odio, facilis aperiam. Ipsum
            incidunt labore asperiores! Blanditiis soluta fuga aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis,
            consequuntur quos eveniet inventore ipsum beatae iure fugiat eligendi quae laborum
            incidunt eum quis, est blanditiis exercitationem velit excepturi?
          </p>
        </div>

        {/* RIGHT: Profile Card */}
        <div className="bg-blue-100 p-8 rounded-xl shadow-md relative flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full shadow-md">
              <HiPencil size={18} />
            </button>
          </div>

          {/* Form Fields */}
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="reset"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default AdminSettings