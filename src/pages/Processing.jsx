import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import ProcessingPolicy from '../module/ProcessingPolicy/ProcessingPolicy'
export default function Licence() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <ProcessingPolicy />
            </div>
            <Footer />
        </div>
    )
}
