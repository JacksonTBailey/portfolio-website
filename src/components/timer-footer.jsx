import React, {useEffect, useState} from "react";

export default function TimerFooter({part}) {

    const featuredQuote = [
        {author: "Vincent van Gogh", text: "Normality is a paved road: It’s comfortable to walk, but no flowers grow on it."},
        {author: "Leonardo da Vinci", text: "Learning never exhausts the mind."},
        {author: "Katsumoto — The Last Samurai", text: "The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life."},
        {author: "Obi-Wan Kenobi", text: "Hello there."},
        {author: "Bruce Lee", text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."}
    ]
    
    const [quote, setQuote] =  useState(0)
    let oneOfMyQuotes= (quote) => featuredQuote[quote%featuredQuote.length];

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(Math.floor(Math.random()*featuredQuote.length))
        }, 500);
        return () => clearInterval(interval)}, [])
   
    return (
        <React.Fragment>
            {oneOfMyQuotes(quote)[part]}
        </React.Fragment>
    )
}

