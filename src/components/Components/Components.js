import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class Components extends Component {

    componentDidMount() {
      this.getProducts();
    }
  
    getProducts= () => {
      this.props.dispatch({
        type: 'GET_PRODUCTS',
      })
      console.log('getProducts Fired');
    }
  
    // handleClick =()=>{
    //   swal("Great Pizza Picks!", "Please sign in before checkout");
    //   this.props.history.push('/signIn')
    // } 
  
    render() {
      
  
      console.log('testing in componentsList', this.props.reduxState.buildReducer);
      
      return (
        <div class="builds">
          <h1>Components</h1>
          <h1>
  
  
  
  
          </h1>
          <div class="ui centered six cards" >
              {this.props.reduxState.buildReducer.map((build) => {
                return(
                  <Build_Item buildDescription={build.description} buildName={build.title} buildImage={build.image} id={build.id} getBuilds={this.getBuilds}/>
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