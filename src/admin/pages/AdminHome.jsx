import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Card } from 'flowbite-react'
import BookStoreFooter from '../../components/BookStoreFooter'

function AdminHome() {
  return (
    <div>
      <AdminHeader/>
        <section>
          <div className="flex ...">
            <div className="w-64 ...">
              <AdminSidebar/>
            </div>
            <div className="w-2/3 ...">
            <div>
              <div className="flex flex-row justify-evenly p-10 ">
                <div className="basics-2xs">
                  <Card className='w-60 h-30 m-10 bg-amber-900!'>
                    <h5 className='text-2xl font-bold tracking-tight text-black dark:text-white'>
                      Noteworthy 2021
                    </h5>
                  </Card>
                </div>
                 <div className="basics-2xs">
                  <Card className='w-60 h-30 m-10 bg-amber-900!'>
                    <h5 className='text-2xl font-bold tracking-tight text-black dark:text-white'>
                      Noteworthy 2021
                    </h5>
                  </Card>
                </div>
                 <div className="basics-2xs">
                  <Card className='w-60 h-30 m-10 bg-amber-900!'>
                    <h5 className='text-2xl font-bold tracking-tight text-black dark:text-white'>
                      Noteworthy 2021
                    </h5>
                  </Card>
                </div>
                 {/* <div className="basics-2xs">
                  <Card className='w-60 h-30 m-10 bg-amber-900!'>
                    <h5 className='text-2xl font-bold tracking-tight text-black dark:text-white'>
                      Noteworthy 2021
                    </h5>
                  </Card>
                </div> */}
              </div>
            </div>
            </div>
          </div>
        </section>
        <BookStoreFooter/>
    </div>
  )
}

export default AdminHome