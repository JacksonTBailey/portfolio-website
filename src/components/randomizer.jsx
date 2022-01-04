import React, {useEffect, useState} from "react";

export default function Randomizer({variable}) {
    const [random, setRandom] =  useState(0)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random()*variable)
        return () => setRandom(randomNumber)}, [])
   
    return (
        random
    )
}

