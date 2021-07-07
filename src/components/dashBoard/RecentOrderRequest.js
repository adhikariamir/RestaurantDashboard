import React, { Component } from 'react';
import pizza from '../../assets/Pizza Food.jpg';
import burger from '../../assets/burger.jpg';
import momo from '../../assets/momo.jpg';
import frenchFries from '../../assets/frenchFries.jpg';
class RecentOrderRequest extends Component {
state={
    recentOrderRequest:{
foodName : "Slice of pizza",
price : 450,
productId : 954545,
    }
}

    render() {
        const {recentOrderRequest}=this.state;
        return (
            <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="table-first-col">Type of Food</th>
                        <th>Price</th>
                        <th>Product ID</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-first-col"><img src= {pizza} alt="pizza"/> {recentOrderRequest.foodName}</td>
                        <td> Rs {recentOrderRequest.price}</td>
                        <td>{recentOrderRequest.productId}</td>

                    </tr>
                    <tr>
                        <td className="table-first-col"> <img src= {burger} alt="burger"/>Hamburger</td>
                        <td>Rs 350</td>
                        <td>657487</td>

                    </tr>
                    <tr>
                        <td className="table-first-col"> <img src= {frenchFries} alt="frenchFries"/>French Fries</td>
                        <td>Rs 150</td>
                        <td>657987</td>

                    </tr>
                    <tr>
                        <td className="table-first-col"> <img src= {momo} alt="momo"/>Mo:Mo</td>
                        <td>Rs 180</td>
                        <td>657727</td>

                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default RecentOrderRequest;
