import React from 'react';
import './SelectedUser.css'

const SelectedUser = (props) => {
    const {name, email, phone, company, salary, picture} = props.userData
    return (
        <div>
            <div className="selectedUserData">
                <div className="selectedUserInfo">
                    <h2>{name}</h2>
                    <h3>Email: {email}</h3>
                    <h3>Phone:{phone}</h3>
                    <h3>Company: {company}</h3>
                    <h3>Salary: ${salary}</h3>
                </div>
                <div className="selectedUserImg">
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedUser;