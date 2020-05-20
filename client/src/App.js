import React, { Component } from 'react'
import Header from "./Comps/Header"
import SigningPage from "./Comps/SigningPage"
import Acoustics from "./Comps/AcousticList"
import Electrics from './Comps/ElectricList'
import Warning from './Comps/Warning'
import { BrowserRouter, Route} from "react-router-dom"
import HomePage from './Comps/HomePage'
import { connect } from 'react-redux'
import CheckOutPage from './Comps/CheckOutPage'


class App extends Component {
  render(){
    console.log(this.props.guitarsToBeSold)
    return (
      <BrowserRouter>
        <div>
            <Header/>
            <Route path="/" exact component={HomePage}/>
            <Route path="/acousticguitars" exact component={Acoustics}/>
            <Route path="/electricguitars" exact component={Electrics}/>
            <Route path="/checkout" exact component={CheckOutPage}/>
            <Route path="/signinwarning" exact component={Warning}/>
            {this.props.signinpage.hiddenPage ? null : <SigningPage/>}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}


export default connect(mapStateToProps)(App);
