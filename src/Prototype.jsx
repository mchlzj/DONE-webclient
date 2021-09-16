import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WfSchema from './WfSchema';
import NewWf from './NewWf';

function Prototype() {

    return (
        <div>
            <Router>   
                <a href="/newWfSchema">New Schema</a>   
                <a href="/newWf">New Workflow</a>
                <Switch>
                    <Route path="/newWfSchema" render={() => <WfSchema />}/>
                    <Route path="/newWf" render={() => <NewWf />}/>
                </Switch> 
            </Router>   
        </div>
    )
}

export default Prototype
