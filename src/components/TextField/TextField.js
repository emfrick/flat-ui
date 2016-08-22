import React from 'react';
import './textfield.css'

class TextField extends React.Component {

  render() {
    return (
      <input type="text" placeholder={this.props.placeholder} />
    );
  }
}

export default TextField;
