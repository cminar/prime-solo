import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import './Components.css'
import Cpus from '../CpuItem/CpuItem';
import Gpus from '../GpuItem/GpuItem.js';
import Psus from '../PsuItem/PsuItem';
import Ram from '../RamItem/RamItem';
import Mobos from '../MoboItem/MoboItem';
class Components extends Component {

    componentDidMount() {
      this.getProducts();
    }
  
    getProducts= () => {
      this.props.dispatch({
        type: 'GET_CPU',
      })
      this.props.dispatch({
        type: 'GET_GPU',
      })
      this.props.dispatch({
        type: 'GET_PSU',
      })
      this.props.dispatch({
        type: 'GET_RAM',
      })
      this.props.dispatch({
        type: 'GET_MOBO',
      })
    }
  
    // handleClick =()=>{
    //   swal("Great Pizza Picks!", "Please sign in before checkout");
    //   this.props.history.push('/signIn')
    // } 
  
    render() {
      
  
      console.log('CPUs', this.props.reduxState.componentsReducer.cpuReducer);
      console.log('GPUs', this.props.reduxState.componentsReducer.gpuReducer);
      console.log('PSUs', this.props.reduxState.componentsReducer.psuReducer);
      console.log('RAMs', this.props.reduxState.componentsReducer.ramReducer);
      console.log('MOBOs', this.props.reduxState.componentsReducer.moboReducer);
      
      return (
        <div class="components">
          <h1>Components</h1>
          <h1>
  
  
  
  
          </h1>
          <h2>Pick a CPU</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.cpuReducer.map((cpu) => {
                return(
                  <Cpus builds={this.props.reduxState.buildReducer} cpu={cpu} getProducts={this.getProducts}/>
                );
            })}
          </div>
          <h2>Graphics Cards</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.gpuReducer.map((gpu) => {
                return(
                  <Gpus builds={this.props.reduxState.buildReducer} gpu={gpu} getProducts={this.getProducts}/>
                );
            })}
          </div>
          <h2>Power Supply</h2>
          <div class="ui centered six cards" >
           
              {this.props.reduxState.componentsReducer.psuReducer.map((psu) => {
                return(
                  <Psus builds={this.props.reduxState.buildReducer} psu={psu} getProducts={this.getProducts}/>
                );
            })}
          </div>
          <h2>RAM</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.ramReducer.map((ram) => {
                return(
                  <Ram builds={this.props.reduxState.buildReducer} ram={ram} getProducts={this.getProducts}/>
                );
            })}
          </div>
          <h2>Motherboards</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.moboReducer.map((mobo) => {
                return(
                  <Mobos builds={this.props.reduxState.buildReducer} mobo={mobo} getProducts={this.getProducts}/>
                );
            })}
          </div>
          <div>
            {/* <button className="nextButton" onClick={this.handleClick}>Next Page</button> */}
          </div>
        </div>
      );
    }
  }
  
  
  const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default withRouter(connect(putReduxStateOnProps)(Components));
  // const Builds = () => <Card.Group centered items={BuildList} />