import React from 'react'

import './login.css';

const Login = () => {
  return (
    <div className="login_form-contain">
    <div className="login_form">
    <div className="form">
        <div className="heading">
            <h1>SIGN UP</h1>
            <p> (for a better user experience) </p>
        </div>
        <hr></hr>
     <form>
       <div className="input-container">
         <div><label>Full Name </label></div>
         <input type="text" name="uname" required />
         {/* {renderErrorMessage("uname")} */}
       </div>
       <div className="input-container">
         <div><label>Date of Birth </label></div>
         <input type="date" name="dob" required />
        </div>
        <div className="input-container">
         <div><label>Email Id </label></div>
         <input type="email" name="email" required />
        </div>
        <div className="input-container">
         <div><label>Illness (if any) </label></div>
         {/* <input type="text" name="illness" /> */}
          <select name="cars" id="cars">
            <option value="volvo">Select</option>
            <option value="volvo">No Illness</option>
            <option value="volvo">Allergies</option>
            <option value="saab">Diarrhea</option>
            <option value="mercedes">Headaches</option>
            <option value="audi">Diabetes</option>
            <option value="audi">Insomnia</option>
            <option value="audi">Thyroid disease</option>
            <option value="audi">Diabetes</option>
            <option value="audi">Other</option>
          </select>
        </div>
       <div className="input-container">
         <div><label>Password (Strong) </label></div>
         <input type="password" name="pass" required />
         {/* {renderErrorMessage("pass")} */}
       </div>
       <div className="button-container">
        <button>SUBMIT</button>
       </div>
     </form>
    </div>
    </div>
    </div>
  )
}

export default Login
