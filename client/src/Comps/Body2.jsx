import React from "react"
import classes from '../App.module.scss'
import star from '../imgs/star.svg'
import cup from '../imgs/cup.svg'
import people from '../imgs/people.svg'

const Body2 = () => {
    return <section className={classes.footer}> 
    <h1>Why buy our instruments</h1>
    <ul className={classes.feature_list}>
        <li className={classes.feature}>
            <img src={star} className={classes.feature_img}></img>
            <p className={classes.feature_des}>We use best materials</p>
        </li>
        <li className={classes.feature}>
            <img src={cup} className={classes.feature_img}></img>
            <p className={classes.feature_des}>No. 1 shop on the market</p>
        </li>
        <li className={classes.feature}> 
            <img src={people} className={classes.feature_img}></img>
            <p className={classes.feature_des}>best masters</p>
        </li>
    </ul>      
</section>
}

export default Body2