import React from 'react'
import Header from '../module/header/Header'
import Footer from '../module/footer/Footer'
import StartPlaying from '../module/startPlaying/StartPlaying'
export default function Start() {
    return (
        <div className='Container'>
            <Header />
            <div className="Content">
                <StartPlaying />
            </div>
            <Footer />
        </div>
    )
}
