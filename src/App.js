
import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import MainRoute from "./route";

export const menuItem= [
  { name: "Pizza", URL: "http://theleadsouthaustralia.com.au/wp-content/uploads/2020/04/Beston-Mozzarella-Pizza.jpg" },

  { name: "MO:MO", URL: "https://s3.scoopwhoop.com/ach/momo/2.jpg" },
  { name: "Hot Bevrage", URL: "https://tse2.mm.bing.net/th?id=OIP.qcffIxRTRaAbY0Vz14Vv7AHaF_&pid=Api" },
  { name: "Cold Bevrage", URL: "https://www.franchiseindia.com/uploads/content/ri/art/make-in-india-how-cold-drink-mar-9b703bdeef.jpg" },
  { name: "Liquor", URL: "https://finmedium.com/wp-content/uploads/2020/09/liquor-companies.jpg" },
  { name: "Deserts", URL: "http://del.h-cdn.co/assets/16/25/1600x800/landscape-1466856345-delish-peach-roses-002.jpg" },

]

class App extends Component {
  state={
    sidebarOpen:false,

  }


 openSidebar = ()=>{
 this.setState({sidebarOpen:true});
     }
    
    closeSidebar = ()=>{
      this.setState({sidebarOpen:!true});
     }


  render() {
    const {sidebarOpen}=this.state;
    return (
      <BrowserRouter>
         <div className="container">
         <Navbar sidebarOpen={sidebarOpen}  openSidebar={()=>this.openSidebar()}/>
     <MainRoute/>
         <Sidebar sidebarOpen={sidebarOpen} closeSidebar={()=>this.closeSidebar()}/>
         </div>
         </BrowserRouter>
    );
  }
}

export default App;

