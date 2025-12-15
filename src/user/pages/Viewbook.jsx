 import React from "react";
import Header from "../components/Header";
import { FaEye } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import {  Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import BookStoreFooter from "../../components/BookStoreFooter";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getABookAPI, makePaymentAPI } from "../../services/allAPIs";
import {loadStripe} from '@stripe/stripe-js';


const BookDetails = () => {

  const [token,setToken]=useState("")

  const [bookdata,setBookData]=useState("")

  // const params = useParams() useParams vachu anu oro particalar book inde details edukune
  // console.log(params);

  const {id} =useParams()
  console.log(id);
  

  // to hold token from the local storage
  const getABook = async(id)=>{
    const updatedToken = token.replace(/"/g,"")
     const reqHeader = {
      Authorization : `Bearer ${updatedToken}`
     }
     console.log(reqHeader);
     
     try {
      const response = await getABookAPI(id,reqHeader)
      console.log(response);
     setBookData(response.data)
     
     } catch (error) {
      console.log("Error"+error);
      
     }
  }
  
  //function for make payment
  const makepayment = async()=>{
    console.log(bookdata);
    const stripe = await loadStripe('pk_test_51Scf5CRVmW3XWyUZbHdGQDUFysWplBrCm85iXDEqInjIxltGbUeAVay2YCzLnX4Vkki7QIrpCCTFRzhhyanMvb9b00aLLJnv4Y');
    console.log(stripe);
    
    const updatedToken = token.replace(/"/g,"")

    const reqHeader ={
      Authorization :`Bearer ${updatedToken}`
    }
    const reqBody={
      BookDetails:bookdata
    }

    const response = await makePaymentAPI(reqBody,reqHeader)
    console.log(response); 

      const checkoutUrl = response.data.url
      window.location.href=checkoutUrl
      const sessionId =response.data.sessionID
      stripe.initCheckout({sessionId:sessionId})
    // const sessionID = response.data.sessionID
    //  const res = stripe.redireactToCheckout({
    //   sessionID
    //  })
    //  console.log(res);
     
    //   if (res.error) {
    //   console.log("Error in payment");     
    //  }  
  }


  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    if(token){
      getABook(id)
    }
  },[token])

    const [openModal, setOpenModal] = useState(false);
  return (
  
    <section>
      <Header/>
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 md:flex gap-6">
          
          <div className="flex justify-center md:w-1/3">
            <img
              src={bookdata.imageUrl}
              alt="Becoming Book"
              className="rounded-lg shadow-md w-80 h-auto object-cover"
            />
          </div>
  
          <div className="md:w-2/3 mt-6 md:mt-0">

      <FaEye onClick={() => setOpenModal(true)} className="float-right" />
     <div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader className="bg-amber-50 "><h3 className="text-black!">Book Photo</h3></ModalHeader>
          <ModalBody className="bg-amber-50">
           
  
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 items-center">
             <img  src="https://m.media-amazon.com/images/I/81Cxt9hvSaL._UF1000,1000_QL80_.jpg" alt="" />
             <img className="h-99" src="https://cdn2.shopify.com/s/files/1/2992/0456/files/gf-dt.jpg?v=1563355678" alt="" />
          </div>
          </ModalBody>
          <ModalFooter  className="bg-amber-50">
            <a href="" className="text-black text-1xl ml-26 flex items-center gap-2" ><BsCamera /> 
            Camera click of the book in the hand of seller </a>
          </ModalFooter>
        </Modal>
     </div>

          
            <h2 className="text-3xl font-semibold text-center md:text-left mb-1">
              {/* {bookdata.} */}
            </h2>
            <p className="text-blue-600 text-center md:text-left mb-4">
              - {bookdata.author}
            </p>
  
            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-medium">Publisher :</span>{bookdata.publisher}
              </p>
              <p>
                <span className="font-medium">Language :</span> {bookdata.language}
              </p>
              <p>
                <span className="font-medium">No. of pages :</span>{bookdata.noOfPages}
              </p>
              <p>
                <span className="font-medium">Seller Mail :</span> {bookdata.userMail}
              </p>
              <p>
                <span className="font-medium">Real Price :</span> {bookdata.price}
              </p>
              <p>
                <span className="font-medium">ISBN :</span> {bookdata.isbn}
              </p>
            </div>
  
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            {bookdata.abstract}

            </p>
  
            <div className="mt-6 flex justify-center md:justify-start gap-3">
             <Link to={'/allBooks'}>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  Back
                </button>
             </Link>
              <button onClick={makepayment} className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                Buy ${bookdata.discountPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookStoreFooter/>
    </section>
  );
};

export default BookDetails; 