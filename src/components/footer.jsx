import React from 'react'
import {useEffect} from 'react'
import TimerFooter from './timer-footer';


export default function Footer() {
    useEffect(()=>{console.log("Mounted"); return ()=>console.log("Unmounted")})
    const socialMedia = [
        {name: "linkedin", url: "https://www.linkedin.com/in/jackson95bailey/", class: "fab fa-linkedin"},
        {name: "github", url: "https://github.com/JacksonTBailey", class: "fab fa-github"},
        {name: "email", url: "mailto: bailey95jackson@gmail.com", class: "far fa-envelope"}
    ]
        const mappedSocials = socialMedia.map((socialItem)=>{return <div key={socialItem.name} className={`social ${socialItem.name}`}>
        <a href={socialItem.url} target="_blank" rel="noreferrer">
            <i className={`${socialItem.class} footer-social fa-lg`} aria-hidden="true"></i>
        </a>
    </div>})


    return (
        <footer className="regular-footer">
            <div className="footer-quote">
                <p className="quote-text"><TimerFooter part="text"/></p>
                <p className="quote-author"><TimerFooter part="author"/></p>
            </div>
            <div className="social-icons">
                {mappedSocials}
            </div>
            <p>Handcrafted by me &#169; 2021</p>
        </footer>
    )
}
