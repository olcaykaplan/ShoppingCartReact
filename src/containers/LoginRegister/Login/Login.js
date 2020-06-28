import React, { Component } from 'react';
import axios from 'axios';
import classes from  './Login.module.css';
export default class Login extends Component {
   state = {
      email:"",
      password:"",
   }

   handleChange (event){
      this.setState({
         [event.target.name] : event.target.value
      });
   }

   async handleSubmit(event){
      event.preventDefault();
      let check = await axios.get('https://shopping-a0c7f.firebaseio.com/users.json').then(res => {
         const users = res.data;
           return Object.keys(users).map(u => {
            if(users[u]['email'] === this.state.email &&  users[u]['password'] === this.state.password)
            {return true;}
           }).find(i => i === true);  
   })

}
   // handleSubmit(event){}
   render() {
      return (
         <div style={{textAlign:"center", justifyContent:"center", alignItems: "center" }}>
            <form className={classes.Form}  onSubmit={(e) => this.handleSubmit(e)}>
            <h1 className={classes.Title}>Login</h1>
            <hr/>
      <label htmlFor="email">Email</label>
         <input
            type="email"
            name="email"
            value={this.state.email}
            onChange = { (e) => this.handleChange(e)}
            required
            tabIndex='1'
         />
         <br/>
         <label htmlFor="password">Password</label>
         <input
            type="password"
            name="password"
            value={this.state.password}
            onChange = { (e) => this.handleChange(e)}
            required
            tabIndex='2'
         />
         <button type="submit" tabIndex='3'>Login</button>
         
     </form>
         </div>
      )
   }
}

