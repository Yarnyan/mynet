import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import PersonalCabinet from '../module/PersonalCabinet/PersonalCabinet'
export default function PersonalCabinetPage() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <PersonalCabinet />
            </div>
            <Footer />
        </div>
    )
}
