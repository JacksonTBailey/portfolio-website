import React from 'react'
import { Navbar } from './navbar'
import Footer from './footer'

export default function Home() {
    const topSkills = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Node.js", "REST"];
    const oneOfMySkills= Math.floor(Math.random()*topSkills.length)


    return (
        <React.Fragment>
            <Navbar/>
                <header className="home-header">
                    <h1>Hi, my name is</h1>
                    <h2>Jackson Bailey.</h2>
                    <h3>I construct beautiful and unique websites from scratch.</h3>
                    <p>I'm a self-taught, frontend web developer who specializes in <span className="top-skills skills-header">{topSkills[oneOfMySkills]}</span>.</p>
                </header>
            <Footer/>
        </React.Fragment>
    )
}
