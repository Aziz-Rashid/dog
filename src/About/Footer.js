import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div className="footerone">
                    <h5>About The Breed</h5>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur 
                    ex voluptates perspiciatis omnis unde minima expedita.
                    </h6>
                </div>
                <div className="footertwo">
                    <h5>contact info</h5>
                    <h3>address:</h3>
                    <h6>34 Street Name, City Name Here, United States</h6>
                    <h3>Telephone:</h3>
                    <h6>+1 242 4942 290</h6>
                    <h3>email:</h3>
                    <h6>info@yourdomain.com</h6>
                </div>
                <div className="footerthree">
                    <h5>Quick links</h5>
                    <h3>about</h3>
                    <h3>term of use</h3>
                    <h3>disclaimer</h3>
                    <h3>contact</h3>
                </div>
            </div>
        )
    }
}
