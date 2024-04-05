import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import Rules from '../module/rules/Rules'
export default function RulesList() {
  return (
    <div className='Container'>
      <Header />
      <div className="Content">
        <Rules />
      </div>
      <Footer />
    </div>
  )
}
