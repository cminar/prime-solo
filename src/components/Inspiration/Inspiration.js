import React from 'react';
import {Component} from 'react';

import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'



class Inspiration extends Component {

    componentDidMount() {
        this.getInspiration();
      }
  
      
  
    // handleClick =()=>{
    //   swal("Great Pizza Picks!", "Please sign in before checkout");
    //   this.props.history.push('/signIn')
    // } 
  
    render() {
  
    //   console.log('testing in Buildslist', this.props.reduxState.buildReducer);
      
      return (
        <>
          <div>Get Inspired</div>
        </>
      );
    }
  }
  
  
  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(Inspiration);