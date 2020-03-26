import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2'

class GpuItem extends Component {

    state={}

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

  handleClick = () => {
    console.log('clicked item');
  }
  //Map this on page load then do the alert ------not working idk try again
  handleAdd = (one) => {
    console.log('one',one)
    for(let i=0; i<one.props.builds.length; i++){
      console.log(this.state)
      this.setState({
        [`id${i}`]: one.props.builds[i].title
      })
    }
    if(this.state.id0){
        Swal.fire({
        title: 'Are you sure?',
        text: `Adding ${one.props.gpu.gpu_title}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Add it!',
        input: 'select',
        inputOptions: {
        [this.state.id0]: `${this.state.id0}`,
        [this.state.id1]: `${this.state.id1}`,
        [this.state.id2]: `${this.state.id2}`,
        [this.state.id3]: `${this.state.id3}`,
        [this.state.id4]: `${this.state.id4}`,
        [this.state.id5]: `${this.state.id5}`
    },
        }).then((result) => {
        if (result.value) {
            Swal.fire(
            'Added!',
            `Added to ${result.value}`,
            'success'
            )
            let objectToSend = {
                cpuid: one.props.gpu.id,
                buildname: result.value
            }
            this.props.dispatch({
                type: 'ADD_GPU',
                payload: objectToSend
            })
        }
        })
    }
  }


  render() {
    
    return (
      <>
        <Card class="grey card" className="ui centered card" className="ui fluid card" onClick={this.handleClick}>
          <Image src={this.props.gpu.gpu_image} width="300px" height="100px" wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{this.props.gpu.gpu_title}</Card.Header>
            <Card.Description>
              {this.props.gpu.gpu_description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <button class="ui google plus button" onClick={() => this.handleAdd(this)}>
            <Icon name='plus'/>
              Add To Build
            </button>
            <h3>Price: ${this.props.gpu.gpu_price}.00</h3>
          </Card.Content>
        </Card>

      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(putReduxStateOnProps)(GpuItem));