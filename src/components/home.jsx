import React from 'react'
import { Navbar } from './navbar'
import Footer from './footer'
import Projects from './projects';
import Timer from './timer';
import Technologies from './technologies';
import Contact from './contact';


//influenced by https://brittanychiang.com/ , https://www.seanhalpin.design/wip/, https://coryhughart.com/,  https://lynnandtonic.com/ , https://denisechandler.com/ , https://www.rickbossenbroek.nl/, https://robbowen.digital/, and https://www.kemiadeleke.com/

export default function Home() {
    const topSkills = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Node.js", "REST"];
    
    return (
        <React.Fragment>
            <Navbar/>
            <main className="fillHeight">
                <section className="home-header">
                    <h1 className="hero-h1">Hi there! I'm</h1>
                    <h2 className="hero-h2">Jackson Bailey.</h2>
                    <h3 className="hero-h3">Frontend Web Developer</h3>
                    <p className="hero-p">I'm a Frontend Web Devleoper who enjoys crafting exquisite and minimalist web applications with intuitive user interfaces. 
                        Some of the technologies that I enjoy using are <span className="top-skills skills-header">
                            <Timer items={topSkills} startingItemIndex={0} timer={2000} changeFunction={prevSkill => prevSkill+1}/>
                        </span>.
                    </p>
                </section>
                <Projects/>
                <Technologies/>
                <Contact/>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
