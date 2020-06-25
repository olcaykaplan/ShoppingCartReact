import React, { Component } from 'react'

export default class Login extends Component {
   state = {
      email:"",
      password:"",
   }

   handleChange (event){
      this.setState({
         [event.target.name] : event.target.value
      })
   }

   handleSubmit (event){
    return event;
   }

   render() {
      return (
         <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
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
         <label for="password">Password</label>
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

