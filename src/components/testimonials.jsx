import react from "react";
import React, {useState} from "react";

export default function Testimonials() {
    
    // Look at https://www.positronx.io/react-responsive-carousel-tutorial/ later to help with carousel creation in React and combine with knowledge from Timer.jsx

    const testimonials = [
        {client: "Ethan Rogers", key:"testimonial-1", img: "images/Ethan_Rogers.jpg", alt:"Ethan Rogers Profile Picture", company: "CEO, Team8Fitness", text: "Jackson went above and beyond for my project! He was very communicative through the whole process and finished the project very quickly. He was very easy to work with, I highly recommend him! Looking forward to more projects in the future."},
        {client: "Kelly Stokes", key:"testimonial-2", img: "images/Kelly_Stokes.jpg", alt:"Kelly Stokes Profile Picture", company: "CEO, CozyLulu", text: "I hired Jackson to help set up my online shop. I honestly had no idea what I was doing. Jackson was extremely knowledgeable and patient with me. He explained things perfectly to me and set up everything I needed. I highly recommend him!"},
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = testimonials.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length -1 ? 0: currentSlide + 1)
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    };

    if(!Array.isArray(testimonials) || testimonials.length <=0){
        return null;
    }

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <p>I've worked with some great people! Here's what they've said about my work.</p>
            <i class="fas fa-chevron-left" onClick={prevSlide}></i>
            <i class="fas fa-chevron-right" onClick={nextSlide}></i>
                {testimonials.map((testimonial, index)=>{
                    return (
                        <div className={index === currentSlide ? "testimonial active" : "testimonial"} key={index}>
                            {index === currentSlide &&
                            (<react.Fragment>
                            <img className="testimonial-image" src={testimonial.img} alt={testimonial.alt}/>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <p className="testimonial-client">{testimonial.client}</p>
                            <p className="testimonial-company">{testimonial.company}</p>
                            </react.Fragment>)}
                        </div>
                        )
                    })}
        </div>
    )
}
