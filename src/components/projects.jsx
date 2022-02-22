import React, {useState, useEffect} from 'react';


export default function Projects() {
    
    //Check screen size
    const [screenSize, getDimension] = useState({dynamicWidth:window.innerWidth, dynamicHeight: window.innerHeight});
    
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return (() => {
            window.removeEventListener('resize', setDimension)
        })
    }, [screenSize])



    //Array of my projects
    const featuredProjects= [
        {
            title: "Adventures in Yolrein",
            number:1,
            description: `A semi-open-world, text adventure game I created using vanilla JavaScript. Unlike most text adventure games, Adventures in Yolrein allows you to explore the world and unlock additional content in previously visited areas based on choices you've made since the first time you've visited.`,
            technologies: ["HTML", "CSS", "Flexbox", "JavaScript", "Atom", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Text_Adventure_Game", class: "fab fa-github"},
                {name: "External Link", url: "https://jacksontbailey.github.io/Text_Adventure_Game/", class: "fas fa-external-link-alt"}
                ],
            image: [
                {src: "images/text_adventure_game.png", alt: "Adventures in Yolrein"},
            ]
        },
        {
            title: "Recipes R' Us",
            number:2,
            description: `A cooking recipe website that runs off of an API created by Crescendo Collective. Besides this portfolio website, this was the second project I ever created using React.`,
            technologies: ["HTML", "CSS", "SCSS", "Styled Components", "JavaScript", "React", "React Router", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/recipes-r-us", class: "fab fa-github"},
                {name: "External Link", url: "https://recipes-r-us.netlify.app/recipes", class: "fas fa-external-link-alt"}
                ],
            image: [
                {src: "images/recipes_r_us.png", alt: "Recipes R' Us"},
            ]
        },
        {
            title: "Weather Wherever",
            number:3,
            description: `Get the weather for any city throughout the world through my weather API website. Don't want to view it in Fahrenheit? No problem! View it in Celcius too!`,
            technologies: ["HTML", "CSS", "Styled Components","JavaScript", "REST API","OpenWeatherMap API"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/WeatherApi", class: "fab fa-github"},
                {name: "External Link", url: "https://weather-wherever.netlify.app/", class: "fas fa-external-link-alt"}
                ],
            image: [
                {src: "images/weather_api.png", alt: "Weather Wherever"},
            ]
        },
        {
            title: "Simon",
            number:4,
            description: `A remake of the classic game of simon. This was one of my first projects using JavaScript that I worked on, and still enjoy it to this day!`,
            technologies: ["HTML", "CSS", "JavaScript", "Atom", "Git", "GitHub"],
            links: [
                {name: "GitHub", url: "https://github.com/JacksonTBailey/Simon-Game", class: "fab fa-github"},
                {name: "External Link", url: "https://crabby-curve.surge.sh/", class: "fas fa-external-link-alt"}
                ],
            image: [
                {src: "images/simon_game.png", alt: "Simon Game"},
            ]
        }
    ]


    // //adds active state to cards so they flip
    // const [activeClassStatus, setActiveClassStatus] = useState(featuredProjects);

    // const handleClick = (projectID) => {
    //     setActiveClassStatus(
    //         activeClassStatus.map((classStatus) =>{
    //             if (classStatus.number === projectID){
    //                 let toggleActiveClass = document.querySelector(`.project-${projectID}`);
    //                 toggleActiveClass.classList.toggle('active')
    //                 }
    //             }
    //         )
    //     )
    // }
    let handleClick = () =>{
        let promoClass = document.querySelector(`.flip-box`);
        promoClass.classList.toggle('is-flipped')
    }

    //Mapped project section variation for laptop/desktop
    const mappedProjects = featuredProjects.map((project)=>{
        return( 
        <div className={`project-${project.number}`} key={project.title}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech-used">{project.technologies.map(technology => {
                return(<li key={technology}>{technology}</li>)})}
            </ul>
            <div className="project-links">{project.links.map(link =>{
                return(<a href={link.url} target="_blank" rel="noreferrer" key={link.class}><i className={link.class}></i></a>)})}
            </div>
            <div className='flip-box'>
                <a className="project-image-url" href={project.links[1].url} target="_blank" rel="noreferrer">
                    <figure className="project-image" title={project.image.alt}></figure>
                    <figure className="project-image-back" title={project.image.alt}></figure>
                </a>
            </div>
        </div>)})


    //Mapped project section variation for mobile/tablet
    const mappedProjectsSmall = featuredProjects.map((project)=>{


        return( 
        <div className={`project-${project.number}`} key={project.title}>                    
            <section className='flip-box'>
                
                <section className='project-content project-front'>
                    <figure className="project-image" title={project.image.alt}>
                        <img src={project.image.src} alt={project.image.alt} />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <button className='card-flip-button' onClick={handleClick}>More Info</button>                
                    <div className="project-links">{project.links.map(link =>{
                        return(<a href={link.url} target="_blank" rel="noreferrer" key={link.class}><i className={link.class}></i></a>)})}
                    </div>
                </section>

                    
                <section className='project-content project-back'>
                    <h3 className="project-title-flip">{project.title}</h3>                
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tech-used">{project.technologies.map(technology => {
                        return(<li key={technology}>{technology}</li>)})}
                    </ul>
                    <button className='card-flip-button-back' onClick={() => handleClick(project.number)}>Less Info</button>                
                    <div className="project-links-flip">{project.links.map(link =>{
                        return(<a href={link.url} target="_blank" rel="noreferrer" key={link.class}><i className={link.class}></i></a>)})}
                    </div> 
                </section>

            </section>
        </div>)})    

    return (
        <section className="project-section">
            <h2> Some of My Creations</h2>
            <div className="featured-projects">
                {(screenSize.dynamicWidth >= 1226) ? mappedProjects : mappedProjectsSmall}
            </div>
        </section>
    )
}
