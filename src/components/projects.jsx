import React from 'react'

export default function Projects() {

    const featuredProjects= [
        {
            title: "Adventures in Yolrein",
            description: `A semi-open-world, text adventure game I created using vanilla JavaScript. Unlike most text adventure games, Adventures in Yolrein allows you to explore the world and unlock additional content in previously visited areas based on choices you've made since the first time you've visited.`,
            technologies: ["HTML", "CSS", "Flexbox", "JavaScript", "Atom", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Text_Adventure_Game", class: "fab fa-github"},
                {name: "External Link", url: "https://jacksontbailey.github.io/Text_Adventure_Game/", class: unknown}
                ],
            image: [
                {getImageFrom: ""},
            ]
        },
        {
            title: "Weather Wherever",
            description: `Get the weather for any city throughout the world through my weather API website. Don't want to view it in Fahrenheit? No problem! View it in Celcius too!`,
            technologies: ["HTML", "CSS", "Styled Components","JavaScript", "REST API", "OpenWeatherMap API", "Teleport API"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/WeatherApi", class: "fab fa-github"},
                {name: "External Link", url: "still need to publish", class: unknown}
                ],
            image: [
                {getImageFrom: ""},
            ]
        },
        {
            title: "Simon",
            description: `A remake of the classic game of simon. This was one of my first projects using JavaScript that I worked on, and still enjoy it to this day!`,
            technologies: ["HTML", "CSS", "JavaScript", "Atom", "Git", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Simon-Game", class: "fab fa-github"},
                {name: "External Link", url: "https://crabby-curve.surge.sh/", class: unknown}
                ],
            image: [
                {getImageFrom: ""},
            ]
        }
    ]

    return (
        <div>
            <h2>Some of My Creations</h2>
            <div className="featuredProject">
                <div className="project-content">
                    <p>Featured Project</p>
                    <h3 className="project-title">Adventures in Yolrein</h3>
                    <div className="project-description">
                        A semi-open-world, text adventure game I created using vanilla JavaScript. Unlike most text adventure games, Adventures in Yolrein allows 
                        you to explore the world and unlock additional content in previously visited areas based on choices you've made since the first time you've visited.</div>
                    <ul className="project-tech-used">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Flexbox</li>
                        <li>JavaScript</li>
                        <li>Atom</li>
                    </ul>
                    <div className="project-links">
                        <p>GitHub</p>
                        <p>Live Website</p>
                    </div>
                </div>
                <div className="project-image">
                    <p>Insert image here</p>
                </div>
            </div>
        </div>
    )
}
