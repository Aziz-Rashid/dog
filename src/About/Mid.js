import React from 'react'
import './miss.css'
import Log from './slider-2.jpg'
import Log1 from './slider-1.jpg'
import Person from './person_2.jpg'
import Person2 from './person_3.jpg'
import Person3 from './person_4.jpg'
import Footer from './Footer'
export default function Mid() {
    return (
        <div>
            <div className="miss-logo">
                <div className="im">
                    <img src={Log} />
                </div>
                <div className="mission">
                    <h2>our mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero, 
                        omnis quae facilis! Voluptatibus minima autem, esse eius natus labore
                    </p>
                    <button>Learn more</button>
                </div>
            </div>
            <div>
                <div className="fl">
                   
                    <div class="mission">
                        <h2>company history</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis tempora inventore, aliquam ratione. Eum vero sapiente tempora eveniet perspiciatis libero,
                            omnis quae facilis! Voluptatibus minima autem, esse eius natus labore.
                        </p>
                        <button>learn more</button>
                    </div>
                    <div className="image">
                        <img src={Log1} />
                    </div>
                </div>
            </div>
            <div>
                <div className="team">
                    <h2>the dog team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, <br />soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
            </div>
            <div class="person">
                <div>
                    <img className="one" src={Person} />
                    <h2 className="j">Mike rechardson</h2>
                </div>
                <div>
                    <img className="one" src={Person2} />
                    <h2 className="j">charles white</h2>
                </div>
                <div>
                    <img className="one" src={Person3} />
                    <h2 className="j">laura smith</h2>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
