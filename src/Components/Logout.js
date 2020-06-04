import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './logout.css'
// import './Logout.css'
export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <div className="nn">
                <h2>you have been logout</h2>
              <button> <Link className="k"  to="/">LogIn Again</Link> </button>
              </div>
            </div>
        )
    }
}