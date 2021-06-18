import React, { Component } from 'react';
import Style from './../styles';
const Customers = (props) => {
    const { allusers } = props;

    const renderUser = (allusers, index) => {
        return (
            <tr key={index}>
                <td>{allusers.firstname} {allusers.lastname} </td>
                <td>{allusers.emailid}</td>
                <td>{allusers.accountno}</td>
                <td>₹ {allusers.balance}</td>
                <td><button onClick={() => props.handleCustPay(allusers)} key={allusers.id} type="button" className="btn btn-primary pl-5 pr-5">PAY</button></td>
            </tr>
        )
    }
    return (
        <div>
            <table className="table table-sm" style={Style.table}>
                <thead>
                    <tr className="table-active">
                        <th style={{ color: "white" }} >Name</th>
                        <th style={{ color: "white" }} >Email id</th>
                        <th style={{ color: "white" }} >Accountno</th>
                        <th style={{ color: "white" }} >Balance</th>
                        <th style={{ color: "white" }} >Payment</th>
                    </tr>
                </thead>
                <tbody className="table-info">
                    {allusers.map(renderUser)}
                </tbody>

            </table>
            <button onClick={() => props.handleStatus("Dashboard")} key={allusers.id} type="button" className="btn btn-primary pl-5 pr-5" style={{ marginLeft: "10%", position: "absolute", top: "5%" }}>Prev</button>
            <button onClick={() => props.handleLogout()} key={allusers.id} type="button" className="btn btn-primary pl-5 pr-5" style={{ marginLeft: "80%", position: "absolute", top: "5%" }}>Logout</button>
        </div>
    );
}
export default Customers;