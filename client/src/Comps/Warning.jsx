import React from "react"
import classes from '../App.module.scss'

const Warning = () => {
    return <div className={classes.warning}>
    <h1>You have to be signed in to purchase a product. Please, sign in.</h1>
    </div>
}

export default Warning