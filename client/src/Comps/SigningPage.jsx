import React, { Component } from "react"
import classes from '../App.module.scss'
import { connect } from 'react-redux'
import { setCurrentUser } from '../redux/user/user.actions'
import { toggleSignInPageHidden } from '../redux/sign-in-page/actions'
import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken'

class SigningPage extends Component {
    state = {
        signInUsername: '',
        signInEmail: '',
        signInPassword: '',
        signUpUsername: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpConfirmPassword: ''     
    }

    handleInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        });

    }

    handleSubmitSignIn = (e) => {

        e.preventDefault();

        const url = 'http://localhost:5000/user/login';

        const user = {
            email: this.state.signInEmail, 
            password: this.state.signInPassword
        }

        axios.post(url, user).then((res) => {
            
            if(res.data.status == 'password failure'){
                alert('password is incorrect!')
            } else {
                alert('you have signed in!')
                
                const token = res.data.token
                const decodedUser = jwt.decode(token)

                localStorage.setItem('jwtToken', token)
                setAuthorizationToken(token)

                this.props.setCurrentUser(decodedUser.username)
                this.props.toggleSignInPageHidden()
            }
        }).catch((e) => {
            console.log(e)
            alert('you are not registered!')
        });

    }


    handleSubmitSignUp = (e) => {

        e.preventDefault();
        if (this.state.signUpPassword !== this.state.signUpConfirmPassword) {
            alert('passwords do not match!')
        } else {
            const url = 'http://localhost:5000/user/register';

            const user = {
                signUpUsername: this.state.signUpUsername,
                signUpEmail: this.state.signUpEmail, 
                signUpPassword: this.state.signUpPassword
            }
    
            axios.post(url, user).then((res) => {
                console.log(res)
            }).catch((e) => {
                console.log(e)
            });
            alert('sign up has been succesfull! Now sign in')
        }
    }

    render() {

    return <div className={`${classes.signingpage} ${classes.backdrop}`}>
                
                    <article className={`${classes.signingpageitems} ${classes.signinpage}`}>
                        <h1>Sign in</h1>
                        <form className={classes.signinform} onChange={this.handleInputChange} onSubmit={this.handleSubmitSignIn}>
                            <input 
                                name="signInEmail" 
                                type="email" 
                                value={this.state.signInEmail}
                                className={classes.signingpageitem} 
                                placeholder="email"
                                required>
                            </input>
                            <input 
                                name="signInPassword" 
                                type="password" 
                                value={this.state.signInPassword} 
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
                        <form onChange={this.handleInputChange} onSubmit={this.handleSubmitSignUp}>
                            <input 
                                name="signUpUsername" 
                                type="text" 
                                value={this.state.signUpUsername} 
                                className={classes.signingpageitem} 
                                placeholder="Nickname"
                                required>
                            </input>
                            <input 
                                name="signUpEmail" 
                                type="email" 
                                value={this.state.signUpEmail} 
                                className={classes.signingpageitem} 
                                placeholder="email"
                                required>
                            </input>
                            <input 
                                name="signUpPassword" 
                                type="password" 
                                value={this.state.signUpPassword} 
                                className={classes.signingpageitem} 
                                placeholder="password"
                                required>
                            </input>
                            <input 
                                name="signUpConfirmPassword" 
                                type="password" 
                                value={this.state.signUpConfirmPassword} 
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