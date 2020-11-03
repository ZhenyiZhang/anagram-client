import React from 'react';
import AnagramForm from '../AnagramsForm/AnagramForm';
import HowToUse from '../HowToUse/HowToUse';
import NavBar from '../NavBar/NavBar';
import TopTen from '../TopTen/TopTen'

import {
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => {
    return (
            <div className="AnagramInputs">
                <NavBar/>
                <Switch>
                    <Route path="/HowToUse" component={HowToUse}/>
                    <Route path="/TopTen" component={TopTen}/>
                    <Route path="/" component={AnagramForm}/>
                </Switch>
            </div>
    );
};

export default Routes;