import React from 'react';
import './button.css'

class Button extends React.Component {

  render() {
    return <button className={this.props.className}>{this.props.children}</button>;
  }
}

export default Button;
