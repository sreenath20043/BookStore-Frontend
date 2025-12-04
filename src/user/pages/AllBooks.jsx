import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Link } from 'react-router-dom'
import { AllBookAPI } from '../../services/allAPIs'
import { Card } from 'flowbite-react'
import  { searchContext } from '../../contextShareAPI/ContextShare'

function AllBooks() {
  //to hold token from the localstorage
  const [token, setToken] = useState('')

  const [allBooks, setAllBooks] = useState([])

  // to hold temporary book details
  const [tempData,setTempData]=useState('')//filter section

  // serach bar
  const {searchKey,setSearchKey}=useContext(searchContext)
  console.log(searchKey);
  

  const getAllBooks = async (searchKey,token) => {
    const updatedToken = token.replace(/"/g, "")

    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`
    }
    console.log(reqHeader);

    try {
      console.log("Inside try");
      
      const response = await AllBookAPI(searchKey,reqHeader)
      console.log(response);
      setAllBooks(response.data)
      setTempData(response.data) // filter section
      

    } catch (error) {
      console.log("Error" + error);

    }
  }
  console.log(allBooks);
  

  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    if (token){
      getAllBooks(searchKey,token)
    }
  }, [searchKey,token])

  // filter books

  const handleFilter=((category)=>{
  console.log(category);
  if(category=='All'){
    setAllBooks(tempData)
  }else{
      setAllBooks( tempData.filter(item=>(item.category).toLowerCase().trim()==category.toLowerCase().trim()))
  }
  })

  //------------
  return (
   <>
      <Header />

     

      <section className="mb-15">

      {
        !token?
         (  
            <div style={{display:'flex', justifyContent:'center'}}>
             <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" width={'200px'} height={'200px'} alt="" />

         <div>
         
         <h3>Please <a
                href="/login"
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Login
              </a></h3>
              <p>To Explore More</p>
         
         </div>
            </div>

            
         )
         :
        <div>
          <div className="text-center mt-10 text-3xl">
            <h1>Collections</h1>
          </div>
          <div className="mt-5">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  value={searchKey}
                  onChange={(e)=>setSearchKey(e.target.value)}
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by Title"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="ml-10 mt-15 text-2xl">
            <h1>Filters</h1>
          </div>
          <div className="flex justify-evenly">
            <ul className="ml-10 mt-2 space-y-2">
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('All'))} type="radio" name="person" id="pari" />
                <label htmlFor="junaid">All</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Literary Fiction'))} type="radio" name="person" id="pari" />
                <label htmlFor="junaid">Literary Fiction</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Philosophy'))} type="radio" name="person" id="razi" />
                <label htmlFor="junaid">Philosophy</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Thriller'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Thriller</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Romance'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Romance</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Horror'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Horror</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Auto/Biography'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Auto/Biography</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Self-Help'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Self-Help</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('Politics'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Politics</label>
              </li>
              <li className="flex items-center gap-3">
                <input onClick={()=>(handleFilter('No-filter'))} type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">No-filter</label>
              </li>
            </ul>

             
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-5">
            {
            allBooks.length>0?
              allBooks.map(item => (
               <Link to={`/viewBook/${item._id}`}>
                  <Card  className="w-64 !bg-gray m-3">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.title}</p>
                   <p className="font-normal text-gray-700 dark:text-gray-400">
                     <span>Price : <strike>{item.price} </strike>, {item.discountPrice} </span>
                   </p>
  
                  </Card>
               </Link>
              ))
             : 
              <p className="text-black text-center mt-10">No books found</p>
            }
          </div>
        

          </div>
          
        </div>
        }
      </section>

     

      <BookStoreFooter />
    </>
  )
}

export default AllBooks