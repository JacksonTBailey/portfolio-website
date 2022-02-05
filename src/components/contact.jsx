import React from 'react'

export default function Contact() {
    return (
        <section className='contact-section' id='contact-me'>
            <h2 className='contact-header'>Let's Connect</h2>
            <form className='contact-form' action="https://formsubmit.co/el/toxubu" method='POST'>
                <input className='contact-form-subject' type="hidden" name="_subject" value="New form submission!"></input>
                <input type="hidden" name="_next" value="https://jacksonbailey.design/thankyou.jsx"></input>
                <input type="text" name="_honey" style={{'display':'none'}}></input>
                <section className='contact-form-name-section'>
                    <label htmlFor="fname" className='name-label'>First Name</label>
                    <input className='contact-form-name first' type="text" name='name' placeholder='First Name' required />
                    <input className='contact-form-name last' type="text" name='name' placeholder='Last Name' required />
                </section>
                <section className='contact-form-email-section'>
                    <label htmlFor="fname" className='email-label'>Email</label>
                    <input className='contact-form-email' type="email" name='email' required />
                </section>
                <section className='contact-form-message-section'>
                    <label htmlFor="fname" className='message-label'>Message</label>
                    <textarea className='contact-form-message' name='message' placeholder='Write your message here' rows="10" required></textarea>
                </section>
                <section className='contact-form-send-button-section'>
                    <button className='contact-form-send-button' type='submit'>Send</button>
                </section>
            </form>
        </section>
    )
}
