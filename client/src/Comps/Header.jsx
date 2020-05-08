import React from "react"
import { Link } from 'react-router-dom' 
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import CartDropDown from './Cart'
import CartIcon from './CartIcon'
import { toggleSignInPageHidden } from '../redux/sign-in-page/actions'

const Header = (props) => {

    return <header className={classes.mainheader}>
                <div>
                    <p className={classes.brand}>
                        GuitarShop
                    </p>
                </div><nav className={classes.mainnav}>
                    <ul className={classes.navitems}>
                        <li className={classes.navitem}>
                            User nickname
                        </li>
                        <li className={classes.navitem}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className={`${classes.navitem} ${classes.signin}`}>
                            {<button onClick={props.toggleSignInPageHidden}>Sign in</button>} 
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
    toggleSignInPageHidden: () => dispatch(toggleSignInPageHidden()),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
