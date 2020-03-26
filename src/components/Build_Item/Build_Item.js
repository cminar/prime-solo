import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Build_Item extends Component {

  handleDelete = (target) => {
    this.props.dispatch({
      type: 'DEL_BUILD',
      payload: target.props.id
    })
    console.log('target:',target);
    this.props.getBuilds()
  }

  handleEdit = (target) => {
    this.props.history.push(`/Details/${this.props.id}`);
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'GET_BUILD',
      payload: this.props.id
    })
    this.props.history.push(`/Details/${this.props.id}`);
    console.log(this.props.id);
  }


  render() {
    console.log('props!!!!!!!:',this.props);
    console.log('image: ', String(this.props.buildImage))
    
    return (
      <>
        <Card class="grey card" className="ui centered card" className="ui fluid card" onClick={this.handleClick}>
          <Image src={this.props.buildImage} width="300px" height="100px" wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{this.props.buildName}</Card.Header>
              <Card.Meta>
                <span className='user'>{this.props.reduxState.user.username}</span>
              </Card.Meta>
            <Card.Description>
              {this.props.buildDescription}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <button onClick={() => this.handleDelete(this)}>
            <Icon name='trash'/>
              Delete Build
            </button>
            <button onClick={() => this.handleEdit(this)}>
            <Icon name='pencil alternate'/>
              Build Details
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

export default withRouter(connect(putReduxStateOnProps)(Build_Item));