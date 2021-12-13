import react from "react";
import React, {useEffect, useState} from "react";

export default function Slider({sliderItems, startingSliderItemIndex, changeFunction}) {
   const [sliderItem, setSliderItem] =  useState(startingSliderItemIndex)
   let oneOfMySliderItems = (sliderItem) => sliderItems[sliderItem%sliderItems.length];

   useEffect(() =>{
      const sliderInterval = setInterval(() => {
         setSliderItem(changeFunction)
      });
      return () => clearInterval(sliderInterval)}, [])

   return(
      <react.Fragment>
         {oneOfMySliderItems(sliderItem)}
      </react.Fragment>
   )
}

