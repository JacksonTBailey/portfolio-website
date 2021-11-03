import React from 'react'

export default function Footer() {
    const socialMedia = [
        {name: "linkedin", url: "https://www.linkedin.com/in/jackson95bailey/", class: "fab fa-linkedin"},
        {name: "github", url: "https://github.com/Kazumadesu67", class: "fab fa-github"},
        {name: "email", url: "mailto: bailey95jackson@gmail.com", class: "far fa-envelope"}
    ]
    
    const featuredQuote = [
        {author: "Vincent van Gogh", quote: "Normality is a paved road: It’s comfortable to walk, but no flowers grow on it."},
        {author: "Leonardo da Vinci", quote: "Learning never exhausts the mind."},
        {author: "Katsumoto — The Last Samurai", quote: "The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life."},
        {author: "Obi-Wan Kenobi", quote: "Hello there."}
    ]

    const mappedSocials = socialMedia.map((socialItem)=>{return <div key={socialItem.name} className={`social ${socialItem.name}`}>
            <a href={socialItem.url} target="_blank" rel="noreferrer">
                <i className={`${socialItem.class} footer-social fa-lg`} aria-hidden="true"></i>
            </a>
        </div>})
    
    const randomQuote= Math.floor(Math.random()*featuredQuote.length)


    return (
        <footer className="regular-footer">
            <div className="footer-quote">
                <p className="quote-text">{featuredQuote[randomQuote].quote}</p>
                <p className="quote-author">{featuredQuote[randomQuote].author}</p>
            </div>
            <div className="social-icons">
                {mappedSocials}
            </div>
            <p>Handcrafted by me &#169; 2021</p>
        </footer>
    )
}
