import React from 'react'
import './Contact.css'
import mess_icon from '../../assets/edusity_assets/msg-icon.png';
import mail_icon from '../../assets/edusity_assets/mail-icon.png';
import phone_icon from '../../assets/edusity_assets/phone-icon.png';
import local_icon from '../../assets/edusity_assets/location-icon.png';
import white_arrow from '../../assets/edusity_assets/white-arrow.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59bbec94-240a-419a-9513-8f6208dc8418");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={mess_icon} alt=''></img></h3>
            <p>Feel free to reach out through contact form or find our contact information below.
                your feedback, questions, and suggestions are important to us as we strive to provide 
                exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt=''></img>Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt=''></img>+1 123-456-789</li>
                <li><img src={local_icon} alt=''></img>77 cambridge<br/> MA 02167, united states</li>
            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
         <label>your name</label>
         <input type='text' name='name' placeholder='enter your name' required/>
         <label>Phone number</label>
         <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
         <label>Write your message here</label>
         <textarea name='message'  rows ="6" placeholder='enter your message' required></textarea>
         <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt=''></img></button>
        </form>
        <span>{result}</span>
        </div>
    </div>
  )

  }
export default Contact
