import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2'


class Build_Item extends Component {

  componentDidMount() {
    this.getProducts();
  }

  getProducts= () => {
    this.props.dispatch({
      type: 'GET_CPU',
    })
    this.props.dispatch({
      type: 'GET_GPU',
    })
    this.props.dispatch({
      type: 'GET_PSU',
    })
    this.props.dispatch({
      type: 'GET_RAM',
    })
    this.props.dispatch({
      type: 'GET_MOBO',
    })
  }

  

  
  // Deletes Build by ID
  handleDelete = (target) => {
    this.props.dispatch({
      type: 'DEL_BUILD',
      payload: target.props.id
      })
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your build has been deleted.',
          'success'
        )
      }
    console.log('target:',target);
    this.props.getBuilds()
    })
    
  }

  // Gets Build by ID then sends user to Details page of build
  handleClick = () => {
    this.props.dispatch({
      type: 'GET_BUILD',
      payload: this.props.id
    })
    this.props.history.push(`/Details/${this.props.id}`);
    console.log(this.props.id);
  }

  handlepopout = () => {
    console.log('for visuals only');
  }
  
  


  render() {
    let cpuPrice = 0;
    let gpuPrice = 0;
    let ramPrice = 0;
    let moboPrice = 0;
    let psuPrice = 0;
    let cpuTitle = '';
    let gpuTitle = '';
    let psuTitle = '';
    let moboTitle = '';
    let ramTitle = '';

    // Gets CPU price
    this.props.reduxState.componentsReducer.cpuReducer.map((cpu) => {
      if(cpu.id === this.props.build.cpu_id){
        cpuPrice = cpu.cpu_price;
        cpuTitle = cpu.cpu_title;
      }
    })

    // Gets GPU price
    this.props.reduxState.componentsReducer.gpuReducer.map((gpu) => {
      if(gpu.id === this.props.build.gpu_id){
        gpuPrice = gpu.gpu_price;
        gpuTitle = gpu.gpu_title;
      }
    })

    // Gets PSU price
    this.props.reduxState.componentsReducer.psuReducer.map((psu) => {
      if(psu.id === this.props.build.psu_id){
        psuPrice = psu.psu_price;
        psuTitle = psu.psu_title;
      }
    })

    // Gets Mobo price
    this.props.reduxState.componentsReducer.moboReducer.map((mobo) => {
      if(mobo.id === this.props.build.mobo_id){
        moboPrice = mobo.mobo_price;
        moboTitle = mobo.mobo_title;
      }
    })

    // Gets RAM price
    this.props.reduxState.componentsReducer.ramReducer.map((ram) => {
      if(ram.id === this.props.build.ram_id){
        ramPrice = ram.ram_price;
        ramTitle = ram.ram_title;
      }
    })


    let total = parseFloat(cpuPrice) + parseFloat(gpuPrice) + parseFloat(ramPrice) + parseFloat(moboPrice) + parseFloat(psuPrice);

    console.log('build', this.props.reduxState)
    return (
      <>
        <Card class="grey card" className="ui centered card" className="ui fluid card" onClick={this.handlepopout}>
          <Image src={this.props.buildImage} width="300px" height="100px" wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{this.props.buildName}</Card.Header>
              <Card.Meta>
                <span className='user'>{this.props.reduxState.user.username}</span>
              </Card.Meta>
            <Card.Description>
              <p>Description: {this.props.buildDescription}</p>
              <p>CPU: {cpuTitle}</p>
              <p>Graphics Card: {gpuTitle}</p>
              <p>Power Supply: {psuTitle}</p>
              <p>RAM: {ramTitle}</p>
              <p>MotherBoard: {moboTitle}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <button class="ui google plus button" onClick={() => this.handleDelete(this)}>
            <Icon name='trash'/>
              Delete Build
            </button>
            <button class="ui google plus button" onClick={() => this.handleClick(this)}>
            <Icon name='pencil alternate'/>
              Edit Build
            </button>
          </Card.Content>
          <h2>Total Price: ${total}.00</h2>
        </Card>

        

      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(putReduxStateOnProps)(Build_Item));