import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './Containers/Home';
import Contain from './Containers/Contain';
import Quiz from './Containers/Quiz';
import Ask from './Containers/Ask';
import Review from './Containers/Review';
import ReviewRetrieve from './Containers/ReviewRetrieve';
import RingChoice from './Containers/RingChoice';

const Routes = () =>(
     <Switch>
        <Route exact path='/' component={Home} /> 
        <Redirect from="/home" to="/"/> 
        <Route exact path="/ring-choice" component={RingChoice} />
        {/* Quiz  */}
        <Route exact path='/quiz' component={Quiz} /> 
        {/* Ask  */}
        <Route exact path='/ask' component={Ask} />
        {/* Review */}
        <Route exact path='/review' component={Review} />  
        <Route path='/review/:id' component={ReviewRetrieve} />  
        {/* <Route exact path='/**' component={E404} /> */}
    </Switch>
)

export default Routes;