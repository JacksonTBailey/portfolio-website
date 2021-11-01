import React from 'react'

export default function Footer() {
    const socialMedia = [
        {name: "linkedin", url: "https://www.linkedin.com/in/jackson95bailey/", class: "fab fa-linkedin"},
        {name: "github", url: "https://github.com/Kazumadesu67", class: "fab fa-github"},
        {name: "email", url: "mailto: bailey95jackson@gmail.com", class: "far fa-envelope"}
    ]

    const mappedSocials = socialMedia.map((socialItem)=>{return <div key={socialItem.name} className={`social ${socialItem.name}`}>
            <a href={socialItem.url} target="_blank" rel="noreferrer">
                <i className={`${socialItem.class} fa-lg`} aria-hidden="true"></i>
            </a>
        </div>})
    return (
        <footer>
            <div className="footer-quote">
                <p className="quote-text">Normality is a paved road: It’s comfortable to walk, but no flowers grow on it.</p>
                <p className="quote-author">Vincent van Gogh</p>
            </div>
            {mappedSocials}
        </footer>
    )
}
