import React, {useEffect, useState} from "react";

export default function Timer() {
    const topSkills = ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "Node.js", "REST"];
    const [skill, setSkill] =  useState(0)
    let oneOfMySkills= (skill) => topSkills[skill%topSkills.length];

    useEffect(() => {
        const interval = setInterval(() => {
            setSkill(prevSkill => prevSkill+1)
        }, 500);
        return () => clearInterval(interval)}, [])
   
    return (
        <React.Fragment>
            {oneOfMySkills(skill)}
        </React.Fragment>
    )
}

