import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class InspItem extends Component {

  
  render() {
      console.log('pic',this.props.pic)
    return (
          <div class="four wide column"><Image src={this.props.pic.image} width="600px" wrapped ui={false}/></div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(putReduxStateOnProps)(InspItem));