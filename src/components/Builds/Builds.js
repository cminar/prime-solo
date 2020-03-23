import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';



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

  newBuild = () => {
    this.props.history.push('/AddBuild');
  }

  // handleClick =()=>{
  //   swal("Great Pizza Picks!", "Please sign in before checkout");
  //   this.props.history.push('/signIn')
  // } 

  render() {

    console.log('testing in Buildslist', this.props.reduxState.buildReducer);
    
    return (
      <>
        <h1>My Builds</h1> <button onClick={this.newBuild}>Add New</button>
        <div class="ui six cards">
            {this.props.reduxState.buildReducer.map((build) => {
              return(
                <Build_Item buildDescription={build.description} buildName={build.title} buildImage={build.image} id={build.id} getBuilds={this.getBuilds}/>
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

export default withRouter(connect(putReduxStateOnProps)(Builds));
// const Builds = () => <Card.Group centered items={BuildList} />