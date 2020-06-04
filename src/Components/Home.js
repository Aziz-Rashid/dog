import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import './home.css';
import Dog  from './Dog'
export default class Home extends Component {
    constructor(props){
        super(props)
        let isLoggedIn = true;
        const token = localStorage.getItem('token')
        if(token === null){
            isLoggedIn = false
        }
        this.state = {
            isLoggedIn
        }
    }
    render() {
        if(this.state.isLoggedIn === false){
            return(<Redirect to='/' />)
        }
        return (
            <div>
            <div className="mid-heading">
                {/* <button ><Link  to="/Logout" >Logout </Link></button> */}
                <h1>We loves pets</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</h4>
                <button className="btn1">Getiing started</button>
                <button className="btn2">download</button>
                
            </div>
            <Dog />
            </div>
        )
    }
}
