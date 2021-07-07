import React, { Component } from 'react';
import './Dashboard.css';
import hello from "../../assets/hello-clipart.jpg";
import Chart from "../charts/Chart"
import ProgressBar from '../progressBar/ProgressBar';

import RecentOrderRequest from './RecentOrderRequest';
import TrendingFoodCard from './TrendingFoodCard';
import ReportCard from '../charts/ReportCard';
import TopCard from './TopCard';
import RecentOrderPlacedTable from '../dataTables/RecentOrderPlacedTable';

class Dashboard extends Component {


render() {

       
        return (
            <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1> Hello Admin</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
    
                <div className="main__cards">
                <TopCard/>
    
                </div>


                {/* top card  section ends */}
    
                <div className="food-order-revenue-section">
    
                    <div className="recent-food-order-request">
                        <div className='recent-food-order-request-title'>
    
                            <div>
                                <h6>RECENT ORDERS REQUESTED</h6>
                            </div>
                            <button type="button" className="btn">View All</button>
    
                        </div>
    
                        <div className="food-order-list">
                         <RecentOrderRequest/>
                        </div>
                    </div>
                    <div className="monthly-revenue">
                        <div className='monthly-revenue-title'>
    
                            <div>
                                <h6>Monthly Revenue</h6>
                            
                            </div>
                            <div className="select">
      <select name="slct" id="slct">
        <option selected disabled>Choose Month</option>
        <option value="1">Janurary</option>
        <option value="2">Feburary</option>
        <option value="3">March</option>
        <option value="3">April</option>
        <option value="3">May</option>
        <option value="3">June</option>
        <option value="3">July</option>
        <option value="3">August</option>
        <option value="3">September</option>
        <option value="3">October</option>
        <option value="3">November</option>
        <option value="3">December</option>
      </select>
    </div>
                        </div>
    <div className="progress-bar-section">

  
    <ProgressBar/>
    </div>
    
                    </div>
                </div>

{/* /****************trending oreders *************/ }

<div className="trending-food-order-section">
<TrendingFoodCard/>
</div>


    {/* /****************trending oreders  ends*************/ }
                 <div className="charts">

                         <Chart /> 
              
                <ReportCard/>
                </div> 
    
{/* recent order request */}
<div className="recent-food-order-section">
<RecentOrderPlacedTable/>
</div>




    {/* /****  main container ends***** */ }
            </div>
        </main>
        );
    }
}

export default Dashboard;
