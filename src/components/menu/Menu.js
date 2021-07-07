import React, { Component } from 'react';
import './Menu.css'
// import MenuList from './MenuList';
import { Link } from "react-router-dom";
class Menu extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: null,
            menuItem: [
                { name: "Pizza", URL: "http://theleadsouthaustralia.com.au/wp-content/uploads/2020/04/Beston-Mozzarella-Pizza.jpg" },
                { name: "MO:MO", URL: "https://s3.scoopwhoop.com/ach/momo/2.jpg" },
                { name: "Hot Bevrage", URL: "https://tse2.mm.bing.net/th?id=OIP.qcffIxRTRaAbY0Vz14Vv7AHaF_&pid=Api" },
                { name: "Cold Bevrage", URL: "https://www.franchiseindia.com/uploads/content/ri/art/make-in-india-how-cold-drink-mar-9b703bdeef.jpg" },
                { name: "Liquor", URL: "https://finmedium.com/wp-content/uploads/2020/09/liquor-companies.jpg" },
                { name: "Deserts", URL: "http://del.h-cdn.co/assets/16/25/1600x800/landscape-1466856345-delish-peach-roses-002.jpg" },

            ]
        }
    }



    handleActiveItem = (index) => this.setState({ ...this.state, activeItem: index })

    render() {
        const { menuItem } = this.state;

        return (
            <main>
                <div className="main__container_menu">

                <div className="menu-section">
    
                <div className="menu-request">
                    <div className='menu-request-title'>
    
                        <div> 
                            <h6>Menu</h6>
                        </div>
                  
    
                    </div>
                    <div className="food-menu">
                        {/* /****************Food menu *************/}


                        {
                            menuItem.map((foodItem, index) => {
                                return (
                                    
                                    <div className='menu-food-card' key={index} onClick={() => this.handleActiveItem(index)} >
                                    <Link  to= {`/menuList/${index}`}>
                                        <div className="img-card">
                                            <img src={foodItem.URL} alt="pizza" />
                                        </div>

                                        <div className="food-menu-title">
                                            <h6> {foodItem.name}</h6>
                                        </div>
                        
                                     
                                        </Link> 
                                     
                                    </div>

                                )

                            }
                            )}


                        

    

                        {/* /****************fooed menu ends*************/}


                    </div>
                </div>
                </div>
                </div>
            </main>
        );
    }
}

export default Menu;
