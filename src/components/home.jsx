import React from 'react'
import { Navbar } from './navbar'
import Footer from './footer'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar/>
                <header>
                    <p>Hi, I'm Jackson! I'm a</p>
                    <h1>Front-end Web Developer</h1>
                </header>
            <Footer/>
        </React.Fragment>
    )
}
