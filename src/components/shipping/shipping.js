import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { Formik } from "formik";
// import * as yup from "yup";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { schema } from "./formSchema";
import { connect } from "react-redux";
import { PostShippingAction } from "../../reduxSetup/actions/orderMenuAction";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { string } from "yup/lib/locale";

const Shipping = ({ price, PostShippingAction, shippingFee }) => {
  const history = useHistory();
  const userDetails = useSelector((state) => state.auth.userDetail);
  const cartItems = useSelector((state) => state.cart.cartItem);
  
  console.log(cartItems, "cartItems");
  const config = {
    public_key: "FLWPUBK_TEST-10ed23d9dd726640e569e3b6c54944f1-X",
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userDetails.email,
      phonenumber: userDetails.phoneNumber,
      name: userDetails.name,
    },
  };
  const purchaseDetails = (response, value, action) => {
    console.log(cartItems, 'jjiki');
    const newCartItems = cartItems.map((cartOrder, index) => {
      return {menu: cartOrder._id, quantity: cartOrder.quantity};
    });
    const payload = {
      transactionId: String(response.transaction_id),
      phoneNumber: value.phoneNumber,
      fullName: value.fullName,
      address: value.address,
      deliveryType: "instant Delivery",
      shippingFee: shippingFee,
      orderItems: newCartItems,
    };
    PostShippingAction(payload).then(res=>{
      console.log(res, 'res');
      action.resetForm();
      NotificationManager.success(res.message)
    }).catch(error=>{
      console.log(error);
      NotificationManager.error(error.message)
    })
  };
  console.log(userDetails, "userDetails");
  const handleFlutterPayment = useFlutterwave(config);
  const handleShipping = (value, action) => {
    console.log(value);
    handleFlutterPayment({
      callback: (response) => {
        closePaymentModal();
        console.log(response, "response");
        if (response.status === 'successful'){
          purchaseDetails(response, value, action)
        }
        else{
          NotificationManager.error('Payment not successful')
        }
      },
      onclose: () => {},
    });
  };

  return (
    <>
      <div className="px-5 py-4 formHolder">
        <Formik
          initialValues={{ fullName: "", phoneNumber: "", address: "" }}
          validationSchema={schema}
          onSubmit={(values, actions) => handleShipping(values, actions)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form action="">
              <div className="row">
                <div className="col-sm-5">
                  <div className="form-group">
                    <label htmlFor="" className="inputLabel">
                      Receiver's name
                    </label>
                    <input
                      type="text"
                      className="form-control inputDetails"
                      placeholder="Name"
                      name="fullName"
                      onChange={handleChange("fullName")}
                      value={values.fullName}
                    />
                    {errors.fullName}
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="form-group">
                    <label htmlFor="" className="inputLabel">
                      Receiver phone number
                    </label>
                    <input
                      type="text"
                      className="form-control inputDetails"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      onChange={handleChange("phoneNumber")}
                      value={values?.phoneNumber}
                      // }
                    />
                    {errors.phoneNumber}
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <label htmlFor="" className="inputLabel">
                  Delivery location
                </label>
                <input
                  type="text"
                  className="form-control inputDetails"
                  placeholder="123"
                  onChange={handleChange("address")}
                  value={values.address}
                  name="address"
                />
                {errors.address}
              </div>

              <div className="d-flex justify-content-end align-items-rigt">
                <button className="btn registerButton ">Cancel order</button>
                <button
                  className="btn registerButton activeButton"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  // }}
                  onClick={handleSubmit}
                >
                  Payment
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default connect (null, {PostShippingAction}) (Shipping)
