import React, { useRef, useState } from 'react';
import { FileInput, Modal, ModalBody, ModalHeader, TabItem, Tabs, Textarea } from "flowbite-react";
import {
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';

function AdminCareers() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

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
              initialFocus={emailInputRef}
            >
              <ModalHeader />
              <ModalBody>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Application form
                  </h3>
                  <hr />

                  <div className="">
                    <TextInput
                      id=""
                      placeholder="Job Title"
                      required
                      className='mb-2'
                    />
                    <TextInput
                      id=""
                      placeholder="Location"
                      required
                      className='mb-2'
                    />
                    <TextInput
                      id=""
                      placeholder="Job Type"
                      required
                      className='mb-2'
                    />

                    <TextInput
                      id=""
                      placeholder="Salary"
                      required
                      className='mb-2'
                    />
                    <TextInput
                      id=""
                      placeholder="Qualification"
                      required
                      className='mb-2'
                    />
                    <TextInput
                      id=""
                      placeholder="Experience"
                      required
                      className='mb-2'
                    />
                  </div>


                  <div className="max-w-md">
                    <Textarea id="" placeholder="Description" required rows={4} />
                  </div>


                  <div className="flex justify-end-safe">
                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset</button>

                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
                  </div>
                </div>
              </ModalBody>
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

              <div className="max-w-5xl mx-auto bg-white border shadow p-6 rounded-lg mb-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">HR Assistant</h3>
                    <hr className="my-2" />
                    <p>Kochi</p>
                    <p>Job Type: Full-time</p>
                    <p>Salary: 20000 - 30000 / month</p>
                    <p>Qualification:</p>
                    <p>Experience: 1-2 yr</p>
                    <p>Description:</p>
                  </div>
                  <Button color="red">Delete</Button>
                </div>
              </div>

              <div className="max-w-5xl mx-auto bg-white border shadow p-6 rounded-lg mb-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">HR Assistant</h3>
                    <hr className="my-2" />
                    <p>Kochi</p>
                    <p>Job Type: Full-time</p>
                    <p>Salary: 20000 - 30000 / month</p>
                    <p>Qualification:</p>
                    <p>Experience: 1-2 yr</p>
                    <p>Description:</p>
                  </div>
                  <Button color="red">Delete</Button>
                </div>
              </div>

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