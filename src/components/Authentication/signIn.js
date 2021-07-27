import React,{useState} from "react";
import './authentication.css'
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { signInAction } from "../../reduxSetup/actions/authAction";

const SignIn = (props) => {
    const [email,setEmail] = useState('');
    console.log(email);
    const [password,setPassword] = useState('');
    const handleSignIn =(e)=>{
      e.preventDefault()
      if(!/\S+@\S+\.\S+/.test(email)) return NotificationManager.error('Invalid email address');
      if(!password) return NotificationManager.error('Password cannot be empty')
      props.signInAction({email,password})
      .then(res=>{
        console.log(res);
        NotificationManager.success(res.message)
      }).catch(err=>NotificationManager.error(err.message))
    }
  return (
    <>
      <div className="px-5 py-4 formBody">
        <form method='post'>
          <div className="form-group">
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Email Address</label>
              <input
                type="text"
                className="form-control inputDetails"
                value={email}
                required
                placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="inputLabel">Password</label>
              <input
                type="password"
                className="form-control inputDetails"
                placeholder="*******"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-rigt">
            <button onClick={(e)=>{
              e.preventDefault()
              props.setmanageAuth("signUp")
            }} className="btn registerButton">Create Account</button>
            <button className="btn registerButton activeButton" onClick={handleSignIn}>
              {/* {props.isLoading?'Authenticating...':'Sign In'} */}
              SignIn
              </button>
          </div>
        </form>
      </div>
    </>
  );
};
const mapStateToProps = (state)=>{
  return {
    isLoading:state.loader.loading
  }
}
export default connect(mapStateToProps,{signInAction})(SignIn);
