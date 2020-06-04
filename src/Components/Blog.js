import React from 'react'
import './blog.css'
import Blog1 from './blog_1.jpg'
import Blog2 from './blog_2.jpg'
import Blog3 from './blog_3.jpg'
import Footer from './Footer'
export default function Blog() {
    return (
        <div>
        <div>
            <div className="blog">
                <h2>Recent Blog Post</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus,
                    soluta sit quam minima expedita atque corrupti reiciendis.
            </h4>
            </div>
            <div className="rashid">
                <div className="uu">
                    <div className="ii">
                        <img id="neww" src={Blog1} />
                        <div>
                            <h4>FEB 26TH, 2018</h4>
                            <h3>How to Train Your Dog</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus ipsa earum nemo
                                consectetur cupiditate necessitatibus suscipit assumenda perspiciatis provident.
                        </h5>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="ii">
                            <img className="imga" src={Blog2} />
                            <div>
                                <h4>FEB 26TH, 2018</h4>
                                <h3>Find The Right Food For Your Dogs</h3>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ii">
                            <img src={Blog3} />
                            <div>
                                <h4>FEB 26TH, 2018</h4>
                                <h3>Find The Right Food For Your Dogs</h3>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
