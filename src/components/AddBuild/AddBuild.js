import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import './AddBuild.css';
import userReducer from '../../redux/reducers/userReducer';




class AddBuild extends Component {

    state = {};

    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: event.target.value,
        })
    }

    submit = () => {
        console.log('state', this.state)
        console.log('current user: ', userReducer);
        let objectToSend = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image
        }
        this.props.dispatch({
            type: 'NEW_BUILD',
            payload: objectToSend
        })
        this.props.history.push('/Components');
    }

  render() {

    console.log('in addbuild forum');
    
    return (
      <>
        <div class="AddForum">
            <h1>Add Build</h1>
            <br>

            </br>
            <h3>Title</h3>
            <div class="ui input">
            <input onChange={(event) => this.handleChange(event, "title")} placeholder="Title" />
            </div>
            <br>

            </br>
            <h3>Description</h3>
            <div class="ui input">
            <input onChange={(event) => this.handleChange(event, "description")} placeholder="Description" />
            </div>
            <br>

            </br>
            <h3>Image</h3>
            <div class="ui input">
            <input onChange={(event) => this.handleChange(event, "image")} placeholder="Image URL" />
            </div>
            <br>

            </br>
            <div class="ui google plus animated button" tabindex="0" onClick={this.submit}>
            <div class="visible content">Next</div>
            <div class="hidden content">
            <i class="right arrow icon"></i>
            </div>
            </div>
        </div>
      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(putReduxStateOnProps)(AddBuild));