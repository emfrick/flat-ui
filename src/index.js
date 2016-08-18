import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Notification from './components/Notification';

let app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Button className='btn-primary'>Primary</Button>
    <br />
    <Button className='btn-success'>Success</Button>
    <br />
    <Button className='btn-warning'>Warning</Button>
    <br />
    <Button className='btn-danger'>Danger</Button>
    <br />
    <Notification message="You've got mail!" />
  </div>,
  app
)
