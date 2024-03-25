import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import NewsFull from '../module/NewsFlash/NewsFull'
export default function NewsFlashPage() {
  return (
    <div className='Container'>
      <Header />
      <div className="Content">
        <NewsFull />
      </div>
      <Footer />
    </div>
  )
}
