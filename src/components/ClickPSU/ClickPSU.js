import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Psus from '../PsuItem/PsuItem';
import './ClickPSU.css'

class ClickPSU extends Component {

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts= () => {
        this.props.dispatch({
          type: 'GET_PSU',
        })
    }
  
    render() {

      
      return (
        <div class="center">

          <h2>Pick a Power Supply</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.psuReducer.map((psu) => {
                return(
                  <Psus builds={this.props.reduxState.buildReducer} psu={psu} getProducts={this.getProducts}/>
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
  
  export default withRouter(connect(putReduxStateOnProps)(ClickPSU));
  {/* // const Builds = () => <Card.Group centered items={BuildList} /> */}