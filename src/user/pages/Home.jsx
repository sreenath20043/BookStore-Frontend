import React, { useContext } from 'react'
import Header from '../components/Header'
import { Card } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import BookStoreFooter from '../../components/BookStoreFooter';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { HomeBookAPI } from '../../services/allAPIs';
import { useEffect } from 'react';
import { useState } from 'react';
import  { searchContext } from '../../contextShareAPI/ContextShare'

function Home() {


    // serach bar
    const {searchKey,setSearchKey}=useContext(searchContext)
    console.log(searchKey);

    const navigate = useNavigate()

     //to hold token from the localstorage
      const [token, setToken] = useState('')

  // 4 book frntil add cheyan

    const [homeBook,setHomeBook]=useState([])

  const getHomeBooks= async()=>{
    try {
      const response = await HomeBookAPI()
      console.log(response);
      setHomeBook(response.data)
      
    } catch (error) {
      console.log("Error"+error);
      
    }
  }
  console.log(homeBook);

  const handleSeacrh=()=>{
    if(searchKey==""){
      alert("Search Book...")
    }
    else if(!token){
      alert("Pleace Login")
      navigate("/login")
    }
    else if(token && searchKey){
      navigate("/allbooks")
    }
    else{
      alert("Invalid")
    }
  }
  
  useEffect(()=>{  // button ilatha caseil call cheyan use cheyum useEffect
   setToken(sessionStorage.getItem('token'))
    getHomeBooks()
  },[])

  return (
    <>
      <Header/>
     <section className="bg-no-repeat bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2019/03/03/18/43/book-4032579_1280.jpg')] py-24 md:py-34">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Wonderful Gifts
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Give your family and friends a book
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchKey}
              onChange={(e)=>setSearchKey(e.target.value)}
              
              placeholder="Search Books"
              className="bg-white w-full px-6 py-4 rounded-l-3xl rounded-r-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSeacrh} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
             <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* new arrival */}

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">NEW ARRIVALS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Explore Our Latest Collection
          </h2>
        </div>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
         {
          homeBook.length>0?
          homeBook.map(item=>(
            <Card
      className="max-w-sm !bg-amber-700">
        <img src={item.imageUrl} alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.title} 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.price}
      </p>
    </Card>
          ))
          :"No books found..."
         }
        </div>

        <div className="text-center">
         <Link to={"/allBooks"}>
            <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors">
              Explore More
            </button>
         </Link>
        </div>
      </div>
    </section>

    {/* featured authers */}
    <section className=''>
        <div className="text-center mb-12">
          <p className=" text-gray-600 mb-2">FEATURED AUTHORS</p>
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-8">
            Captivates with every word
          </h2>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 p-12">
        <div className="">
          <p className="text-gray-700 leading-relaxed mt-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio 
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem 
              nulla iste." Modi, molestias. Ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum 
              possimus accusantium necessitatibus id neque soluta quisquam explicabo laborum." Deserunt 
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio 
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem 
              nulla iste." Modi, molestias. Ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum 
              possimus accusantium necessitatibus id neque soluta quisquam explicabo laborum." Deserunt 
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>
        </div>

        <div className=''>
          <img  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="" />
        </div>
      </div>
    </section>

    {/* testimonial */}
    <section>
      <div className="text-center mb-12">
        <div className="mt-10">
          <p className='text-sm text-gray-600 mb-2'>TESTIMONIALS</p>
          <h2 className='text-3xl text-black font-bold'>See What Others Are Saying</h2>
        </div>

        <div className="flex flex-col items-center text-center mt-8">
          <img className='rounded-full w-40 h-40 mb-6' src="https://ca-times.brightspotcdn.com/dims4/default/d104f58/2147483647/strip/true/crop/4529x3729+0+0/resize/1200x988!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2F40%2F9c27c9564a2babd92b264faedb3f%2Fgarner-author-photo-publicity.jpg" alt="" />
           <h3 className="text-xl font-bold text-gray-900 mb-6">Helen Garner </h3>
           <p className="text-gray-700 leading-relaxed max-w-3xl">HHelen Garner (née Ford,[2] born 7 November 1942) is an Australian novelist, short-story writer, screenwriter and journalist. Garner's first novel, Monkey Grip, published in 1977, immediately established her as an original voice on the Australian literary scene—it is now widely considered a classic.[3] She has a reputation for incorporating and adapting her personal experiences in her fiction, something that has brought her widespread attention, particularly with her novels Monkey Grip and The Spare Room (2008).</p>
        </div>
      </div>
    </section>

   <BookStoreFooter/>
    </>
  )
}

export default Home