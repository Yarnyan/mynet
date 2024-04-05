import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import Donate from '../module/donate/Donate'
export default function DonateList() {
  return (
    <div className='Container'>
      <Header />
      <div className="Content">
        <Donate />
      </div>
      <Footer />
    </div>
  )
}
