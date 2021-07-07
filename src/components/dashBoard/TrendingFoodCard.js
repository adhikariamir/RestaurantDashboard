import React, { Component } from 'react';
import pizza from '../../assets/Pizza Food.jpg'
class TrendingFoodCard extends Component {
    render() {
        return (
            <div className="trending-orders">
        <div className='trending-orders-title'>
            <div>
                <h6>Trending orders</h6>
            </div>
        </div>


{/* *********food display ********** */}


        <div className="trending-food">
     
        <div className='main-food-card'>
           <div className="img-card">
<img src={pizza} alt="pizza"/>
    </div>
    <div className="food-details">
    <div className="food-title">
        <h6> Pizza</h6>
        <span><strong>$25 </strong></span>
    </div>
    <div className="food-other-details">
        <p>Orders : 25</p>
        <p>Income : $120</p>
    </div>
    </div>
        </div>
        <div className='main-food-card'>
           <div className="img-card">
<img src={pizza} alt="pizza"/>
    </div>
    <div className="food-details">
    <div className="food-title">
        <h6> Pizza</h6>
        <span><strong>$25 </strong></span>
    </div>
    <div className="food-other-details">
        <p>Orders : 25</p>
        <p>Income : $120</p>
    </div>
    </div>
        </div>
        <div className='main-food-card'>
           <div className="img-card">
<img src={pizza} alt="pizza"/>
    </div>
    <div className="food-details">
    <div className="food-title">
        <h6> Pizza</h6>
        <span><strong>$25 </strong></span>
    </div>
    <div className="food-other-details">
        <p>Orders : 25</p>
        <p>Income : $120</p>
    </div>
    </div>
        </div>
        <div className='main-food-card'>
           <div className="img-card">
<img src={pizza} alt="pizza"/>
    </div>
    <div className="food-details">
    <div className="food-title">
        <h6> Pizza</h6>
        <span><strong>$25 </strong></span>
    </div>
    <div className="food-other-details">
        <p>Orders : 25</p>
        <p>Income : $120</p>
    </div>
    </div>
        </div>
</div>

        {/* *********food display ********** */}



</div>
        );
    }
}

export default TrendingFoodCard;
