 import React from "react";
import Header from "../components/Header";
import { FaEye } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import {  Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import BookStoreFooter from "../../components/BookStoreFooter";


const BookDetails = () => {

    const [openModal, setOpenModal] = useState(false);
  return (
  
    <section>
      <Header/>
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 md:flex gap-6">
          
          <div className="flex justify-center md:w-1/3">
            <img
              src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/37the-goldfinch.jpg"
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
              Becoming
            </h2>
            <p className="text-blue-600 text-center md:text-left mb-4">
              - Donna Louise Tartt
            </p>
  
            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-medium">Publisher :</span> Crown (North
                America), Viking Press (Commonwealth)
              </p>
              <p>
                <span className="font-medium">Language :</span> English
              </p>
              <p>
                <span className="font-medium">No. of pages :</span> 448
              </p>
              <p>
                <span className="font-medium">Seller Mail :</span> neel@gmail.com
              </p>
              <p>
                <span className="font-medium">Real Price :</span> $25
              </p>
              <p>
                <span className="font-medium">ISBN :</span> 978-1-5247-6313-8 (Hardcover)
              </p>
            </div>
  
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
             Tartt grew up in the small town of Grenada, Mississippi. She was a bookish child. When
she was only 5 years old, she wrote her first poem, and at 13 years of age, she had
a sonnet published. From 1981 to 1982 Tartt attended the University of Mississippi.
Her writing quickly impressed Mississippi writer Willie Morris, who recommended her
work to Barry Hannah, then writer in residence at the university. Both men encouraged
her to gain wider experience, and in 1982 she transferred to Bennington (Vermont)
College (B.A., 1986), where she befriended other budding writers, including Bret Easton
Ellis, Jonathan Lethem, and Jill Eisenstadt. It was there that Tartt began work on her first
novel, The Secret History.

            </p>
  
            <div className="mt-6 flex justify-center md:justify-start gap-3">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Back
              </button>
              <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                Buy $23
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