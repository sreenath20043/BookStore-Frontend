import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { HiPencil } from "react-icons/hi";

function AdminSettings() {

  const handleUpdate = async () => {
    console.log(adminDetails);}


    const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profile: ""
  });

  const [preview, setPreview] = useState('')
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    console.log(file); // actual file object
    console.log(url);  // preview URL

    setPreview(url);
    setAdminDetails(prev => ({ ...prev, profile: url }));
  }

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
              <div className="relative w-28 h-28 mb-6">
                <label htmlFor="imgfile" className="cursor-pointer">
                  <input
                    onChange={uploadFile}
                    id="imgfile"
                    type="file"
                    hidden
                  />
                  <img
                    src={preview || adminDetails.profile}
                    width="100px"
                    height="100px"
                    alt="Profile Preview"
                    className="rounded-full object-cover"
                  />
                </label>
                <label htmlFor="imgfile">
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition"
                  >
                    📷
                  </button>
                </label>
              </div>

              {/* Form Fields */}
              <form className="w-full space-y-4">
                <input value={adminDetails.username}
                  onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })}
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input value={adminDetails.password}
                  onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })}
                  type="password"
                  placeholder="Current Password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input value={adminDetails.cpassword}
                  onChange={(e) => setAdminDetails({ ...adminDetails, cpassword: e.target.value })}
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
                  <button onClick={handleUpdate}
                    type="button"
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