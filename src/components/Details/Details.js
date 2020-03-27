import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react'
import './Details.css'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';




class Details extends Component {

  handleClick = () => {
    console.log('CLICKED ITEM');
  }

  handleCPUClick = (one) => {
    this.props.history.push('/ClickCPU');
  }

  handleGPUClick = (one) => {
    this.props.history.push('/ClickGPU');
  }

  handlePSUClick = (one) => {
    this.props.history.push('/ClickPSU');
  }

  handleRAMClick = (one) => {
    this.props.history.push('/ClickRAM');
  }

  handleMOBOClick = (one) => {
    this.props.history.push('/ClickMOBO');
  }

  render() {
    console.log('in details');
    console.log('singleReducer',this.props.reduxState.singleReducer[0])
    
    
    return (
      <>
        <div>
            {this.props.reduxState.singleReducer.map((build) => {
              return(
                <>
                  <div class="title">
                    <h1>{build.title}</h1>
                    <Image src={build.image} width="400px" />
                    <h3>{build.description}</h3>
                    <br>
                    </br>
                    <div class="ui one cards">
                    <h1>CPU</h1>
                    <Card class="ui fluid card" onClick={() => this.handleCPUClick(this)}>
                      <Image src={build.cpu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>CPU</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.cpu_title}</Card.Header>
                      <Card.Description>
                        {build.cpu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <button class="ui google plus button" onClick={() => this.handleCPUClick(this)}>
                      <Icon name='pencil alternate'/>
                      Change Component
                      </button>
                      <h3>Price: ${build.cpu_price}.00</h3>
                      </Card.Content>
                    </Card>
                    <h1>Graphics Card</h1>
                    <Card class="ui fluid card" onClick={() => this.handleGPUClick(this)}>
                      <Image src={build.gpu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Graphics Card</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.gpu_title}</Card.Header>
                      <Card.Description>
                        {build.gpu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <button class="ui google plus button" onClick={() => this.handleGPUClick(this)}>
                      <Icon name='pencil alternate'/>
                      Change Component
                      </button>
                      <h3>Price: ${build.gpu_price}.00</h3>
                      </Card.Content>
                     
                    </Card> 
                    <h1>Power Supply</h1>
                    <Card class="ui fluid card" onClick={() => this.handlePSUClick(this)}>
                      <Image src={build.psu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Power Supply</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.psu_title}</Card.Header>
                      <Card.Description>
                        {build.psu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <button class="ui google plus button"  onClick={() => this.handlePSUClick(this)}>
                      <Icon name='pencil alternate'/>
                      Change Component
                      </button>
                      <h3>Price: ${build.psu_price}.00</h3>
                      </Card.Content>
                      
                    </Card>
                    <h1>MotherBoard</h1>
                    <Card class="ui fluid card" onClick={() => this.handleMOBOClick(this)}>
                      <Image src={build.mobo_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Mother Board</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.mobo_title}</Card.Header>
                      <Card.Description>
                        {build.mobo_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <button class="ui google plus button" onClick={() => this.handleMOBOClick(this)}>
                      <Icon name='pencil alternate'/>
                      Change Component
                      </button>
                      <h3>Price: ${build.mobo_price}.00</h3>
                      </Card.Content>
                      
                    </Card>
                    <h1>RAM</h1>
                    <Card class="ui fluid card" onClick={() => this.handleRAMClick(this)}>
                      <Image src={build.ram_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>RAM</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.ram_title}</Card.Header>
                      <Card.Description>
                        {build.ram_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <button class="ui google plus button" onClick={() => this.handleRAMClick(this)}>
                      <Icon name='pencil alternate'/>
                      Change Component
                      </button>
                      <h3>Price: ${build.ram_price}.00</h3>
                      </Card.Content>
                    </Card>
                    </div>
                  </div>
                </>
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

export default withRouter(connect(putReduxStateOnProps)(Details));