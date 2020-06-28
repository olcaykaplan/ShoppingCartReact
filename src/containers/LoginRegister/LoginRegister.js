import React, { Component, useEffect } from 'react'
import {Route, Link ,Switch} from 'react-router-dom';
import Auxed from '../../hoc/Auxed';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import classes from './LoginRegister.module.css';


export default class LoginRegister extends Component {
state = {
    page : '',
}
    componentWillMount(){
     console.log('1',this.props.page);
        this.props.history.push('/'+this.props.page);
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('2',this.props.page);
        if ( nextProps.page !== this.props.page) {
            this.props.history.push('/'+nextProps.page);
            //  this.setState({page: this.props.page})
        }
      }
    componentDidUpdate(prevProps, prevState){
        console.log('3',this.props.page);
        if(prevProps.page !== this.props.page){
        console.log("component did update",this.state.page);
        //this.props.history.push('/'+this.state.page);
        this.setState({page: this.props.page})
    }
    }
    
    render() {
    
        return (
            
            <div className={classes.Content}>
            <div className={classes.Switches}>
                <Link to='/login'><button >Login</button></Link>
                <Link to='/signup'><button >Sign up</button></Link>
            </div>
                <Switch>
                    <Route 
                    path='/login'
                    component={Login}></Route>
                    <Route 
                    path='/signup'
                    component={SignUp}></Route>
                </Switch>
                </div>
        )
    }
}

