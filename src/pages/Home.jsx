import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import HomeModule from '../module/home/HomeModule'
export default function Home() {
  return (
    <div className='Container'>
        <Header />
        {/* <div className="Content">
            <HomeModule />
        </div> */}
        <Footer />
    </div>
  )
}
