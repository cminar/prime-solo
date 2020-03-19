import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import React, {Component} from 'react';
import { connect } from 'react-redux';

class SideNavMenu extends Component {
    state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
      return (
        <Menu borderless vertical>
            <Menu.Item
            name='My Builds'
            active={activeItem === 'MyBuilds'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            name='Inpiration'
            active={activeItem === 'Inspiration'}
            onClick={this.handleItemClick}
            />
        </Menu>
    )}
  }
  
  export default connect()(SideNavMenu);
