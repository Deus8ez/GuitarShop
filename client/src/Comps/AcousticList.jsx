import React, { Component } from "react"
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import {addGuitar} from '../redux/to-be-sold/action'
import {setAcousticGuitars} from '../redux/dbGuitars/action'

import axios from 'axios'
import ac1 from '../imgs/ac1.jpg'
import ac2 from '../imgs/ac2.jpg'
import ac3 from '../imgs/ac3.jpg'
import ac4 from '../imgs/ac4.jpg'
import ac5 from '../imgs/ac5.jpg'
import ac6 from '../imgs/ac6.jpg'

class Acoustics extends Component {
  
  state = {
    images: [
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
      ],
    localAcousticGuitarList: []
  }

  componentWillMount = () => {
    axios.get('http://localhost:5000/acousticGuitars')
      .then(res => this.props.setAcousticGuitars(res.data))
      .catch(err => console.log(err))
  }

  addToCart = (e) => {
    this.props.addGuitar(this.props.dbGuitarList.acousticGuitarArray.find(el => el.id == e.target.id))
  }

  render() {
  return <body className={classes.acousticGuitarPage}>
                  <h1 className={classes.acousticGuitarsHeading}>Acoustic guitars</h1>
                      <div className={classes.acousticGuitar}>
                          {this.props.dbGuitarList.acousticGuitarArray.map(el => { 
                              return <div className={classes.acGuitarItemForSale}>
                                        <img src={this.state.images.find(img => img.id == el.id).img} className={classes.guitarImage}></img>
                                        <h2>{el.guitarName}</h2>
                                        <h3>{el.guitarCost}$</h3>
                                        <button onClick={this.addToCart} id={el.id} className={classes.guitarAddToCart}>Add to cart</button>
                                      </div>}
                          )}
                      </div> 
                    </body>
  }}

const mapStateToProps = (state) =>{
  return state
}

const mapDispatchToProps = (dispatch) =>({
  addGuitar: (guitarID)=>dispatch(addGuitar(guitarID)),
  setAcousticGuitars: (guitarInfo)=>dispatch(setAcousticGuitars(guitarInfo))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Acoustics)