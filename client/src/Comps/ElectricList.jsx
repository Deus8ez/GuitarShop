import React, { Component } from "react"
import classes from '../App.module.scss'
import el1 from '../imgs/el1.jpg'
import el2 from '../imgs/el2.jpg'
import el3 from '../imgs/el3.jpg'
import el4 from '../imgs/el4.jpg'
import el5 from '../imgs/el5.jpg'
import el6 from '../imgs/el6.jpg'
class Electrics extends Component {
    state = {
        electricGuitarArray: [ 
            {
              id: 7,
              img: el1,
              guitarName: "Bibop 1",
              guitarCost: 100 + "$",
              quantity: 1
            },
            {
              id: 8,
              img: el2,
              guitarName: "Bibop 2",
              guitarCost: 90 + "$",
              quantity: 1
            },
            {
              id: 9,
              img: el3,
              guitarName: "Bibop 3",
              guitarCost: 110 + "$",
              quantity: 1
            },
            {
              id: 10,
              img: el4,
              guitarName: "Bibop 4",
              guitarCost: 70 + "$",
              quantity: 1
            },
            {
              id: 11,
              img: el5,
              guitarName: "Bibop 5",
              guitarCost: 85 + "$",
              quantity: 1
            },
            {
              id: 12,
              img: el6,
              guitarName: "Bibop 6",
              guitarCost: 50 + "$",
              quantity: 1
            }
          ]
    }
    render(){
    return <body className={classes.acousticGuitarPage}>
                    <h1 className={classes.acousticGuitarsHeading}>Acoustic guitars</h1>
                        <div className={classes.acousticGuitar}>
                            {this.state.electricGuitarArray.map(el => { 
                                return <div className={classes.acGuitarItemForSale}>
                                        <img src={el.img} className={classes.guitarImage}></img>
                                        <h2>{el.guitarName}</h2>
                                        <h3>{el.guitarCost}</h3>
                                        <button className={classes.guitarAddToCart}>Add to cart</button>
                                       </div>
                            })}
                        </div> 
                    </body>
    }
}

export default Electrics