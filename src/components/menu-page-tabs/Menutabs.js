import React, { useState, useEffect } from "react";
import "./Menutabs.css";
import Dish from "../../components/reusableMenuCard/Dish";
import { connect } from "react-redux";
import { specialMenuAction } from "../../reduxSetup/actions/specialMenuAction";
import { menuCategoryAction } from "../../reduxSetup/actions/menuCategoryAction";
import { getMenuAction } from "../../reduxSetup/actions/allMenuAction";
import Skeleton from "react-loading-skeleton";

const MenuTab = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    props.specialMenuAction();
    props.menuCategoryAction();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      props.getMenuAction();
    } else {
      props.getMenuAction(selectedCategory);
    }
  }, [selectedCategory]);

  const handleClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="menu-nav">
      <ul className="menu-categories container">
        <li>
          <button
            className={` ${"All" === selectedCategory ? "active" : ""}`}
            onClick={() => handleClick("All")}
          >
            All
          </button>
        </li>

        {props.menuCategory?.map((category, index) => {
          return (
            <li key={index}>
              <button
                className={` ${
                  category._id === selectedCategory ? "active" : ""
                }`}
                onClick={() => handleClick(category._id)}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="container dish-menu">
        <div className="row px-0 mx-0">
        {props.loading ? (
                <div className="col-md-4">
                   <div className="dish">
                    <div className="dish-image ">
                      <Skeleton width={'100%'} height={200} style={{margin:"auto"}} />
                    </div>
                    <h2 className="mt-4">
                      <Skeleton/>
                    </h2>
                    <p className="text-left">
                      <Skeleton count={3} />
                    </p>
                    <button className="bg-light"><Skeleton/></button>
                  </div>
                </div>
              ) : (
                props.allMenu?.docs?.map((dish, index) => {
                  return <Dish key={index} {...dish} />;
                })
              )}
        </div>
      </div>

      <section className="container dish-menu2">
        {
          <div className=" ">
            <h3>Recommended Dishes</h3>
            <div className="row px-0 mx-0">
              {props.loading ? (
                <div className="col-md-4">
                  <div className="dish">
                    <div className="dish-image ">
                      <Skeleton width={'100%'} height={200} style={{margin:"auto"}} />
                    </div>
                    <h2 className="mt-4">
                      <Skeleton/>
                    </h2>
                    <p className="text-left">
                      <Skeleton count={3} />
                    </p>
                    <button className="bg-light"><Skeleton/></button>
                  </div>
                </div>
              ) : (
                props.specialMenu?.map((dish, index) => {
                  return <Dish key={index} {...dish} />;
                })
              )}
            </div>
          </div>
        }
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    specialMenu: state.meals.specialMenu,
    menuCategory: state.meals.menuCategory,
    allMenu: state.meals.allMenu,
    loading: state.loader.loading,
  };
};
const connector = connect(mapStateToProps, {
  specialMenuAction,
  menuCategoryAction,
  getMenuAction,
});
export default connector(MenuTab);
