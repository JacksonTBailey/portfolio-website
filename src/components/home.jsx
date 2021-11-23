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
            <main className="fillHeight">
                <div className="home-header styled-hero">
                    <h1 className="hero-h1">Hi there! I'm</h1>
                    <h2 className="hero-h2">Jackson Bailey.</h2>
                    <h3 className="hero-h3">Frontend Web Developer</h3>
                    <p className="hero-p">I'm a self-taught, frontend web developer who specializes in making beautiful and unique websites. Some of the technologies that I enjoy using are <span className="top-skills skills-header"><Timer items={topSkills} startingItemIndex={0} timer={2000} changeFunction={prevSkill => prevSkill+1}/></span>.</p>
                </div>
                <Projects/>
                <Testimonials/>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
