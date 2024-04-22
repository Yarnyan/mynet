import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import LicenceAgreement from '../module/LicenceAgreement/LicenceAgreement'
export default function Licence() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <LicenceAgreement />
            </div>
            <Footer />
        </div>
    )
}
