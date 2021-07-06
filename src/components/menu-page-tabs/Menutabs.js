import React, {useEffect } from "react";
import "./Menutabs.css";
import { connect } from "react-redux";
import { menuCategoryAction } from "../../reduxSetup/actions/menuCategoryAction";
import Skeleton from "react-loading-skeleton";

const MenuTab = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  useEffect(() => {
    props.menuCategoryAction();
  }, []);

  const handleClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="menu-nav container">
      <ul className="menu-categories">
        <li>
          <button
            className={` ${"All" === selectedCategory ? "active" : ""}`}
            onClick={() => handleClick("All")}
          >
            All
          </button>
        </li>

        {!props.menuCategory.length && props.isLoading ? (
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
    </div>
  );
};
const mapStateToProps = ({loader,meals}) => {
  return {
    menuCategory: meals.menuCategory,
    isLoading: loader.loading,
  };
};

export default connect(mapStateToProps, {menuCategoryAction})(MenuTab);
