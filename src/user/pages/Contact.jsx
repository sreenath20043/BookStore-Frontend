import React from 'react'
import { Card, Label, Textarea, TextInput, Button } from 'flowbite-react';
import { HiLocationMarker, HiPhone, HiMail, HiPaperAirplane } from 'react-icons/hi';
import Header from '../components/Header';
import BookStoreFooter from '../../components/BookStoreFooter';

function Contact() {
  return (
    <div>
      <Header/>
      <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Contacts
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Distinctio incentiore placeat nemo voluptatem iure. 
            Iste asperiores quia amet sint, similique corrupti praesentium defectus nesciunt odit laudantium. 
            Beatae repudiandae amet odit! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluta, doloremque 
            ullam itaque atque totam quasi molestias cumque daeimus fuga voluptate suscipit ut distinctio minus obcaecati 
            quidem quae iure? Lacero!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-white!">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <HiLocationMarker className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium">123 Main Street, Apt 4B,</p>
              <p className="text-gray-700 font-medium">Anytown, CA 91234</p>
            </div>
          </Card>

          <Card className="text-center  bg-white!">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <HiPhone className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium">+91 9876543210</p>
            </div>
          </Card>

          <Card className="text-center  bg-white!">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <HiMail className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium">Bookstore@gmail.com</p>
            </div>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className=' bg-gray-100!'>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send me Message
            </h3>
            <form  className="space-y-4">
              <div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  
                  required
                  className="w-full bg-white!"
                />
              </div>
              
              <div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Id"
                  
                  required
                  className="w-full  bg-white!"
                />
              </div>
              
              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                 
                  required
                  rows={6}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                color="dark"
                className="w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  Send
                  <HiPaperAirplane className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </Card>

          {/* Map */}
          <Card className="relative overflow-hidden">
            <div className="h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125495.89364991384!2d76.27230744999999!3d9.931233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-lg">
                <span className="text-sm font-medium text-gray-700">Contact</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
    <BookStoreFooter/>
    </div>
  )
}

export default Contact