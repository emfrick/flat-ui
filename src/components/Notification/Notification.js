import React from 'react';
import './notification.scss'

class Notification extends React.Component {

  constructor() {
    super();

    this.closeNotification = this.closeNotification.bind(this);
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
      message: this.props.message,
    })
  }

  componentDidMount() {
    if (this.state.open) {
      this.setAutoHideTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Received New Props");
  }

  setAutoHideTimer() {
    const autoHideDuration = (this.props.duration || 4) * 1000;


    if (autoHideDuration > 0) {
      setTimeout(() => {
        this.setState({ open: false });
      }, autoHideDuration)
    }
  }

  closeNotification() {
    console.log("Closing Notification");
    this.setState({ open: false });
  }

  render() {

    var styles = {
      bottom: this.state.open ? '10px' : '-60px',
      transition: "bottom 500ms ease-in-out"
    }

    return (
      <div className='notification' style={styles}>
        {this.state.message}
        <i className="fa fa-times" aria-hidden="true" onClick={this.closeNotification}></i>
      </div>
    );
  }
}

export default Notification;
