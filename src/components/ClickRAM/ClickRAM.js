import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Ram from '../RamItem/RamItem';
import './ClickRAM.css'

class ClickRAM extends Component {

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts= () => {
        this.props.dispatch({
          type: 'GET_RAM',
        })
    }
  
    render() {
      console.log('ram', this.props.reduxState.componentsReducer.cpuReducer)
      
      return (
        <div class="center">

          <h2>Pick some RAM</h2>
          <div class="ui centered six cards" >
            
              {this.props.reduxState.componentsReducer.ramReducer.map((ram) => {
                return(
                  <Ram builds={this.props.reduxState.buildReducer} ram={ram} getProducts={this.getProducts}/>
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
  
  export default withRouter(connect(putReduxStateOnProps)(ClickRAM));
  {/* // const Builds = () => <Card.Group centered items={BuildList} /> */}