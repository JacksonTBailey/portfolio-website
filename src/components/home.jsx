import React, {useState, useEffect} from 'react'
import { Navbar } from './navbar'
import Footer from './footer'
import Projects from './projects';

export default function Home() {
    const topSkills = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Node.js", "REST"];
    let [skill, setSkill] =  useState(0)
    let oneOfMySkills= () => {if(skill<=topSkills.length){
        return topSkills[skill]}
        else{
            return prevSkill=>topSkills[prevSkill-(topSkills.length+1)]}}
        

    useEffect(() => {
        const interval = setInterval(() => {
            setSkill(prevSkill => prevSkill+1)
        }, 50000);
        return () => clearInterval(interval)}, [])



    return (
        <React.Fragment>
            <Navbar/>
                <header className="home-header">
                    <h1>Hi, my name is</h1>
                    <h2>Jackson Bailey.</h2>
                    <h3>I construct beautiful and unique websites from scratch.</h3>
                    <p>I'm a self-taught, frontend web developer who specializes in <span className="top-skills skills-header">{oneOfMySkills}</span>.</p>
                </header>
                <Projects/>
            <Footer/>
        </React.Fragment>
    )
}
