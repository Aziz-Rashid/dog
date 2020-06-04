import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './login.css'
export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('token')
        let isLoggedIn = true
        if(token === null){
            isLoggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            isLoggedIn
        }
    }
    changehandler = (e) =>{
        this.setState({
            username : e.target.value,
        })
    }
    changehandlers = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    submits = (e) =>{
        e.preventDefault()
        const {username,password} = this.state
        if(username === "axixraxhid@gmail.com" && password === "rashid"){
            localStorage.setItem('token','idjalkdjaidjald;sak;dls00')
            this.setState({
                isLoggedIn: true
            })
        }else{
            this.setState({
                username: "",
                password: ""
            })   
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return (
                <Redirect to="/Home" />
            )
        }
        return (
            <div className="login">
                <h4>Login Form</h4>
                <form onSubmit={this.submits}>
                <input type="email" placeholder="Enter you email here" name="email" onChange={this.changehandler} value={this.state.username} />
                <br />
                <input type="password" placeholder="Enter you password here" name="password" onChange={this.changehandlers} value={this.state.password} /><br />
                <button type="submit">Login</button>
                </form>
            </div>
            
        )
    }
}
