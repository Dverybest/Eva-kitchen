import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import Dish1 from "./landingPageImages/dish1.svg";
import image1 from "./landingPageImages/about image.svg";
import Navbar from "../../components/navbar/Navbar";
import pickMeals from "./landingPageImages/pickMeals.svg";
import fastDelivery from "./landingPageImages/fastDelivery.svg";
import checkout from "./landingPageImages/checkout.svg";
import Dish from "../../components/reusableMenuCard/Dish";
import Card from "../../components/reusableCard/Card";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { popularMenuAction } from "../../reduxSetup/actions/menuAction";
import SkeletonDish from "../../components/reusableMenuCard/skeletonDish";

const LandingPage = (props) => {
  const history = useHistory();
  // const mealDetails
  useEffect(() => {
    props.popularMenuAction().catch(err => {
      NotificationManager.error(err.message)
   });
  }, []);
  const [data, setData] = useState([
    {
      img: pickMeals,
      title: "Pick meals",
      description: "Choose your meal from our diversed weekly menu",
    },
    {
      img: checkout,
      title: "Checkout",
      description:
        "Enter a delivery location within our specified region and pay to checkout",
    },
    {
      img: fastDelivery,
      title: "Fast Delivery",
      description:
        "Your order is processed and delivered within 10 ~ 15 minutes",
    },
  ]);

  return (
    <div className="landingPage">
      <Navbar />
      <section className="hero">
        <div className="hero-intro">
          <div className="hero-info ">
            <h1>Your Favourite Food Delivered Hot And Fresh</h1>
            <p>
              Satisfy your craving by getting the food you want delivered to you
              fast. EvaKitchen is now available in selected areas in Enugu.
            </p>
            <button
              onClick={() => {
                history.push("/menu");
              }}
              className="button"
            >
              Order Now<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
          <div className="hero-image">
            <img src={Dish1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="container hero-contact">
          <div className="row px-0 mx-0  justify-content-center">
            <div className="hero-contact-info  col-md-4">
              <div className="icons">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
              <p className="mid_text">10:00am - 07:00pm</p>
              <p>Working Hours</p>
            </div>
            <div className="hero-contact-info col-md-4">
              <div className="icons">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <p className="mid_text">Independence Layout Enugu</p>
              <p>Get Direction</p>
            </div>
            <div className="hero-contact-info col-md-4">
              <div className="icons">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <p className="mid_text">+234 706 121 1353</p>
              <p>Call Online</p>
            </div>
          </div>
        </div>
      </section>
      <section className="landingPage-about">
        <h2>ABOUT US</h2>
        <p className="text_two">All you need to know about us</p>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={image1} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="LandingPageAbout">
                <p className="mb-5">
                  At EvaKitchen, our menu is carefully crafted so that every bite
                  and every refreshing sip serve up big flavor, an abundance of
                  fresh ingredients and a taste of the unexpected. Our artisan chefs
                  create crave-worthy classics alongside a steady rotation of
                  seasonal offerings that take advantage of naturally ripe fruits
                  and vegetables so their flavor is full and their nutrients, rich.
                  Creative, hand-crafted beverages built around seasonality, quality
                  ingredients and simple preparations complement every occasion from
                  brunch, lunch, dinner and, of course, dessert. Always room for
                  dessert.
                </p>
                <button className="button mt-5">Learn More</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="landingPage-ad">
        <p>Looking for the best affordable hospitality in town?</p>
        <button className="button">Book Now</button>
      </section>

      <section className="landingPage-order">
        <h2>ORDER AND DELIVERY</h2>
        <p className="text_two">Our delivery service is top notch</p>
        <div className="card-container">
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </section>

      <section className="landingPage-menu">
        <h2>MENU</h2>
        <p className="text_two">Choose from our most popular menu</p>
        {
          <div className="container ">
            <div className="row px-0 mx-0">
              {props.loading? (      
                  <>
                    <SkeletonDish />
                    <SkeletonDish/>
                    <SkeletonDish/>
                  </>
              ) : (
                props.popularMenu?.slice(0, 6).map((dish, index) => {
                  return <Dish key={index} {...dish} />;
                })
              )}
            </div>
          </div>
        }
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popularMenu: state.meals.popularMenu,
    loading: state.loader.loading,
  };
};
const connector = connect(mapStateToProps, { popularMenuAction });
export default connector(LandingPage);
