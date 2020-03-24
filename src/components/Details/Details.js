import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react'
import './Details.css'



class Details extends Component {

  // componentDidMount() {
  //   this.getBuild();
  // }

  // getBuild= () => {
  //   this.props.dispatch({
  //     type: 'GET_BUILD',
  //   })
  //   console.log('getBuilds Fired');
  //   console.log('state:', this.props.reduxState.buildReducer)
  // }

  handleClick = () => {
    console.log('CLICKED ITEM');
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
                    <br>
                    </br>
                    <div class="ui one cards">
                    <Card class="ui fluid card" onClick={this.handleClick}>
                      <Image src={build.cpu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>CPU</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.cpu_title}</Card.Header>
                      <Card.Description>
                        {build.cpu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              
                      </Card.Content>
                    </Card>
                    <Card class="ui fluid card" onClick={this.handleClick}>
                      <Image src={build.gpu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Graphics Card</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.gpu_title}</Card.Header>
                      <Card.Description>
                        {build.gpu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              
                      </Card.Content>
                    </Card>
                    <Card class="ui fluid card" onClick={this.handleClick}>
                      <Image src={build.psu_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Power Supply</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.psu_title}</Card.Header>
                      <Card.Description>
                        {build.psu_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              
                      </Card.Content>
                    </Card>
                    <Card class="ui fluid card" onClick={this.handleClick}>
                      <Image src={build.mobo_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>Mother Board</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.mobo_title}</Card.Header>
                      <Card.Description>
                        {build.mobo_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              
                      </Card.Content>
                    </Card>
                    <Card class="ui fluid card" onClick={this.handleClick}>
                      <Image src={build.ram_image} width="300px" height="100px" wrapped ui={false}/>
                      <Card.Header>RAM</Card.Header>
                    <Card.Content>
                      <Card.Header>{build.ram_title}</Card.Header>
                      <Card.Description>
                        {build.ram_description}
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              
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