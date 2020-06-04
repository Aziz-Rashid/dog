import React, { Component } from 'react'
import Footer from './Footer'
import './form.css'
export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: "",
            Lastname: "",
            Email: "",
            phone: "",
            problem: "",
            namefirst: [],
        }
    }
        clickhandler = () => {
            let firstName = this.state.FirstName;
            let lastname = this.state.Lastname;
            let email = this.state.Email;
            let phone = this.state.phone;
            let problem = this.state.problem;
            let names = this.state.namefirst;
            let namess = this.state.name;
            names.push(firstName)
            names.push(lastname)
            names.push(email)
            names.push(phone)
            names.push(problem)
            this.setState({
                namefirst : names,
                // name : namess,
                namefirst: names,
                namefirst: names,
                namefirst: names,
                namefirst: names,
                FirstName : "",
                Lastname : "",
                Email : "",
                phone : "",
                problem : ""

            })
            console.log(names)
        }
        submit = (e) => {
            e.preventDefault()
        }
        name = (e) => {
            let namee = e.target.name
            this.setState({
                [namee]: e.target.value
            })
        }
        changehandlers = (e) =>{
            this.setState({
                FirstName: e.target.value
            })
        }
    render() {
        return (
            <div>
                <h2 className="h">Contact us</h2>
                <form onSubmit={this.submit}>
                        <div className="inp">
                            <p>FirstName :</p>
                            {/* <input type="text" name="Firstname" value={this.state.FirstName} onChange={this.name} placeholder="enter your name" */}
                            <input type="text"  placeholder="Enter you FristName ..." name="FirstName " value={this.state.FirstName} onChange={this.changehandlers} />
                        </div>
                        <div className="inp">
                            <p>last Name :</p>
                            <input type="text" name="Lastname" placeholder="Enter your LastName ..." value={this.state.Lastname} onChange={this.name} />
                        </div>
                        <div className="inp">
                            <p>Email :</p>
                            <input className="j" type="email" placeholder="Enter you email ..." name="Email" value={this.state.Email} onChange={this.name} />
                        </div>
                        <div className="inp">
                            <p>phone :</p>
                            <input type="text" placeholder="enter your phone no# ..." name="phone" value={this.state.phone} onChange={this.name} />
                        </div>
                        <div className="nw">
                            <p>Description</p>
                            <textarea placeholder="enter your discription here ..." name="problem" value={this.state.problem} onChange={this.name}></textarea>
                        </div>
                        <button onClick={this.clickhandler} className="btn">submit</button>
                </form>
                <div>
                <Footer />
                </div>
            </div>
        )
    }
}
