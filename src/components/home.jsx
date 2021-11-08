import React from 'react'
import { Navbar } from './navbar'
import Footer from './footer'
import Projects from './projects';
import Timer from './timer';
import Testimonials from './testimonials';

//influenced by https://brittanychiang.com/ , https://lynnandtonic.com/ , https://denisechandler.com/ , https://www.rickbossenbroek.nl/, https://robbowen.digital/, and https://www.kemiadeleke.com/

export default function Home() {
    const topSkills = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Node.js", "REST"];
    
    return (
        <React.Fragment>
            <Navbar/>
            <header className="home-header">
                <h1>Hi, my name is</h1>
                <h2>Jackson Bailey.</h2>
                <h3>I construct beautiful and unique websites from scratch.</h3>
                <p>I'm a self-taught, frontend web developer who specializes in <span className="top-skills skills-header"><Timer items={topSkills} startingItemIndex={0} timer={2000} changeFunction={prevSkill => prevSkill+1}/></span>.</p>
            </header>
            <Projects/>
            <Testimonials/>
            <Footer/>
        </React.Fragment>
    )
}
