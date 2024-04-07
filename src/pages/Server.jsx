import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import ServerModule from '../module/server/ServerModule'
export default function Server() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <ServerModule />
            </div>
            <Footer />
        </div>
    )
}
