import React from 'react'
import {Link} from 'react-router-dom'

import './nav.css'
export default function Nav() {
    return (
        <div  className="main-nav">
            <div className="nav-logo">
                <h3>BREED</h3>
            </div>
            <div className="nav-link">
            <Link className="link" to='/'>Login</Link>
            <Link className="link" to='/Home'>Home</Link>
            <Link className="link" to='/about'>About</Link>
            <Link className="link"  to='/'>BREED</Link>
            <Link className="link" to='/blogs'>BLOG</Link>
            <Link className="link" to='/Contact'>CONTACT</Link>
            <Link className="link" to='/Logout'>Logout</Link>
            </div>
        </div>
    )
}
