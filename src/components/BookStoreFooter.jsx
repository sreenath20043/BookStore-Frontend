import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function BookStoreFooter() {
  return (
    <div>
     {/* footer */}
          <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* About Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate 
                  dolorem veniam deserunt quisquam eius ad hac maxime dicta ipsum nemo 
                  itaque necessitatibus quas nobis, illum voluptate, pariatur recusandae alias 
                  harum!
                </p>
              </div>
    
              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
                <p className="text-gray-400 mb-4">Stay updated with our latest trends</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500 rounded-l"
                  />
                  <button className="bg-yellow-500 text-gray-900 px-6 py-2 hover:bg-yellow-400 transition-colors rounded-r font-semibold">
                    ➔
                  </button>
                </div>
              </div>
    
              {/* Follow Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
                <p className="text-gray-400 mb-4">Let us be social</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                   <FaTwitter />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                   <FaFacebook />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
    
            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              <p>Copyright © 2025 All rights reserved | This website is made with ❤️ by BookStore</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default BookStoreFooter