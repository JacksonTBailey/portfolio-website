import React from 'react'

export default function Projects() {

    const featuredProjects= [
        {
            title: "Adventures in Yolrein",
            description: `A semi-open-world, text adventure game I created using vanilla JavaScript. Unlike most text adventure games, Adventures in Yolrein allows you to explore the world and unlock additional content in previously visited areas based on choices you've made since the first time you've visited.`,
            technologies: ["HTML", "CSS", "Flexbox", "JavaScript", "Atom", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Text_Adventure_Game", class: "fab fa-github"},
                {name: "External Link", url: "https://jacksontbailey.github.io/Text_Adventure_Game/", class: "fas fa-external-link-alt"}
                ],
            // image: [
            //     {src: "", alt=""},
            // ]
        },
        {
            title: "Weather Wherever",
            description: `Get the weather for any city throughout the world through my weather API website. Don't want to view it in Fahrenheit? No problem! View it in Celcius too!`,
            technologies: ["HTML", "CSS", "Styled Components","JavaScript", "REST API", "OpenWeatherMap API", "Teleport API"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/WeatherApi", class: "fab fa-github"},
                {name: "External Link", url: "still need to publish", class: "fas fa-external-link-alt"}
                ],
            // image: [
            //     {src: "", alt=""},
            // ]
        },
        {
            title: "Simon",
            description: `A remake of the classic game of simon. This was one of my first projects using JavaScript that I worked on, and still enjoy it to this day!`,
            technologies: ["HTML", "CSS", "JavaScript", "Atom", "Git", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Simon-Game", class: "fab fa-github"},
                {name: "External Link", url: "https://crabby-curve.surge.sh/", class: "fas fa-external-link-alt"}
                ],
            // image: [
            //     {src: "", alt=""},
            // ]
        }
    ]

    const mappedProjects = featuredProjects.map((project)=>{
        return( 
        <div className="featuredProject">
            <div className="project-content">
                <p>Featured Project</p>
                <h3 key={project.title} className="project-title">{project.title}</h3>
                <div className="project-description">{project.description}</div>
                <ul className="project-tech-used">{project.technologies.map(technology => {
                    return(<li key={technology}>{technology}</li>)})}
                </ul>
                <div className="project-links">{project.links.map(link =>{
                    return(<a href={link.url} target="_blank" rel="noreferrer"><i className={link.class} key={link.class}></i></a>)})}
                </div>
                {/* <div className="project-image">
                    <a href={link.url} target="_blank" rel="noreferrer">
                        <img src={project.image[src]} alt={project.image[alt]} />
                    </a>
                </div> */}
            </div>
        </div>)})

    return (
        <div className="project-section">
            <h2> 01. Some of My Creations</h2>
            {mappedProjects}
        </div>
    )
}
