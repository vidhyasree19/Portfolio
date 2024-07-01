import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to get in touch with me via the following methods:</p>

      <div className="contact-methods">
        <div className="contact-item">
          <h3>Email</h3>
          <p>vidhyasreemani19@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91 9000670481</p>
        </div>
        <div className="contact-item">
          <h3>Social Media</h3>
          <a href='https://www.linkedin.com/in/vidhyasree19' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send a Message</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
