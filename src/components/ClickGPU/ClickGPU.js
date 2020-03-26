import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Gpus from '../GpuItem/GpuItem';
import './ClickGPU.css'

class ClickGPU extends Component {

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts= () => {
        this.props.dispatch({
          type: 'GET_GPU',
        })
    }
  
    render() {
      
      return (
        <div class="center">

          <h2>Pick a Graphics Card</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.gpuReducer.map((gpu) => {
                return(
                  <Gpus builds={this.props.reduxState.buildReducer} gpu={gpu} getProducts={this.getProducts}/>
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
  
  export default withRouter(connect(putReduxStateOnProps)(ClickGPU));
  {/* // const Builds = () => <Card.Group centered items={BuildList} /> */}