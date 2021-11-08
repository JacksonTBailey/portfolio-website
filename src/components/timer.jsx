import React, {useEffect, useState} from "react";

export default function Timer({items, startingItemIndex, timer, changeFunction, part}) {
    const [item, setItem] =  useState(startingItemIndex)
    let oneOfMyItems = (item) => items[item%items.length];

    useEffect(() => {
        const interval = setInterval(() => {
            setItem(changeFunction)
        }, timer);
        return () => clearInterval(interval)}, [])
   
    return (
        <React.Fragment>
            {part ? oneOfMyItems(item)[part] : oneOfMyItems(item)}
        </React.Fragment>
    )
}

