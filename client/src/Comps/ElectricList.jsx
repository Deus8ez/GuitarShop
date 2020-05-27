import React, { Component } from "react"
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import {addGuitar} from '../redux/to-be-sold/action'
import {setElectricGuitars} from '../redux/dbGuitars/action'
import axios from 'axios'
import el1 from '../imgs/el1.jpg'
import el2 from '../imgs/el2.jpg'
import el3 from '../imgs/el3.jpg'
import el4 from '../imgs/el4.jpg'
import el5 from '../imgs/el5.jpg'
import el6 from '../imgs/el6.jpg'

class Electrics extends Component {

  state = {
    images: [
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
      ],
    electricGuitarList: []
  }
  
  componentDidMount = () => {
    axios.get('http://localhost:5000/elguitars')
      .then(res => this.props.setElectricGuitars(res.data))
      .catch(err => console.log(err))
  }

  addToCart = (e) => {
    this.props.addGuitar(this.props.dbGuitarList.electricGuitarArray.find(el => el.id == e.target.id))
  }

  render(){
    return <body className={classes.acousticGuitarPage}>
                    <h1 className={classes.acousticGuitarsHeading}>Electric guitars</h1>
                        <div className={classes.acousticGuitar}>
                            {this.props.dbGuitarList.electricGuitarArray.map(el => { 
                                return <div className={classes.acGuitarItemForSale}>
                                        <img src={this.state.images.find(img => img.id == el.id).img} className={classes.guitarImage}></img>
                                        <h2>{el.guitarName}</h2>
                                        <h3>{el.guitarCost}$</h3>
                                        <button onClick={this.addToCart} id={el.id} className={classes.guitarAddToCart}>Add to cart</button>
                                       </div>
                            })}
                        </div> 
                    </body>
    }
}

const mapStateToProps = (state) =>{
  return state
}

const mapDispatchToProps = (dispatch) =>({
  addGuitar: (guitarID)=>dispatch(addGuitar(guitarID)),
  setElectricGuitars: (guitarInfo)=>dispatch(setElectricGuitars(guitarInfo))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Electrics)
