import React from 'react';
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiMaterialui, SiMongodb, SiMysql, SiAdobephotoshop, SiStyledcomponents, SiAdobeillustrator} from 'react-icons/si';
import {FaGitAlt, FaSass} from 'react-icons/fa'

//https://www.youtube.com/watch?v=OPaLnMw2i_0

export default function Technologies() {
  const technologies = [
    {name: "HTML", key: 1, id: "Html", src: <SiHtml5/>},
    {name: "CSS", key: 2, id: "Css", src: <SiCss3/>},
    {name: "JavaScript", key: 3, id: "Javascript", src: <SiJavascript/>},
    {name: "Bootstrap", key: 4, id: "Bootstrap", src: <SiBootstrap/>},
    {name: "SASS", key: 5, id: "Sass", src: <FaSass/>},
    {name: "React", key: 6, id: "React", src: <SiReact/>},
    {name: "Material UI", key: 7, id: "Mui", src: <SiMaterialui/>},
    {name: "Styled Components", key: 8, id: "StyledComponents", src: <SiStyledcomponents/>},
    {name: "MongoDB", key: 9, id: "Mongodb", src: <SiMongodb/>},
    {name: "MySQL", key: 10, id: "Mysql", src: <SiMysql/>},
    {name: "Git", key: 11, id: "Git", src: <FaGitAlt/>},
    {name: "Photoshop", key: 12, id: "Photoshop", src: <SiAdobephotoshop/>},
    {name: "Illustrator", key: 13, id: "Illustrator", src: <SiAdobeillustrator/>}
  ]

  return(
      <section className="tech" id="tech">
        <h2 className='tech-header'>Technologies</h2>
        <p className='tech-p'>I've worked with a vast array of technologies in the web development world.</p>
        
        <div className='technology-mapped-grid'>
          {technologies.map((tech, i) => {
            return (
              <div className='technology' key={i} id={tech.id} style={{"animationDelay": `${i * 3}s`, "animationDuration": `${technologies.length * 3}s`}}>
                {tech.src}
                <p className='technology-p'>{tech.name}</p>
              </div>
            )
          })}
        </div>
      </section>
  );
}
