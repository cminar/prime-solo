import React from 'react';
import {Component} from 'react';

import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'
import InspItem from '../InspItem/InspItem';



class Inspiration extends Component {

  componentDidMount() {
    this.getBuilds();
  }

  getBuilds= () => {
    this.props.dispatch({
      type: 'GET_INSP',
    })
  }
  
    render() {
  
      console.log('testing in insp', this.props.reduxState.inspReducer);
      
      return (
        <>
          <h1 class="center">Get Inspired</h1>
          <div class="ui grid">
          {this.props.reduxState.inspReducer.map((pic) => {
            console.log('pic',pic)
              return(
                <InspItem pic={pic}/>
              );
            })}
          </div>
        </>
      );
    }
  }
  
  
  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(Inspiration);