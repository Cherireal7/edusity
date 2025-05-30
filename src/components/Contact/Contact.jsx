import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "00403c19-a5d8-4c76-9453-0e7f257e44e3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send Us a Message <img src={msg_icon} /> </h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>

                <ul>
                    <li> <img src={mail_icon} /> contact@greatstack.dev </li>
                    <li> <img src={phone_icon} />  0989932714 </li>
                    <li> <img src={location_icon} /> 123 University Avenue, City, Country </li>
                    

                </ul>

            </div>
            <div className='contact-col '>
                <form onSubmit={onSubmit}>
                    <label> Your Name</label>
                    <input type='' name='name' placeholder='Enter your name' required/>
                    <label> Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                    <label> Write your messages here</label>
                    <textarea name='message' id='' cols="30" rows="6" placeholder='Enter your message here' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} /> </button>
                    
                </form>
                <span> {result} </span>
                 </div>

        </div>
    )
}

export default Contact
