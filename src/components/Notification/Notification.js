import React from 'react';
import './notification.scss'

class Notification extends React.Component {

  render() {
    return (
      <div className='notification'>
        {this.props.message}
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Notification;
