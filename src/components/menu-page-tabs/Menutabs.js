import React, { useState, useEffect } from "react";
import "./Menutabs.css";
import Dish from "../../components/reusableMenuCard/Dish";
import { connect } from "react-redux";
import { specialMenuAction } from "../../reduxSetup/actions/specialMenuAction";
import { menuCategoryAction } from "../../reduxSetup/actions/menuCategoryAction";
import { getMenuAction } from "../../reduxSetup/actions/allMenuAction";
import Skeleton from "react-loading-skeleton";
import SkeletonDish from "../reusableMenuCard/skeletonDish";
import empty from '../../assets/empty.svg';

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
      <ul className="menu-categories">
        <li>
          <button
            className={` ${"All" === selectedCategory ? "active" : ""}`}
            onClick={() => handleClick("All")}
          >
            All
          </button>
        </li>

        {!props.menuCategory.length && props.loading ? (
          <>
            <li ><Skeleton width={100} /></li>
            <li ><Skeleton width={150} /></li>
          </>) :
          (props.menuCategory?.map((category, index) => {
            return (
              <li key={index}>
                <button
                  className={` ${category._id === selectedCategory ? "active" : ""
                    }`}
                  onClick={() => handleClick(category._id)}
                >
                  {category.name}
                </button>
              </li>
            );
          }))
        }
      </ul>

      <div className="container dish-menu">
        <div className="row px-0 mx-0">
          {props.loading ? (
            <>
              <SkeletonDish />
              <SkeletonDish />
              <SkeletonDish />
            </>
          ) : (
            <>
              {
                props.allMenu?.map((dish, index) => {
                  return <Dish key={index} {...dish} />;
                })

              }
              {
                props.allMenu.length===0?(
                  <div className='empty-container'>
                    <img src={empty}/>
                    <p>Nothing to show</p>
                  </div>
                ):null
              }
            </>
          )}
        </div>
      </div>

      <section className="container dish-menu2">
        {
          <div className=" ">
            <h3>Recommended Dishes</h3>
            <div className="row px-0 mx-0">
              {props.loading ? (
                <>
                  <SkeletonDish />
                  <SkeletonDish />
                  <SkeletonDish />
                </>
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
