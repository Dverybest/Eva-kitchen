import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import MenuTabs from '../../components/menu-page-tabs/Menutabs'
import './MenuPage.css';
import Footer from '../../components/footer/Footer';
import { specialMenuAction } from "../../reduxSetup/actions/menuAction";
import { getMenuAction } from "../../reduxSetup/actions/menuAction";
import SkeletonDish from '../../components/reusableMenuCard/skeletonDish';
import empty from '../../assets/empty.svg';
import Dish from '../../components/reusableMenuCard/Dish';
import { connect } from 'react-redux';
import Menutabs from '../../components/menu-page-tabs/Menutabs';
import { NotificationManager } from "react-notifications";


const MenuPage = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        props.specialMenuAction().catch(err => {
            NotificationManager.error(err.message)
         });
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            props.getMenuAction().catch(err => {
               NotificationManager.error(err.message)
            });
        } else {
            props.getMenuAction(selectedCategory).catch(err => {
                NotificationManager.error(err.message)
             });
        }
    }, [selectedCategory]);

    return (
        <div className='menu'>
            <Navbar />

            <div className="contain">
                <div className='search_container'>
                    <div className='search'>
                        <i class="fa fa-search"></i>
                        <input type='text' placeholder={"Search for food, coffe, etc.."} />
                    </div>
                    <button className="button">
                        Search
                    </button>
                </div>
            </div>
            < Menutabs
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <setion className="container dish-menu">
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
                                props.selectedMenuList.map((dish, index) => {
                                    return <Dish key={index} {...dish} />;
                                })

                            }
                            {
                                props.selectedMenuList.length === 0 ? (
                                    <div className='empty-container'>
                                        <img src={empty} />
                                        <p>Nothing to show</p>
                                    </div>
                                ) : null
                            }
                        </>
                    )}
                </div>
                <div className='d-flex justify-content-center my-5 align-items-center paginate'>

                    <button className='btn mx-4'><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <span>Page 1 / 1 </span>
                    <button className='btn mx-4'><i className="fa fa-angle-right" aria-hidden="true"></i></button>

                </div>
            </setion>
            <section className="container dish-menu2">
                {
                    <div className="">
                        <h3>Recommended Dishes</h3>
                        <div className="row px-0 mx-0">
                            {!props.specialMenu && props.isLoading ? (
                                <>
                                    <SkeletonDish />
                                    <SkeletonDish />
                                    <SkeletonDish />
                                </>
                            ) : (
                                props.specialMenu.slice(0, 3).map((dish, index) => {
                                    return <Dish key={index} {...dish} />;
                                })
                            )}
                        </div>
                    </div>
                }
                <div className='d-flex justify-content-center my-5 align-items-center paginate'>

                    <button className='btn mx-4'><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <span> 1 / 1 </span>
                    <button className='btn mx-4'><i className="fa fa-angle-right" aria-hidden="true"></i></button>

                </div>
            </section>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => {
    const { meals, loader } = state;
    return {
        specialMenu: Array.isArray(meals.specialMenu) ? meals.specialMenu : [],
        selectedMenuList: Array.isArray(meals.allMenu) ? meals.allMenu : [],
        isLoading: loader.loading,
    };
};

export default connect(mapStateToProps, {specialMenuAction,getMenuAction})(MenuPage)
