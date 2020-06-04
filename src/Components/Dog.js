import React from 'react'
import './dog.css'
import Do from './dog_1.jpg'
import Dogss from './Do'
export default function Dog() {
    return (
        <div>
            <div className="dog-detail">
                <div className="dog-pic">
                    <img src={Do} />
                </div>

                <div className="dog-text">
                    <h1 id="hello">It's a Dog Life</h1>
                    <p className="p">Curious story of Dogs</p>
                    <div className="wou">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.A small river named Duden flows by their place and supplies
                            it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
                            sentences fly into your mouth.Even the all-powerful Pointing has no control about the blind texts
                            it is an almost unorthographic life One day however a small line of blind text by the name of Lorem
                            Ipsum decided to leave for the far World of Grammar.
                </p>
                        <div className="ahs">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean. A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentencesfly into your mouth.
                </p>
                        </div>
                    </div>
                </div>
            </div>
            <Dogss />
        </div>
    )
}
