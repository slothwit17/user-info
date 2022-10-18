import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

const Header = (props) => {
    const userCount = props.count
    return (
        <div className='navber'>
            <nav>
                <div className="navLeft">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/selected">Selected Users</Link></li>
                    </ul>
                </div>
                <div className="navRight">
                    <h3><FontAwesomeIcon icon={faUser} />{userCount.length}</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;