import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import './Components.css'
import Cpus from '../CpuItem/CpuItem';
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
          <div class="ui centered six cards" >
            <h2>CPU's</h2>
              {this.props.reduxState.componentsReducer.cpuReducer.map((cpu) => {
                return(
                  <Cpus cpu={cpu} getProducts={this.getProducts}/>
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