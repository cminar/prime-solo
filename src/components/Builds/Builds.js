import React from 'react';
import { connect } from 'react-redux';
import Build_Item from '../Build_Item/Build_Item';
import { Card } from 'semantic-ui-react'



const BuildList = props => (
  <div>
      <Build_Item />
  </div>
);
// const Builds = () => <Card.Group centered items={BuildList} />
export default connect()(BuildList);