import React from 'react'
import { Link } from 'react-router-dom' 
import classes from '../App.module.scss'
import {connect} from 'react-redux'
import { addGuitar, removeGuitar, removeOneGuitar} from '../redux/to-be-sold/action'

const CartDropDown = (props) => {

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
                            <img className={classes.CartDropDownImgs} src={el.img}></img>
                            <h3 className={classes.CartDropDownItem}>{el.guitarCost} x </h3>
                            <h3 className={classes.CartDropDownItem}> {el.quantity}</h3>
                            <h3 className={classes.CartDropDownItem}>{el.guitarName}</h3>       
                            <button className={classes.CartDropDownBtn} onClick={removeGuitar} id={el.id} >Remove from cart</button>
                            <button className={classes.CartDropDownBtn} onClick={addToCart} id={el.id}>Add one</button>
                            <button className={classes.CartDropDownBtn} onClick={removeOneGuitar} id={el.id}>Remove one</button>     
                </div>
                }
            )}
        </div>
        <Link className={classes.checkoutLink} to='/checkout'>Checkout</Link>
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