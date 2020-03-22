import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';



class Details extends Component {
  // handleClick =()=>{
  //   swal("Great Pizza Picks!", "Please sign in before checkout");
  //   this.props.history.push('/signIn')
  // } 
//   state = {
//       build: {}
//   }
//   componentDidMount() {
//     this.getBuilds();
//   }

//   getBuild = () => {
//       this.props.dispatch({
//           type: 'SET_BUILD'
//       })
//   }

//   setBuild = () => {
//     console.log('singleReducer', this.props.reduxState.singleReducer)
//     let single = this.props.reduxState.singleReducer
//     this.setState({
//         build: single
//     })
//   }

  render() {
    console.log('in details');
    console.log('singleReducer',this.props.reduxState.singleReducer[0])
    
    return (
      <>
        <h1>Component</h1>
        <div className="builds">
            {/* <h2>Title: {this.props.reduxState.singleReducer}</h2> */}
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

export default withRouter(connect(putReduxStateOnProps)(Details));