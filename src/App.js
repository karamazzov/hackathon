import Navigation from './Navigation';
import Home from './Home';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { connect } from 'react-redux';





const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {

  render() {

    return(

      <div>
        
        <Navigation appName={this.props.appName}/>
        <Home/>

      </div>

      );

  };

};

export default connect(mapStateToProps, () => ({}))(App);
