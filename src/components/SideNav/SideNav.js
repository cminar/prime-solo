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
        <h3>sidenav</h3>
    )}
  }
  
  export default connect()(SideNavMenu);
