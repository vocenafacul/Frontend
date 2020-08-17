import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUpStudent from './pages/Login/student/PageSignUp';
import SignUpTeacher from './pages/Login/teacher/PageSingUpTeacher';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


export default props => (
<Router>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login} />
        <Route path='/login/signup' exact component={SignUpStudent} />
        <Route path='/login/teachersingup' exact component={SignUpTeacher} />
        <Redirect to='/' from='*'/>
    </Switch>
</Router>
)
