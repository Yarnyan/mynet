import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import ReferralModule from '../module/Referral/ReferralModule'
export default function Referral() {
  return (
    <div className='Container'>
    <Header />
    <div className="Content">
        <ReferralModule /> 
    </div>
    <Footer />
  </div>
  )
}
