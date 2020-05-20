import React from "react"
import classes from '../App.module.scss'
import { Link } from 'react-router-dom'


const Body = (props) => {
    function alertU(){
        
        alert('ukuleles will be available soon')
    }

    return  <div className={classes.body}> 
        <div className={classes.guitaritems}>
            <div className={classes.details}>
                <h1>Acoustic guitars</h1>
                <button className={classes.get_details}><Link to='/acousticguitars'>Get details</Link></button>
            </div>
        </div>
        <div className={classes.guitaritems}>
            <div className={classes.details}>
                <h1>Electric guitars</h1>
                <button className={classes.get_details}><Link to='/electricguitars'>Get details</Link></button>
            </div>
        </div>
        <div className={classes.guitaritems}>
            <div className={classes.details}>
                <h1>Ukulele</h1>
                <button className={classes.get_details}><Link onClick={alertU}>Get details</Link></button>
            </div>
        </div>
        
    </div>
    
}

export default Body