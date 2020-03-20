import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'



class Builds extends Component {

  componentDidMount() {
    this.getBuilds();
  }

  getBuilds= () => {
    this.props.dispatch({
      type: 'GET_BUILDS',
    })
    console.log('getBuilds Fired');
    console.log('state:', this.props.reduxState.buildReducer)
  }

  // handleClick =()=>{
  //   swal("Great Pizza Picks!", "Please sign in before checkout");
  //   this.props.history.push('/signIn')
  // } 

  render() {

    console.log('testing in Buildslist', this.props.reduxState.buildReducer);
    
    return (
      <>
        <div className="builds">
            {this.props.reduxState.buildReducer.map((build) => {
              return(
                <Build_Item buildName={build.title}/>
              );
            })}
        </div>
        <div>
          {/* <button className="nextButton" onClick={this.handleClick}>Next Page</button> */}
        </div>
      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Builds);
// const Builds = () => <Card.Group centered items={BuildList} />