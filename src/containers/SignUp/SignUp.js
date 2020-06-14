import React, { Component } from 'react'
import classes from './SignUp.module.css';
import axios from 'axios';
export default class SignUp extends Component {
        state = {
                name:'',
                surname:'',
                email:"",
                password: '',
                password_confirmation: '',
                registrationErrors:'',
        }
        handleChange (event) {
                this.setState({[event.target.name] : event.target.value});
        }
        handleSubmit (event) {
               axios.post('https://shopping-a0c7f.firebaseio.com/users.json', {
                       name: this.state.name,
                       surname: this.state.surname,
                       email : this.state.email,
                       password : this.state.password
               });
                event.preventDefault();
                //before register check the mail is exist in db,
                //if it exist, warm the user on the page
                //if it not exist and register is success, then go to login page
                
        }
        render() {
                return (
                   // put here two button here login and signup, user can swithc the page what use click
                    <div style={{textAlign:"center", justifyContent:"center", alignItems: "center" }}>
                       <form className={classes.Form} onSubmit={(e) => this.handleSubmit(e)}>
                       <h1> </h1>
                       <div className={classes.NameSurname}>
                                <input 
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={this.state.name}
                                onChange = { (e) => this.handleChange(e)}
                                required
                                tabIndex='1'
                                
                                />
                                <input 
                                type='text'
                                name='surname'
                                placeholder='Surname'
                                value={this.state.surname}
                                onChange = { (e) => this.handleChange(e)}
                                required
                                tabIndex='2'
                                />
                        </div>                                
                                <input 
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={this.state.email}
                                onChange = { (e) => this.handleChange(e)}
                                required
                                tabIndex='3'
                                />
                                <input 
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange = { (e) => this.handleChange(e)}
                                required
                                tabIndex='4'
                                />
                                <input 
                                type='password'
                                name='password_confirmation'
                                placeholder='Password Confirmation'
                                value={this.state.password_confirmation}
                                onChange = { (e) => this.handleChange(e)}
                                required
                                tabIndex='5'
                                />
                                <button type="submit" tabIndex='6'>Register</button>
                       </form>
                               </div>
                )
        }
}
