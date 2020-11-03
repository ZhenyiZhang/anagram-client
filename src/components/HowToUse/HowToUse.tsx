import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import './HowToUse.css'

const HowToUse = () => {
    return (
        <Jumbotron className="HowToUse">
            <h1>Anagrams</h1>
            <p>
                This is a simple webapp to test if two words are anagrams.<br/>
                These words are anagrams: “wolf” and “flow”, “restful” and “fluster”, “knee” and “keen”. <br/>
                These words are not anagrams: “wolf” and “owl”, "grove" and groove", "grate" and "greater".
            </p>
                <Button variant="info" onClick={() => window.location.href='/'}>Try it out</Button>
        </Jumbotron>
    );
};

export default HowToUse;