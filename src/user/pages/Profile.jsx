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
import { useState } from 'react';
import { useEffect } from 'react';
import { AddBookAPI } from '../../services/allAPIs';

function Profile() {

  const [token,setToken]=useState('')


// 1 adding book details apifetching cheyuva
  const [bookDetails ,setBookDetails]=useState({
    title:"",
    author:"",
    noOfPages:"",
    imageUrl:"",
    price:"",
    discountPrice:"",
    abstract:"",
    publisher:"",
    language:"",
    isbn:"",
    category:"",
    uploadImage:[]
  })

 // 2 image add cheyunathu
 // image hold cheyan ola array state
  const[preview,setPreview]=useState('')

// to hold 3 image state
  const[previewList,setPreviewList]=useState([])

 const handleUpload=(e)=>{
  console.log(e.target.files[0]);

  let imgArray = bookDetails.uploadImage
  imgArray.push(e.target.files[0])
  console.log(imgArray);
  setBookDetails({...bookDetails,uploadImage:imgArray})

  //Convert image files to url
  const url = URL.createObjectURL(e.target.files[0])
  console.log(url);
  setPreview(url)

// to hold 3 image details
  let imgList = previewList
  imgList.push(url)
  console.log(imgList);
  setPreviewList(imgList)

 }
// 3
      const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImage:[]} = bookDetails

  const handlAddBook = async()=>{
    console.log(token);
    console.log(bookDetails);
    
    
    // alert("Add book")
    if(title==""||
    author==""||
    noOfPages==""||
    imageUrl==""||
    price==""||
    discountPrice==""||
    abstract==""||
    publisher==""||
    language==""||
    isbn==""||
    category==""){
      alert("Pleace fill the form")
    }else{
      //apicalling
      //define reqheader
      //1to get token-from session storage

        const updatedToken = token.replace(/"/g,"")

      const reqHeader ={
        Authorization : `Bearer ${updatedToken}`
      }
      //define reqbody
      const reqBody = new FormData()
      //
      for(let key in bookDetails){
        if(key!=="uploadedImage"){
          reqBody.append(key,bookDetails[key])
        }
        else{
          bookDetails.uploadImage.forEach(item=>{
            reqBody.append("uploadImage",item)
          })
        }
      }
      const response = await AddBookAPI(reqBody,reqHeader)
        console.log(response);
    }
  }

  // 4 remove book details

  const handleReset = () => {
  setBookDetails({
    title: "",
    author: "",
    noOfPages: "",
    imageUrl: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    languages: "",
    isbn: "",
    category: "",
    uploadImage: []
  });
  setPreview("");
  setPreviewList([]);
  };

  useEffect(()=>setToken(sessionStorage.getItem("token")))
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
                      <TextInput value={bookDetails.title} /* for remove data */ onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} /* for add data */ required color="white" type="text" id="" placeholder="Title" />
                      <TextInput value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} required color="white" type="text" id="" placeholder="Author" />
                      <TextInput value={bookDetails.noOfPages} onChange={e=>setBookDetails({...bookDetails,noOfPages:e.target.value})} required color="white" type="text" id="" placeholder="No of Pages" />
                      <TextInput value={bookDetails.imageUrl} onChange={e=>setBookDetails({...bookDetails,imageUrl:e.target.value})} required color="white" type="text" id="" placeholder="Image url" />
                      <TextInput value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} required color="white" type="text" id="" placeholder="Price" />
                      <TextInput value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} required color="white" type="text" id="" placeholder="Discount Price" />
                      <Textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} color="white" id="comment" placeholder="Abstract" required rows={4} />
                    </div>

                    <div className="flex max-w-md flex-col gap-4 ml-12">
                      <TextInput value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} required color="white" type="text" id="" placeholder="Publisher" />
                      <TextInput value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} required color="white" type="text" id="" placeholder="Language" />
                      <TextInput value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} required color="white" type="text" id="" placeholder="Isbn" />
                      <TextInput value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} required color="white" type="text" id="" placeholder="Category" />

                      <div className="ml-7">
                        <label htmlFor="imgfile">
                          <input id='imgfile' type="file" hidden onChange={(e)=>handleUpload(e)}/>
                          {
                            previewList.length<3? preview && preview? 
                            <div className='flex justify-evenly'>
                              <img src={preview} alt="" width={'100px'} height={'100px'}/>
                            <img src="https://i.pinimg.com/474x/67/95/2b/67952b52665c7166da95c3d5858ab83c.jpg" width={'50px'} height={'20px'}  />
                            </div>
                            :
                            <img src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG.png" width={'100px'} height={'100px'}/>
                            :""
                          }
                          {/* ------------preview list array 3 image add cheythathu------------- */}
                          {
                            preview && <div className='flex justify-evenly flex-wrap'>
                              {
                                previewList?.map(item=>(
                                  <img src={item} alt="" width={'80px'} height={'80px'}/>
                                ))
                              }
                            </div>
                          }
                        </label>
                      </div>


                      <div className="flex justify-end-safe">
                        <button onClick={handleReset} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>

                        <button onClick={handlAddBook} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Book</button>
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