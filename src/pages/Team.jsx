import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import OurTeam from '../module/OurTeam/OurTeam'
export default function Start() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <OurTeam />
            </div>
            <Footer />
        </div>
    )
}