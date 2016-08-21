import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import CircularGauge from './components/CircularGauge';
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
    <CircularGauge width={200} height={200} value={10} />
    <CircularGauge width={200} height={200} value={25} />
    <CircularGauge width={200} height={200} value={50} />
    <CircularGauge width={200} height={200} value={75} />
    <CircularGauge width={200} height={200} value={100} />
    <br />
    <Notification message="You've got mail!" />
  </div>,
  app
)
