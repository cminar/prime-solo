import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Mobos from '../MoboItem/MoboItem';
import './ClickMOBO.css'

class ClickMOBO extends Component {

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts= () => {
        this.props.dispatch({
          type: 'GET_MOBO',
        })
    }
  
    render() {

      
      return (
        <div class="center">

          <h2>Pick a MotherBoard</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.moboReducer.map((mobo) => {
                return(
                  <Mobos builds={this.props.reduxState.buildReducer} mobo={mobo} getProducts={this.getProducts}/>
                );
            })}
          
        </div>
        </div>
      );
    }
  }
  
  
  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default withRouter(connect(putReduxStateOnProps)(ClickMOBO));
  {/* // const Builds = () => <Card.Group centered items={BuildList} /> */}