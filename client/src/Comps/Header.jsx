import React from "react"
import { Link } from 'react-router-dom' 
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import CartDropDown from './Cart'
import CartIcon from './CartIcon'
import { toggleSignInPageHidden } from '../redux/sign-in-page/actions'
import { logOut } from '../redux/user/user.actions'
import axios from 'axios'

const Header = (props) => {

    function loggingOut(){
        localStorage.removeItem('jwtToken')  
        props.logOut()
    }

    return <header className={classes.mainheader}>
                <div>
                    <p className={classes.brand}>
                        GuitarShop
                    </p>
                </div><nav className={classes.mainnav}>
                    <ul className={classes.navitems}>
                        <li className={classes.navitem}>
                            {props.user.currentUser}
                        </li>
                        <li className={classes.navitem}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className={`${classes.navitem} ${classes.signin}`}>
                            {props.user.currentUser === null ? <button onClick={props.toggleSignInPageHidden}>Sign in</button> : <button onClick={loggingOut}>Sign out</button>} 
                        </li>
                        <li className={classes.navitem}>
                        <CartIcon/>
                        </li>
                    </ul>
                </nav>
                {props.cart.hidden ? null : <CartDropDown/>}
            </header>
}

const mapStateToProps = (state) => (state)

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
    toggleSignInPageHidden: () => dispatch(toggleSignInPageHidden()),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
