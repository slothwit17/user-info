import React from 'react';
import './Selected.css'
import SelectedUser from './SelectedUser/SelectedUser';

const Selected = (props) => {
    console.log(props.userData);
    const selectedUser = props.userData;
    const salaryCount = selectedUser.reduce((sum, salary)=> sum + salary.salary,0)
    const defaultMassage = (userArray) => {
        if(userArray.length === 0){
            return (<h3>There is no selected users</h3>);
        }
        else{
            return (selectedUser.map(data => <SelectedUser userData = {data}></SelectedUser>));
        }
    }
    return (
        <div className='selectedUser'>
            <div className="selectedInfo">
                {
                   defaultMassage(selectedUser)
                }
            </div>
            <div className="userSalary">
            <h3>Total salary of selected users: </h3>
            <h2>${salaryCount}</h2>
            </div>
        </div>
    );
};

export default Selected;