import React from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/logo_465x320.png'

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Oder Now</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Location</a></li>
                                    <li><a href="#">Cart</a></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;