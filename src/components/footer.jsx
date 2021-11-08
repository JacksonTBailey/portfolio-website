import React from 'react'
import {useEffect} from 'react'
import Timer from './timer';


export default function Footer() {
    useEffect(()=>{console.log("Mounted"); return ()=>console.log("Unmounted")})

    const featuredQuote = [
        {author: "Vincent van Gogh", text: "Normality is a paved road: It’s comfortable to walk, but no flowers grow on it."},
        {author: "Leonardo da Vinci", text: "Learning never exhausts the mind."},
        {author: "Katsumoto — The Last Samurai", text: "The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life."},
        {author: "Obi-Wan Kenobi", text: "Hello there."},
        {author: "Bruce Lee", text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."}
    ]
    
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
                <p className="quote-text"><Timer items={featuredQuote} startingItemIndex={0} timer={1000} changeFunction={()=>Math.floor(Math.random()*featuredQuote.length)} part="text"/></p>
                <p className="quote-author"><Timer items={featuredQuote} startingItemIndex={0} timer={1000} changeFunction={()=>Math.floor(Math.random()*featuredQuote.length)} part="author"/></p>
            </div>
            <div className="social-icons">
                {mappedSocials}
            </div>
            <p>Handcrafted by me &#169; 2021</p>
        </footer>
    )
}
