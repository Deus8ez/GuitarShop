import React from "react"
import classes from '../App.module.scss'

const Footer = () => {
    return <footer className={classes.main_footer}>
    <nav>
        <ul className={classes.links}>
            <li className={classes.link}>
                <a>Support</a>
            </li>
            <li className={classes.link}>
                <a>Terms of use</a>
            </li>
        </ul>
    </nav>
</footer>
}

export default Footer