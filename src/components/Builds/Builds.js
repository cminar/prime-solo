import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import './Builds.css'




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
      <div class="builds">
        <h1>My Builds</h1>
        <div class="ui google plus animated button" tabindex="0" onClick={this.newBuild}>
        <div class="visible content">Add New Build</div>
        <div class="hidden content">
        <i class="plus icon"></i>
        </div>
        </div>
        <h1>

        

        </h1>
        <div class="ui centered six cards" >
            {this.props.reduxState.buildReducer.map((build) => {
              return(
                <Build_Item build={build} buildDescription={build.description} buildName={build.title} buildImage={build.image} id={build.id} getBuilds={this.getBuilds}/>
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

export default withRouter(connect(putReduxStateOnProps)(Builds));
// const Builds = () => <Card.Group centered items={BuildList} />