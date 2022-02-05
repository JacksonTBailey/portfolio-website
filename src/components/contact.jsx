import React from 'react'

export default function Contact() {
    return (
        <form action="https://formsubmit.co/bailey95jackson@gmail.com" method='POST'>
            <input type="hidden" name="_subject" value="New form submission!"></input>
            <input type="hidden" name="_next" value="https://jacksonbailey.design/thankyou.jsx"></input>
            <input type="text" name="_honey" style="display:none"></input>
            <input type="text" name='name' placeholder='Name' required />
            <input type="email" name='email' placeholder="Email Address" required />
            <input type="text" name='message' placeholder='Write your message here' required />
            <button type='submit'>Send</button>
        </form>
    )
}
