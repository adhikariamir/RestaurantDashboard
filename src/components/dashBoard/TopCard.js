import React, { Component } from 'react';

class TopCard extends Component {
    render() {
        return (
            <React.Fragment>

         
           
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
    
                        <div className="card_inner">
                            <p className="text-primary-p">Number of visitors </p>
                            <span className=" font-bold text-title">570 </span>
                        </div>
                    </div>
    
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p"> Total Order</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
    
                    <div className="card">
                        {/* <i className="fa fa-video-camera fa-2x text-yellow"></i> */}
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Tables</p>
                            <span className="font-bold text-title">30</span>
                        </div>
                    </div>
    
                    <div className="card">
                        <i className="fa fa-thumps-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Guests</p>
                            <span className="font-bold text-title">647</span>
                        </div>
                    </div>
                    </React.Fragment>
        );
    }
}

export default TopCard;
