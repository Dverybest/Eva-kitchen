import React from "react";
import './authentication.css'
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
  return (
    <>
      <div className="px-5 py-4 formBody">
        <form action="">
          <div className="form-group">
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Email Address</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="example@email.com"
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
            <button onClick={()=>{history.push({pathname:'/signUp'})}} className="btn registerButton">Create Account</button>
            <button className="btn registerButton activeButton">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
