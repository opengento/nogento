import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavigationMenu.scss";

class NavigationMenu extends Component {
  render() {
    return <ul className="navigation-meny">{this.props.children}</ul>;
  }
}

NavigationMenu.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavigationMenu;
