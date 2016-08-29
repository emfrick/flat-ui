import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './components/TextField';
import Button from './components/Button';
import CircularGauge from './components/CircularGauge';
import Notification from './components/Notification';
import Dropdown from './components/Dropdown';
import './styles/base.scss';

let app = document.getElementById('app');

class Test extends React.Component {

  constructor() {
    super();

    this.state = {
      gauge: {
        value1: 40,
        value2: 20,
        value3: 60,
        value4: 90
      }
    }

    setInterval(() => {
      this.setState({
        gauge: {
          value1: (Math.ceil(Math.random() * 100)),
          value2: (Math.ceil(Math.random() * 100)),
          value3: (Math.ceil(Math.random() * 100)),
          value4: (Math.ceil(Math.random() * 100))
        }
      });

      console.log(this.state.gauge.value);
    }, 5000);
  }

  render() {
    return (
      <span>
        <CircularGauge width={200} height={200} value={this.state.gauge.value1} />
        <CircularGauge width={200} height={200} value={this.state.gauge.value2} />
        <CircularGauge width={200} height={200} value={this.state.gauge.value3} />
        <CircularGauge width={200} height={200} value={this.state.gauge.value4} />
      </span>
    )
  }
}

ReactDOM.render(
  <div>
    <TextField placeholder="Email" />
    <br />
    <TextField placeholder="First Name" />
    <br />
    <TextField placeholder="Last Name" />
    <br />
    <Button className='btn-primary'>Primary</Button>
    <br />
    <Button className='btn-success'>Success</Button>
    <br />
    <Button className='btn-warning'>Warning</Button>
    <br />
    <Button className='btn-danger'>Danger</Button>
    <br />
    <Test />
    <br />
    <p>
      Veniam magna consequat pariatur ullamco quis duis tempor ex anim in pariatur est. Labore sint elit elit et dolore proident proident dolore aliqua incididunt enim. Magna aliquip Lorem sit cupidatat anim velit velit esse. Qui velit amet ex ut labore adipisicing eiusmod non aliqua consequat quis cillum nisi. Consectetur sint in irure voluptate dolore dolor nisi ut ea aute. Amet anim pariatur consectetur anim do aute sit nisi cillum esse minim ipsum est velit.
      Deserunt incididunt labore et dolor fugiat mollit dolore officia ea excepteur. Qui ut irure consectetur proident occaecat tempor sunt anim ex proident nisi. Ut veniam anim eu non anim reprehenderit ea deserunt. Nulla nostrud aute dolor incididunt aute dolore consequat ex sint voluptate. Officia irure pariatur velit consectetur velit deserunt voluptate consectetur labore laborum non culpa minim. Sint qui aliqua consectetur aute labore Lorem excepteur esse incididunt sit esse eiusmod ipsum do reprehenderit eiusmod.
      Quis est laboris enim fugiat amet duis velit pariatur dolor. Exercitation occaecat ea id est enim anim enim nostrud. Fugiat dolore sit incididunt eiusmod fugiat ex minim est. Laborum aute culpa anim nostrud enim laborum consectetur labore sit cupidatat esse Lorem. Non sit nostrud consectetur ut adipisicing laborum quis irure veniam quis irure proident consequat.
      Est incididunt nulla elit eiusmod do dolore cupidatat eiusmod mollit labore ex do aliqua nulla dolor. Consequat ullamco voluptate amet occaecat cillum duis deserunt ex nostrud ad. Culpa irure ea mollit tempor non sint eiusmod dolor ex adipisicing sint. Consequat veniam cupidatat culpa do deserunt et nisi consequat occaecat nostrud elit occaecat. Ea voluptate consectetur fugiat occaecat aliqua in minim ipsum aliquip duis fugiat do velit culpa est. Qui tempor ad officia cupidatat Lorem adipisicing sint duis irure amet commodo est amet aliquip est aute.
    </p>
    <Notification message="A longer notification you received some email" open={true} duration={2} />
  </div>,
  app
)
