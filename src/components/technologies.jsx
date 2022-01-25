import React from 'react';
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiMaterialui, SiMongodb, SiMysql, SiAdobephotoshop, SiStyledcomponents, SiAdobeillustrator} from 'react-icons/si';
import {FaGitAlt, FaSass} from 'react-icons/fa'

//https://www.youtube.com/watch?v=OPaLnMw2i_0

export default function Technologies() {
  const technologies = [
    {name: "HTML", id: "Html", src: <SiHtml5/>},
    {name: "CSS", id: "Css", src: <SiCss3/>},
    {name: "JavaScript", id: "Javascript", src: <SiJavascript/>},
    {name: "Bootstrap", id: "Bootstrap", src: <SiBootstrap/>},
    {name: "SASS", id: "Sass", src: <FaSass/>},
    {name: "React", id: "React", src: <SiReact/>},
    {name: "Material UI", id: "Mui", src: <SiMaterialui/>},
    {name: "Styled Components", key: 8, id: "StyledComponents", src: <SiStyledcomponents/>},
    {name: "MongoDB", id: "Mongodb", src: <SiMongodb/>},
    {name: "MySQL", id: "Mysql", src: <SiMysql/>},
    {name: "Git", id: "Git", src: <FaGitAlt/>},
    {name: "Photoshop", id: "Photoshop", src: <SiAdobephotoshop/>},
    {name: "Illustrator", id: "Illustrator", src: <SiAdobeillustrator/>}
  ]

  return(
      <section className="tech" id="tech">
        <h2 className='tech-header'>Technologies</h2>
        <p className='tech-p'>I've worked with a vast array of technologies in the web development world.</p>
        
        <div className='technology-mapped-grid'>
          {technologies.map((tech, i) => {
            return (
              <div className='technology' key={i} id={tech.id} style={{"animationDelay": `${i * 3}s`, "animationDuration": `${technologies.length * 3}s`}}>
                <div className="technology-image" style={{"animationDelay": `${i * 3}s`, "animationDuration": `${technologies.length * 3}s`}}>
                  {tech.src}
                  <p className='technology-p' style={{"animationDelay": `${i * 3}s`, "animationDuration": `${technologies.length * 3}s`}}>{tech.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
  );
}
