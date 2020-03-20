import React from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'



const BuildList = props => (
  <div>
      <h1>Get Inspired</h1>
  </div>
);
// const Builds = () => <Card.Group centered items={BuildList} />
export default connect()(BuildList);