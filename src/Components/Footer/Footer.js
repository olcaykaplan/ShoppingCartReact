import React from 'react';
import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
  
      <header>
        <ul className={classes.Socials}>
            <li><a href='/'><i class="fab fa-twitter-square fa-lg"></i></a></li>
            <li><a href='/'><i class="fab fa-facebook-square fa-lg"></i></a></li>
            <li><a href='/'><i class="fab fa-instagram fa-lg"></i></a></li>
        </ul>
        <ul className={classes.NavLinks}>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Shopping Cart</a></li>
            <li><a href='/'>Products</a></li>
        </ul>
    <h5>Made by Olcay KAPLAN</h5>
    </header>
    {/* <p>&copy;{Date(year)}</p> */}
    </div>
)

export default footer;