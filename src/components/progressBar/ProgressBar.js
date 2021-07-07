import React, { Component } from 'react';
import {Line} from "rc-progress"

class ProgressBar extends Component {
    state={
         totalProgress : [
            { week: "week1", percentage: 25 },
            { week: "week2", percentage: 50 },
            { week: "week3", percentage:75 },
            { week: "week4", percentage:100 }
           
          ]
    };
    render() {
      const {totalProgress}=this.state;
 
        return (
            
         totalProgress.map((progress,index)=>( 
            <React.Fragment >
           
                <div className="progress-label" key={index}>
                <span class="progress-label">
                
                
                 <strong>{progress.week}</strong> </span>
                
                 
                </div>
          
                <div className="progressBar"  ><span className="progPercentage"> {progress.percentage}%</span>
                <Line percent={progress.percentage} strokeWidth="2" strokeColor="#ff6877"  className="progress"/>  
            </div>
          
            </React.Fragment> 
         

            ))
         



     


            
        );
    }
}




export default ProgressBar;
