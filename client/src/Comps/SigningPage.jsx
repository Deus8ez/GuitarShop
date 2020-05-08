import React, { Component } from "react"
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import { setCurrentUser } from '../redux/user/user.actions'
import { toggleSignInPageHidden } from '../redux/sign-in-page/actions'

class SigningPage extends Component {
    
    render() {

    return <div className={`${classes.signingpage} ${classes.backdrop}`}>
                
                    <article className={`${classes.signingpageitems} ${classes.signinpage}`}>
                        <h1>Sign in</h1>
                        <form className={classes.signinform} onSubmit={this.handleSubmit}>
                            <input 
                                name="signInEmail" 
                                type="email" 
                                value="value"
                                className={classes.signingpageitem} 
                                placeholder="email"
                                required>
                            </input>
                            <input 
                                name="signInPassword" 
                                type="password" 
                                value="value" 
                                className={classes.signingpageitem} 
                                placeholder="password"
                                required>
                            </input>
                            {/* <a href="/signup" className={`${classes.signingpageitem} ${classes.signup}`} >Sign up</a> */}
                            <input type="submit" value="Submit form" className={`${classes.signingpageitem} ${classes.signbtn}`}>
                            </input>
                            <input value="Sign in with Google" className={`${classes.signingpageitem} ${classes.signbtn}`}>
                            </input>
                        </form>
                    </article>
                    <article className={`${classes.signingpageitems} ${classes.signuppage}`}>
                        <h1 >Sign up</h1>
                        <form onSubmit={this.signUpsubmit}>
                            <input 
                                name="displayName" 
                                type="text" 
                                value="value" 
                                className={classes.signingpageitem} 
                                placeholder="Nickname"
                                required>
                            </input>
                            <input 
                                name="signUpEmail" 
                                type="email" 
                                value="value" 
                                className={classes.signingpageitem} 
                                placeholder="email"
                                required>
                            </input>
                            <input 
                                name="signUpPassword" 
                                type="password" 
                                value="value" 
                                className={classes.signingpageitem} 
                                placeholder="password"
                                required>
                            </input>
                            <input 
                                name="confirmSignUpPassword" 
                                type="password" 
                                value="value"
                                className={classes.signingpageitem} 
                                placeholder="confirm password"
                                required>
                            </input>
                            <input type="submit" value="Submit form" className={`${classes.signingpageitem} ${classes.signbtn}`}>
                                
                            </input>
                        </form>
                    </article>
            </div>
}}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  toggleSignInPageHidden: () => dispatch(toggleSignInPageHidden())
});

export default connect(null, mapDispatchToProps)(SigningPage)