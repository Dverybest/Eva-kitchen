import React,{useState} from "react";
import './authentication.css';
import {useHistory} from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { signUpAction } from "../../reduxSetup/actions/authAction";

const SignUp = (props) => {
    const history =  useHistory();
    const [signUpDetails, setsignUpDetails] = useState({
      username: "",
      password: "",
      phoneNumber: "",
      email: '',
    })
      const handleChange =(e)=>{
      e.preventDefault()
      setsignUpDetails({
        ...signUpDetails,
        [e.target.name]: e.target.value
      })
    }
    const handleSignUp =(e)=>{
      e.preventDefault();
      if(!/\S+@\S+\.\S+/.test(signUpDetails.email)) return NotificationManager.error('Invalid email address');
      if(!signUpDetails.password) return NotificationManager.error('Password cannot be empty')
      props.signUpAction(signUpDetails)
      .then(res=>{
        console.log(res);
        NotificationManager.success(res.message)
      }).catch(err=>NotificationManager.error(err.message))
    }

    return (
    <>
      <div className="px-5 py-4 formHolder">
        <form action="">
          <div className="form-group">
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Full Name</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="Jane Doe"
                required
                value={signUpDetails.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Email Address</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="example@email.com"
                required
                value={signUpDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Phone Number</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="+234 xxxxxxxxx"
                value={signUpDetails.phoneNumber}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="inputLabel">Password</label>
              <input
                type="password"
                className="form-control inputDetails"
                placeholder="*******"
                value={signUpDetails.password}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-rigt">
            <button  onClick={handleSignUp} className="btn registerButton activeButton">Create Account</button>
            <button  onClick={(e)=>{
                e.preventDefault();
                props.setmanageAuth("signIn")
              }} className="btn registerButton ">Sign In</button>
          </div>
        </form>
        
      </div>
    </>
  );
};
export default connect(null,{signUpAction})(SignUp);

