import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Cpus from '../CpuItem/CpuItem';
import './ClickCPU.css'

class ClickCPU extends Component {

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts= () => {
        this.props.dispatch({
          type: 'GET_CPU',
        })
    }
  
    render() {
      console.log('cpus', this.props.reduxState.componentsReducer.cpuReducer)
      
      return (
        <div class="center">

          <h2>Pick a CPU</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.cpuReducer.map((cpu) => {
                return(
                  <Cpus builds={this.props.reduxState.buildReducer} cpu={cpu} getProducts={this.getProducts}/>
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
  
  export default withRouter(connect(putReduxStateOnProps)(ClickCPU));
  {/* // const Builds = () => <Card.Group centered items={BuildList} /> */}