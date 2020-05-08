import React from 'react'
import classes from '../App.module.scss'
import Cart from '../imgs/cart.png'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../redux/cart-store/actions'

const CartIcon = ({toggleCartHidden, guitars}) => (
    <div className={classes.cartIcon} onClick={toggleCartHidden}>
    <img className={classes.logo} src={Cart}></img>
    <figcaption>{guitars.length === 0 ? null : guitars.length}</figcaption>
    </div>
)

const mapStateToProps = ({guitarsToBeSold: {guitars}}) => ({
    guitars
    
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon)
