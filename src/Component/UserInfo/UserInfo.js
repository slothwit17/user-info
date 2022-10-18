import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
        console.log(props.userInfo);
        const {name, email, phone, gender, age, isActive, company, salary, picture} = props.userInfo;
        const activeStatus = (status) =>{
            if(status === true){
                return <span className='blueDot'></span>
            }
            else{
                return <span className='redDot'></span>
            }
        }
    return (
        <div className='user'>
            <div className="userImg">
                <img src={picture} alt="" />
            </div>
            <div className="userInfo">
                <h1>{name}</h1>
                <h4>Age: {age}</h4>
                <h4>Gender: {gender}</h4>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Company: {company}</h3>
                <h3>Salary: ${salary}</h3>
                <button onClick={()=>props.addUserHandler(props.userInfo)}>Add
                    {
                        activeStatus(isActive)
                    }
                </button>
            </div>
        </div>
    );
};



export default UserInfo;