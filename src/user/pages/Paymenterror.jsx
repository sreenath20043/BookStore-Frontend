import React from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Paymenterror() {
  return (
    <div>
      <Header/>
      <div>
        <div className='ml-20 flex justify-center text-center grid grid-cols-2'>
          <div className="mt-40">
            <h1 className='text-3xl text-red-600'>Oh No!</h1>
            <h2 className='text-3xl text-red-600'>your payment was faild</h2>
            <p className='text-2xl'>We apologize for the inconvience caused and appreciate you visit to our website</p>
<Link to={"/allBooks"}>
               <div className="flex justify-center mt-5">
  <Button className="bg-amber-950!">Explore More</Button>
</div>

  
</Link>          </div>
          <div className=""><img src="https://img.freepik.com/premium-vector/welldesigned-glyph-icon-depicting-payment-error_67813-12718.jpg" alt="" /></div>
        </div>
      </div>
      <BookStoreFooter/>
    </div>
  )
}

export default Paymenterror