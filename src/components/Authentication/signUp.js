import React from "react";
import './authentication.css';
import {useHistory} from "react-router-dom";

const SignUp = ({setmanageAuth}) => {
    const history =  useHistory();
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
              />
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Email Address</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Phone Number</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="+234 xxxxxxxxx"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="inputLabel">Password</label>
              <input
                type="password"
                className="form-control inputDetails"
                placeholder="*******"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-rigt">
            <button  className="btn registerButton activeButton">Create Account</button>
            <button  onClick={()=>setmanageAuth("signIn")} className="btn registerButton ">Sign In</button>
          </div>
        </form>
        
      </div>
    </>
  );
};
export default SignUp;

