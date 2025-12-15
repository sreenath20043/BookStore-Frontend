import React, { useEffect, useRef, useState } from 'react';
import { FileInput, Modal, ModalBody, ModalFooter, ModalHeader, TabItem, Tabs, Textarea } from "flowbite-react";
import {
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';
import { AddJobAdminAPI, DeleteJobsAdminAPI, getAdminAllJobsAPI } from '../../services/allAPIs';
import { HiOutlineLocationMarker, HiOutlineTrash } from "react-icons/hi";



function AdminCareers() {
  const [openModal, setOpenModal] = useState(false);
const [viewJob, setViewJob] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    salary: "",
    qualification: "",
    experience: "",
    description: ""
  })

  const [token, setToken] = useState("");

  const addJob = async () => {
    console.log(jobDetails);
    if (jobDetails.jobTitle == "" ||
      jobDetails.location == "" ||
      jobDetails.jobType == "" ||
      jobDetails.salary == "" ||
      jobDetails.qualification == "" ||
      jobDetails.experience == "" ||
      jobDetails.description == "") {
      alert("Please Fill The Fields");
    }
    else {
      const updatedToken = token?.replace(/"/g, "")

      const reqHeader = {
        Authorization:` Bearer ${updatedToken}`
      }
      try {
        const response = await AddJobAdminAPI(jobDetails, reqHeader)
        console.log(response);

        if (response.status == 200) {
          alert(response.data.messge) //data.messge
        }
        else {
          alert(response.response.data)
        }
      }

      catch (error) {
        console.log(error);
      }
    }

  }

  const getAlljobs = async (token) => {
    const updatedToken = token?.replace(/"/g, "")

    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`
    }
    try {
      const response = await getAdminAllJobsAPI(reqHeader)
      console.log(response);

      if (response.status == 200) {
        // alert(response.data.messge) //data.messge
        setViewJob(response.data)
      }
      else {
        alert(response.response.data)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log(viewJob);


// delete jobs
   const HandleDelete = async(id)=>{
    console.log("deleted"+id);

    try {
      const updatedToken = token?.replace(/"/g, "")

      const reqHeader = {
        Authorization:`Bearer ${updatedToken}`
      }

       const response = await DeleteJobsAdminAPI(id,reqHeader)
        console.log(response);
        if(response.status==200){
        alert(response.data.message)
        getAlljobs()
        }
        

    } catch (error) {
      console.log(error);
      
    }
    
   }


useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    getAlljobs(token)
  }, [token])

  
  return (
 
    <>
      <AdminHeader />

      <div className="flex min-h-screen">

        <div className="w-64 bg-gray-100">
          <AdminSidebar />
        </div>

        <div className="flex-1 p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Careers</h2>
            <Button onClick={() => setOpenModal(true)}>Add +</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              // initialFocus={emailInputRef}
            >
              <ModalHeader />
             <ModalBody>
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Application Form
                        </h3>
                        <div className=" gap-3 items-center justify-between text-center">
                          {/* Full Name Input */}
                          <div>
                            <div className="mb-2 block"></div>
                            <TextInput onChange={e => setJobDetails({ ...jobDetails, jobTitle: e.target.value })} value={jobDetails.jobTitle}
                              id=""
                              type="text"
                              placeholder="Job Title"
                            />
                          </div>

                          {/* Qualification Input */}
                          <div>
                            <div className="mb-2 block"></div>
                            <TextInput
                              onChange={e => setJobDetails({ ...jobDetails, qualification: e.target.value })} value={jobDetails.qualification}
                              id=""
                              type="text"
                              placeholder="Qualification"
                            />
                          </div>
                        </div>

                      </div>
                      <div>
                        {/* Email Input */}
                        <div>
                          <div className="mb-2 block"></div>
                          <TextInput onChange={e => setJobDetails({ ...jobDetails, location: e.target.value })} value={jobDetails.location}
                            id=""
                            type="text"
                            placeholder="Location"
                          />
                        </div>

                        {/* Phone Input */}
                        <div>
                          <div className="mb-2 block"></div>
                          <TextInput onChange={e => setJobDetails({ ...jobDetails, jobType: e.target.value })} value={jobDetails.jobType}
                            id=""
                            type="text"
                            placeholder="Job Type "
                          />
                        </div>

                        <div>
                          <div className="mb-2 block"></div>
                          <TextInput onChange={e => setJobDetails({ ...jobDetails, experience: e.target.value })} value={jobDetails.experience}
                            id=""
                            type="text"
                            placeholder="Experience "
                          />
                        </div>

                        <div>
                          <div className="mb-2 block"></div>
                          <TextInput onChange={e => setJobDetails({ ...jobDetails, salary: e.target.value })} value={jobDetails.salary}
                            id=""
                            type="text"
                            placeholder="Salary"
                          />
                        </div>
                        <div>
                          <div className="mb-2 block"></div>
                          <TextInput onChange={e => setJobDetails({ ...jobDetails, description: e.target.value })} value={jobDetails.description}
                            id=""
                            type="text"
                            placeholder="Description"
                          />
                        </div>

                      </div>

                    </ModalBody>
                    <ModalFooter className='ml-auto'>
                      <Button color="green" onClick={addJob}>Add</Button>
                      <Button color="red" onClick={() => setOpenModal(false)}>
                        Cancel
                      </Button>
                    </ModalFooter>
            </Modal>
          </div>

          <Tabs className='flex justify-center' aria-label="" variant="pills">
            <TabItem title="Job Post">

              <div className="mt-6">
                <form className="max-w-md mx-auto">
                  <div className="relative mb-5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Job Title"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
                  px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              {/* Job Card */}
                {
                  viewJob.length > 0 ?
                    viewJob.map((item) => (
                      
                        <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 mb-6 relative">
                          {/* Delete Button */}
                          <button onClick={()=>HandleDelete(item._id)} className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
                            <HiOutlineTrash className="text-white" /> Delete
                          </button>
  
                          {/* Job Info */}
                          <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.jobTitle}
                          </h2>
                          <p className="flex items-center gap-1 text-blue-600 text-sm mb-2">
                            <HiOutlineLocationMarker /> {item.location}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-semibold">Job Type:</span> {item.jobType}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-semibold">Salary:</span> {item.salary}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-semibold">Qualification:</span> {item.qualification}
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-semibold">Experience:</span> {item.experience}
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed text-justify">
                            Description: {item.description}
                          </p>
                        </div>
                      
                    ))
                    :
                    "No Jobs Found"

                }

             

            </TabItem>

            <TabItem title="View Applicants">
              <div className="overflow-x-auto">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell>SI</TableHeadCell>
                      <TableHeadCell>Job Title</TableHeadCell>
                      <TableHeadCell>Name</TableHeadCell>
                      <TableHeadCell>Qualification</TableHeadCell>
                      <TableHeadCell>Email</TableHeadCell>
                      <TableHeadCell>Phone</TableHeadCell>
                      <TableHeadCell>Cover Letter</TableHeadCell>
                      <TableHeadCell>
                        <span className="sr-only">Edit</span>
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        1
                      </TableCell>
                      <TableCell>Frontend Developer</TableCell>
                      <TableCell>Ken</TableCell>
                      <TableCell>BTech CS</TableCell>
                      <TableCell>hen@gmail.com</TableCell>
                      <TableCell>621991651</TableCell>
                      <TableCell>gwugfvuoubsouyufigf sglbfk ptqfb;skshvyu gfhfpiuhf</TableCell>
                      <TableCell>
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          resume
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      2
                      </TableCell>
                      <TableCell>Store Manager</TableCell>
                      <TableCell>Ken</TableCell>
                      <TableCell>BCA</TableCell>
                      <TableCell>hen@gmail.com</TableCell>
                      <TableCell>79875135</TableCell>
                      <TableCell>i1uryog p  wfpiu     iupgfigggkbvbvipuyg hgipuygoHi  gP;kbgG</TableCell>
                      <TableCell>
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabItem>
          </Tabs>



        </div>
        
      </div>
      <BookStoreFooter/>
    </>
  );
}

export default AdminCareers;