import React, { Component } from 'react';
import './Menu.css';
import './MenuList.css';
// import pizza from '../../assets/Pizza Food.jpg';
import { menuItem } from '../../App';

const MenuListItem = [
{  name :"pizza", status:"In Stock",quantity:20,price:50,description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "}
];

class MenuList extends Component {
  render() {
  
    const item = menuItem[this.props.match.params.food]
   
    return (

      <React.Fragment>
<main>
<div className="main__container">
<div className="food-menu">


{MenuListItem.map ((foodDetails,index)=>{

  return(


  <div className='menu-food-card' key={index}>
  <div className="img-card">
  <img src={item.URL} alt="pizza" /> 
  </div>
 <div className="menu-list">
  <div className="food-menu-list-title">
    <h6>{foodDetails.name}</h6>
    <p>Rs: {foodDetails.price}</p>

  </div>
  <div className="food-menu-list-title">
  <h5>Qty: {foodDetails.quantity} </h5>
  <span className={`food-status ${foodDetails.status === "In Stock" ? "stock" :"outOfStock"}`}>{foodDetails.status}</span>

</div>
<div className="food-menu-list-title food-description">

<p> {foodDetails.description}</p>

</div>
<div className="food-menu-list-title">

<button className="list-button-edit list-button">Edit</button>
<button className="list-button-remove list-button">Remove</button>

</div>

</div>
</div>




)
})
  }




        </div>
        </div>
        </main>
      </React.Fragment>
    );
  }
}


export default MenuList;
