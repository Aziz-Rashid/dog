import React from 'react'
import './breed.css'
import dog1 from './dog_1.jpg'
import dog2 from './dog_2.jpg'
import dog3 from './dog_3.jpg'
import dog4 from './dog_4.jpg'
import dog5 from './dog_5.jpg'
import dog6 from './dog_6.jpg'
import Blog from './Blog'
export default function Breed() {
    return (
        <div className="hello">
            <h2>Dog breed collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
                necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
            </p>
            <div className="fle">
                <div>
                    <img src={dog1} />
                    <h3>Germen shaferd</h3>
                </div>
                <div>
                    <img src={dog2} />
                    <h3>lebrador</h3>
                </div>
                <div>
                    <img src={dog3} />
                    <h3>bull dog</h3>
                </div>
            </div>
            <div className="fle">
                <div>
                    <img src={dog4} />
                    <h3>rotweiler</h3>
                </div>
                <div>
                    <img src={dog5} />
                    <h3>beagle</h3>
                </div>
                <div>
                    <img src={dog6} />
                    <h3>golden retriever</h3>
                </div>
            </div>
            <Blog />
        </div>
    )
}
