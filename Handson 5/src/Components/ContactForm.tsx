import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='name'/>
            <br />
            <input type="email" placeholder='email'/>
            <br />
            <textarea></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm