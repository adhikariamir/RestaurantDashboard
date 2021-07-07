import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashBoard/Dashboard";
import Menu from '../components/menu/Menu';
import MenuList from "../components/menu/MenuList";
import Purchase from "../components/purchase/Purchase";
import Sales from "../components/sales/Sales";




 class MainRoute extends Component {
    render() {
      return (
        
        <Switch>
          <Route exact path="/menu" component={Menu}/>
          <Route  path="/menuList/:food/" component={MenuList}/>
          <Route  path="/purchase" component={Purchase}/>
          <Route  path="/sales" component={Sales}/>
          <Route  path="/" component={Dashboard}/>
         

     
   

          </Switch>
      
        );
      }
    }
    export default MainRoute;