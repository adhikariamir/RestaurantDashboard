/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { Component } from 'react';
import "./Navbar.css";
import avatar from "../../assets/avatar.png";

class Navbar extends Component {
    render() {
        const {openSidebar}=this.props;
        return (
            <nav className="navbar">
                      <div className="nav_icon" onClick={() => openSidebar()}>
                          <i className=" fa fa-bars"></i>
                      </div>
                      {/* <div className="navbar__left">
                          <a href="#" >All</a>
                          <a href="#" >Most Ordered</a>
                          <a className="active_link" href="#" >Tea & coffee</a>
                      </div> */}
                      <div className="navbar__right">
                          {/* <a href="#">
                              <i className="fa fa-search"></i>
                          </a>
                          <a href="#">
                              <i className="fa fa-clock-o"></i>
                          </a> */}
                          <a href="#">
                              <img width="30" src={avatar} alt="avatar" />
                          </a>
            
            
                      </div>
                  </nav>
        );
    }
}

export default Navbar;
