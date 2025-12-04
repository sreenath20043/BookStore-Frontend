import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { TabItem, Tabs } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';
import { Card } from "flowbite-react";
import {  GetBookAdminAPI, GetUserAPI } from '../../services/allAPIs';

function AdminBooks() {

const [adminBook,setAdminBook] = useState([])
 const [getUsers,setGetUsers]= useState([])
 const [token,setToken]=useState('')

 const getAllBookAdmin = async(token)=>{
    const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
           Authorization:` Bearer ${updatedToken}`,
    };
    try {
      const response = await GetBookAdminAPI(reqHeader)
      console.log(response);
        setAdminBook(response.data)
      console.log(setAdminBook);

      
    } catch (error) {
      console.log("error"+error);
      
    }
  }
  const getAllUserAdmin = async (token) => {
      const updatedToken = token.replace(/"/g, "")
  
      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`
      }
      console.log(reqHeader);
  
      try {
        console.log("Inside try");
        
        const response = await GetUserAPI(reqHeader)
        console.log(response);
        setGetUsers(response.data)        
  
      } catch (error) {
        console.log("Error" + error);
  
      }
    }


  useEffect(() => {
     setToken(sessionStorage.getItem('token'))
    if (token){
    getAllBookAdmin(token)
    getAllUserAdmin(token)
    }
  }, [token])

  return (
    <div>
      <AdminHeader />
      <section>
        <div className="flex">
          <div className="w-64 ...">
            <AdminSidebar />
          </div>

          <section className='text-center p-5'>
            <h3 className='text-3xl fond-bold mb-4'>New Arrivals</h3>

            <Tabs className='flex justify-center' aria-label="" variant="pills">
              <TabItem title="Book List" >

                <div className='flex flex-wrap justify-center gap-6 mt-10 px-5'>

                  {
                    adminBook?.length > 0 ?
                      adminBook.map(item => (
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img className="p-8 rounded-t-lg" src={item.imageUrl} alt="product image" />
                          </a>
                          <div className="px-5 pb-5">
                            <a href="#">
                              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </a>
                        
                          </div>
                        </div>
                      ))
                      :
                      <p className="text-black text-center mt-10">No books found</p>

                  }
                </div>



              </TabItem>

              <TabItem title="Users" >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 ml-32">

                {
                  getUsers?.length>0?
                  getUsers.map(item=>(
                      <Card href="#" className="max-w-sm bg-gray-300! mb-3">  {/* w-92 h-32 */}
                    <p className="text-2xl font-bold  text-white">
                     ID: {item._id}
                    </p>
                    <div className='flex justify-between'>
                        <img src={item.profile} alt="" className='rounded-full w-16 h-16' />
                      <h2>{item.role}</h2>
                      <div className='mr-15'>
                        <h4>{item.username}</h4>
                        <p>{item.email}</p>
                      </div>
                    </div>
                  </Card>
                  ))
                  : 
                  <p className="text-black text-center mt-10">No Users found</p>

                }
                    

                </div>
              </TabItem>
            </Tabs>

          </section>
        </div>
      </section>
      <BookStoreFooter />
    </div>
  )
}

export default AdminBooks

