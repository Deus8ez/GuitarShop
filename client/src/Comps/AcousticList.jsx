import React, { Component } from "react"
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import {addGuitar} from '../redux/to-be-sold/action'
class Acoustics extends Component {
    
  addToCart = (e) => {
    this.props.addGuitar(this.props.acousticGuitarList[e.target.id - 1])
  }

  render() {
  return <body className={classes.acousticGuitarPage}>
                  <h1 className={classes.acousticGuitarsHeading}>Acoustic guitars</h1>
                      <div className={classes.acousticGuitar}>
                          {this.props.acousticGuitarList.map(el => { 
                              return <div className={classes.acGuitarItemForSale}>
                                        <img src={el.img} className={classes.guitarImage}></img>
                                        <h2>{el.guitarName}</h2>
                                        <h3>{el.guitarCost}</h3>
                                        <button onClick={this.addToCart} id={el.id} className={classes.guitarAddToCart}>Add to cart</button>
                                      </div>
                          })}
                      </div> 
                    </body>
  }}

const mapStateToProps = (state) =>{
  return state
}

const mapDispatchToProps = (dispatch) =>({
  addGuitar: (guitarID)=>dispatch(addGuitar(guitarID))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Acoustics)