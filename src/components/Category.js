import React from 'react';
import beautyProducts from "../images/Beauty.jpg"
import supplement from "../images/Supplements.jpg"
import fitness from "../images/Fitness.jpg"
import './Category.css';

function Category() {
    return (
        <div className="category">
            <div className="category_header">
                <h3>Category</h3>
                <p>with great offers</p>    
            </div>
            <div className="category_list">
                <div className="category_card">
                    <img src={beautyProducts} width="100%" alt="products"/>
                    <div className="category_overlap">
                        <h4>All Natural Non Toxic</h4>
                        <h2>Best of Beauty</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="category_card">
                    <img src={supplement} width="100%" alt="supplement"/>
                    <div className="category_overlap">
                        <h4>Best Deals for</h4>
                        <h2>Supplements and Vitamins</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="category_card">
                    <img src={fitness} width="100%" alt="fitness"/>
                    <div className="category_overlap">
                        <h4>Everyday savings on</h4>
                        <h2>Fitness and Nutrition</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
