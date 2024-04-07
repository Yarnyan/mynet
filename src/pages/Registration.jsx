import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import RegistrationModule from '../module/registration/RegistrationModule'
export default function Registration() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <RegistrationModule />
            </div>
            <Footer />
        </div>
    )
}
