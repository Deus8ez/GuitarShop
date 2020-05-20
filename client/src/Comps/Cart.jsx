import React from 'react'
import { Link } from 'react-router-dom' 
import classes from '../App.module.scss'
import {connect} from 'react-redux'
import { addGuitar, removeGuitar, removeOneGuitar} from '../redux/to-be-sold/action'
import ac1 from '../imgs/ac1.jpg'
import ac2 from '../imgs/ac2.jpg'
import ac3 from '../imgs/ac3.jpg'
import ac4 from '../imgs/ac4.jpg'
import ac5 from '../imgs/ac5.jpg'
import ac6 from '../imgs/ac6.jpg'
import el1 from '../imgs/el1.jpg'
import el2 from '../imgs/el2.jpg'
import el3 from '../imgs/el3.jpg'
import el4 from '../imgs/el4.jpg'
import el5 from '../imgs/el5.jpg'
import el6 from '../imgs/el6.jpg'

const CartDropDown = (props) => {

    const images = [
        {img: ac1,
            id: 1},   
        {img: ac2,
            id: 2},
        {img: ac3,
            id: 3},
        {img: ac4,
            id: 4},
        {img: ac5,
            id: 5},
        {img: ac6,
            id: 6},
        {img: el1,
            id: 7},   
        {img: el2,
            id: 8},
        {img: el3,
            id: 9},
        {img: el4,
            id: 10},
        {img: el5,
            id: 11},
        {img: el6,
            id: 12},    
        ];

    const addToCart = (e) => {
        props.addGuitar(props.acousticGuitarList[e.target.id - 1])
       
      }

    const removeGuitar = (e) => {
        props.removeGuitar(props.guitarsToBeSold.guitars.filter((el)=>(el.id == e.target.id))[0])
        
    }

    const removeOneGuitar = (e) => {
        props.removeOneGuitar(props.guitarsToBeSold.guitars.filter((el)=>(el.id == e.target.id))[0])
        
    }
    
    return <div className={classes.cartDropDown}>
        <div className={classes.cartItems}>
            {props.guitarsToBeSold.guitars.map(el => {
                return <div>
                            <img className={classes.CartDropDownImgs} src={images.find(img=> img.id == el.id).img}></img>
                            <h3 className={classes.CartDropDownItem}>{el.guitarCost}$ x </h3>
                            <h3 className={classes.CartDropDownItem}> {el.quantity}</h3>
                            <h3 className={classes.CartDropDownItem}>{el.guitarName}</h3>       
                            <button className={classes.CartDropDownBtn} onClick={removeGuitar} id={el.id} >Remove from cart</button>
                            <button className={classes.CartDropDownBtn} onClick={addToCart} id={el.id}>Add one</button>
                            <button className={classes.CartDropDownBtn} onClick={removeOneGuitar} id={el.id}>Remove one</button>     
                </div>
                }
            )}
        </div>
        <Link className={classes.checkoutLink} to={props.user.currentUser == null ? '/signinwarning' : '/checkout'}>Checkout</Link>
    </div>
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
    removeGuitar: (guitarDets) => dispatch(removeGuitar(guitarDets)),
    addGuitar: (guitarID)=>dispatch(addGuitar(guitarID)),
    removeOneGuitar: (guitarDets) => dispatch(removeOneGuitar(guitarDets)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown)