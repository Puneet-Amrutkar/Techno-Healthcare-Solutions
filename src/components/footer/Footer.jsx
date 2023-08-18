import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-contain">
         <div className="footer-logo-SubContain">
           <img src={require('../../assets/footer-logo.png')} />
           <h4>Connecting Tech and Health</h4>
         </div>
       </div>
       <div className="footer-links-contain">
         <div className="footer-for-patient-links">
            <h5>Techno Healthcare</h5>
           <ul>
             <li>Home</li>
             <li>Medicines</li>
             <li>Doctors Nearby</li>
             <li>Testimonials</li>
             <li>About</li>
             <li>Contact Us</li>
           </ul>
         </div>
         <div className="footer-for-patient-links">
          <h5>For Patients</h5>
          <ul>
            <li>Search for Doctors</li>
            <li>Search for Clinics</li>
            <li>Search for Hospitals</li>
            <li>Book Diagnostic Tests</li>
            <li>Book Full Body Checkups</li>
            <li>Book Diagnostic Tests</li>
            <li>Book Diagnostic Tests</li>
          </ul>
        </div>
        <div className="footer-for-patient-links">
        <h5>More...</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>       
    </div>
  )
}

export default Footer