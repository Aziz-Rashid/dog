import React from 'react'
import './new.css'
import Log from './slider-2.jpg'
import Log1 from './slider-1.jpg'
import Footer from './Footer'
export default function New() {
    return (
        <div>
            <div className="miss-logo">
                <div className="im">
                    <img src={Log} />
                </div>
                <div className="mission">
                    <h2>How To Train Your Dog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                    </p>
                    <button>continue reading</button>
                </div>
            </div>
            <div>
                <div className="fl">

                    <div class="mission">
                        <h2>Find The Right Food For Your Dogs</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero,
                            omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                        </p>
                        <button>learn more</button>
                    </div>
                    <div className="image">
                        <img src={Log1} />
                    </div>
                </div>

            </div>
            <div className="miss-logo">
                <div className="im">
                    <img src={Log} />
                </div>
                <div className="mission">
                    <h2>Dog's Affections To The Owner</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                    </p>
                    <button>continue reading</button>
                </div>
            </div>
            <div>
                <div className="fl">

                    <div class="mission">
                        <h2>chose the right dog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero,
                            omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                        </p>
                        <button>learn more</button>
                    </div>
                    <div className="image">
                        <img src={Log1} />
                    </div>
                </div>
                

            </div>
            <Footer />
        </div>
    )
}