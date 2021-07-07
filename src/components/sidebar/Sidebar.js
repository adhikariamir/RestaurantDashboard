/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { Component } from 'react';
import './Sidebar.css';

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class Sidebar extends Component {

    render() {
        const { sidebarOpen, closeSidebar } = this.props;

        return (
            <div className={sidebarOpen ? "sidebar-responsive" : " "} id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                        <img src={logo} width={30} alt="logo" />
                        <h1 > AptCluster </h1>
                    </div>
                    <i className="fa fa-times"
                        id="sidebarIcon"
                        onClick={() => closeSidebar()} >
                    </i>
                </div>

                <div className=" sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className='fa fa-home'></i>
                        <Link to="/">Dashboard</Link>
                    </div>


                    <div className="sidebar__link">
                        <i className='fa fa-user-secret'></i>
                        <Link to="/menu">Menu</ Link>
                    </div>

                    <div className="sidebar__link">
                        <i className='fa fa-building-o'></i>
                        <Link to="/sales">Sales</ Link>
                    </div>
                    <div className="sidebar__link">
                        <i className='fa fa-shopping-cart'></i>
                        <Link to="/purchase">Purchase</ Link>
                    </div>
                    <div className="sidebar__link">
                        <i className='fa fa-archive'></i>
                        <a href="#">Table Management</a>
                    </div>




                    <div className="sidebar__link">
                        <i className='fa fa-power-off'></i>
                        <a href="#">Logout</a>
                    </div>


                </div>









            </div>
        );
    }
}

export default Sidebar;
