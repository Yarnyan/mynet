import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import Servers from '../module/servers/Servers'
export default function ServerList() {
  return (
    <div className='Container'>
      <Header />
      <div className="Content">
        <Servers />
      </div>
      <Footer />
    </div>
  )
}
