import React from 'react'
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import { addGuitar, removeGuitar, removeOneGuitar, removeOneGuitarPrice} from '../redux/to-be-sold/action'
import {togglePurchaseHidden} from '../redux/purchase/action'
import {Link} from 'react-router-dom'
import Purchase from './Purchase'

const CheckOutPage = (props) => {

  const addToCart = (e) => {
    props.addGuitar(props.acousticGuitarList[e.target.id - 1])
  }

  const removeGuitar = (e) => {
    props.removeGuitar(props.guitarsToBeSold.guitars.filter((el)=>(el.id == e.target.id))[0])
  }

  const removeOneGuitar = (e) => {
    props.removeOneGuitar(props.guitarsToBeSold.guitars.filter((el)=>(el.id == e.target.id))[0])
  }

  const removeOneGuitarPrice = (e) => {
    props.removeOneGuitarPrice(props.guitarsToBeSold.guitars.filter((el)=>(el.id == e.target.id))[0])
  }
  
  return <div className={classes.checkOutPage}>
         <table>
          <tr>
            <th>Guitar</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
            {props.guitarsToBeSold.guitars.map(el => {
              return <tr>
                        <td><img style={{height:100, width:100}} src={el.img} ></img></td>
                        <td>{el.guitarName}</td>
                        <td><p className={classes.more} onClick={addToCart} id={el.id}>more</p>
                              {el.quantity}
                            <p className={classes.less} onClick={(e) => {removeOneGuitarPrice(e); removeOneGuitar(e);}} id={el.id}>less</p></td>
                        <td>{el.guitarCost}</td>
                        <td><button className={classes.trashCan} onClick={removeGuitar} id={el.id} >&#128465;</button></td>
                    </tr>
            })}
          </table> 
    
    <h2>Total: {props.guitarsToBeSold.total}</h2>
    <div style={{marginBottom: 20, color: 'red'}}>Please use the following test credit card number for payment<br />
    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <Purchase price={props.guitarsToBeSold.total === null ? 0 : props.guitarsToBeSold.total}/>
    </div>
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
  removeGuitar: (guitarDets) => dispatch(removeGuitar(guitarDets)),
  addGuitar: (guitarID)=>dispatch(addGuitar(guitarID)),
  removeOneGuitar: (guitarDets) => dispatch(removeOneGuitar(guitarDets)),
  removeOneGuitarPrice: (guitarDets) => dispatch(removeOneGuitarPrice(guitarDets)),
  togglePurchaseHidden: () => dispatch(togglePurchaseHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage)