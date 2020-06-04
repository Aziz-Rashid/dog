import React from 'react'
import './do.css'
import Logo1 from './person_2.jpg'
import Logo2 from './person_3.jpg'
import Logo3 from './person_4.jpg'
import Breed from './Breed'
export default function Dogss() {
    return (
        <div>
            <div className="tt">
            <h1>Every Dog Needs A Good Owner</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, 
                necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
            </p>
            </div>
            <div className="hus">
                <div>
                    <img src={Logo1} />
                    <h2>Mike rechardson</h2>
                </div>
                <div>
                    <img src={Logo2} />
                    <h2>charles white</h2>
                </div>
                <div>
                    <img src={Logo3} />
                    <h2>laura smith</h2>
                </div>
            </div>
            <Breed />
        </div>
        
    )
}
