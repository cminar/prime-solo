import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class CpuItem extends Component {


  handleClick = () => {
    console.log('clicked item');
  }

  handleDelete = (one) => {
    console.log('in delete item');
  }


  render() {
    
    return (
      <>
        <Card class="grey card" className="ui centered card" className="ui fluid card" onClick={this.handleClick}>
          <Image src={this.props.cpu.cpu_image} width="300px" height="100px" wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{this.props.cpu.cpu_title}</Card.Header>
            <Card.Description>
              {this.props.cpu.cpu_description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <button onClick={() => this.handleDelete(this)}>
            <Icon name='trash'/>
              Delete Build
            </button>
          </Card.Content>
        </Card>

      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(putReduxStateOnProps)(CpuItem));