import React from 'react'

export default function Testimonials() {
    
    // Look at https://www.positronx.io/react-responsive-carousel-tutorial/ later to help with carousel creation in React and combine with knowledge from Timer.jsx

    const testimonial = [
        {client: "Ethan Rogers", key:"testimonial-1", img: "images/Ethan_Rogers.jpg", alt:"Ethan Rogers Profile Picture", company: "CEO, Team8Fitness", text: "Jackson went above and beyond for my project! He was very communicative through the whole process and finished the project very quickly. He was very easy to work with, I highly recommend him! Looking forward to more projects in the future."},
        {client: "Kelly Stokes", key:"testimonial-2", img: "images/Kelly_Stokes.jpg", alt:"Kelly Stokes Profile Picture", company: "CEO, CozyLulu", text: "I hired Jackson to help set up my online shop. I honestly had no idea what I was doing. Jackson was extremely knowledgeable and patient with me. He explained things perfectly to me and set up everything I needed. I highly recommend him!"},
    ]

    const mappedTestimonial = testimonial.map((testimonial)=>{
        return (
        <li className="testimonial">
            <img className="testimonial-image" src={testimonial.img} alt={testimonial.alt}/>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-client">{testimonial.client}</p>
            <p className="testimonial-company">{testimonial.company}</p>
        </li>
        )
    })
    
    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <p>I've worked with some great people! Here's what they've said about my work.</p>
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i>
            <div class="testimonials-block">
                <ol>{mappedTestimonial}</ol>
            </div>
        </div>
    )
}
