import React, { Component } from 'react';

class ReportCard extends Component {
    render() {
        return (
           
                    <div className="charts__right">
                    <div className="charts__right__title">
                            <div>
                                <h1>Reports</h1>
                                <p>Suorjan Himalayan, Nepal </p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>
    
                            <div className="charts__right__cards">
                            <div className='card1'>
                                <h1>Income</h1>
                                <p>$75,00</p>
                            </div>
                                <div className='card2'>
                                <h1>Sales</h1>
                                <p>$175,00</p>
                            </div>
                            <div className='card3'>
                                <h1>Users</h1>
                                <p>500</p>
                            </div>
                            <div className='card4'>
                                <h1>Orders</h1>
                                <p>1,881</p>
                            </div>
    
    
    
                
                        </div>
    
    
                    </div>
           
        );
    }
}

export default ReportCard;
