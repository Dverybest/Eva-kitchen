import React from "react";
import {useHistory} from "react-router-dom";

const Shipping = () => {
    const history =  useHistory();
    return (
    <>
      <div className="px-5 py-4 formHolder">
        <form action="">
          <div className="row">
                <div className="col-sm-6">
                    <p>Use saved address</p>
                </div>
                <div className="col-sm-6">
                    <div className="form-group ">
                    <input
                        type="text"
                        className="form-control inputDetails"
                        placeholder="123, Electric avenue"
                    />
                    </div>
                </div>
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Delivery location</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="123"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="" className="inputLabel">Street name</label>
              <input
                type="text"
                className="form-control inputDetails"
                placeholder="Electric avenue"
              />
            </div>
            <div className="row">
                <div className='col-sm-5'>
                    <div className="form-group">
                        <label htmlFor="" className="inputLabel">Receiver name</label>
                        <input
                            type="text"
                            className="form-control inputDetails"
                            placeholder="ABC - 123"
                        />
                    </div>
                </div>
                <div className='col-sm-7'>
                <div className="form-group">
                    <label htmlFor="" className="inputLabel">Receiver phone number</label>
                    <input
                        type="text"
                        className="form-control inputDetails"
                        placeholder="Free delivery"
                    />
                </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-rigt">
            <button  className="btn registerButton ">Cancel order</button>
            <button  className="btn registerButton activeButton">Payment</button>
          </div>
        </form>
        
      </div>
    </>
  );
};
export default Shipping;

