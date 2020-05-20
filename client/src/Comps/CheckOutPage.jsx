import React from 'react'
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import { addGuitar, removeGuitar, removeOneGuitar, removeOneGuitarPrice} from '../redux/to-be-sold/action'
import {togglePurchaseHidden} from '../redux/purchase/action'
import {Link} from 'react-router-dom'
import Purchase from './Purchase'
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

const CheckOutPage = (props) => {

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
    props.addGuitar(props.guitarsToBeSold.guitars.find(el => el.id == e.target.id))
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
                        <td><img style={{height:100, width:100}} src={images.find(img => img.id == el.id).img} ></img></td>
                        <td>{el.guitarName}</td>
                        <td><p className={classes.more} onClick={addToCart} id={el.id}>more</p>
                              {el.quantity}
                            <p className={classes.less} onClick={(e) => {removeOneGuitarPrice(e); removeOneGuitar(e);}} id={el.id}>less</p></td>
                        <td>{el.guitarCost}$</td>
                        <td><button className={classes.trashCan} onClick={removeGuitar} id={el.id} >&#128465;</button></td>
                    </tr>
            })}
          </table> 
    
    <h2>Total: {props.guitarsToBeSold.total}$</h2>
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