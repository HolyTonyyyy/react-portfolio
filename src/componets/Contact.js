function Contact() {
  return (
    <div className="social" id="footer">
      
<h3>Contact Form</h3>

<div className="container">
  <form action="">
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200}} defaultValue={""} />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>


      <a href="#">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
    </div>
  );
}

export default Contact;
