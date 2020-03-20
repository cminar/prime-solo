import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Component} from 'react';
import { connect } from 'react-redux';


class Build_Item extends Component {


  // handleClick =()=>{
  //   swal("Great Pizza Picks!", "Please sign in before checkout");
  //   this.props.history.push('/signIn')
  // } 

  render() {
    console.log('props!!!!!!!:',this.props);
    
    return (
      <>
        <Card>
          <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbAGQ3huLA18%2Fmaxresdefault.jpg&f=1&nofb=1' wrapped ui={false} />
          <Card.Content>
            <Card.Header>RipTide</Card.Header>
              <Card.Meta>
                <span className='user'>Colin</span>
              </Card.Meta>
            <Card.Description>
              {this.props.buildName}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
            <Icon name='user' />
              Joined in 2019
            </a>
          </Card.Content>
        </Card>
      </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Build_Item);