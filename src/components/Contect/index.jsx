import React from 'react';

const Contact = () => {
  return (
    <div>
    <h3>Leave a message</h3>
    <form name="contact"data-netlify="true" netlify>
    <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Fullname"/>
      </div>
      <label htmlFor="name">Email</label>
      <input type="email" name="email" placeholder="Email"/>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
      <input type="submit" value="Submit"/>
    </form>
  </div>
  );
}

export default Contact;
