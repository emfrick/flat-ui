import React from 'react';
import * as d3 from "d3";
import './circulargauge.scss';

class CircularGauge extends React.Component {

  percentToDegrees(percent) {
    var p = percent / 100;
    return (p * 180) - 90;
  }

  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  render() {

    console.log(this.props);

    // #46237A

    var degrees = this.percentToDegrees(this.props.value);
    var radians = this.degreesToRadians(degrees);

    console.log("Degrees: " + degrees);
    console.log("Radians:" + radians);

    var svg = d3.select("body")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height)
      .append("g")
      .attr("transform", "translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")");

    var arc1 = d3.arc()
      .innerRadius( (this.props.width / 2) * 0.7)
      .outerRadius(this.props.width / 2)
      .padAngle(0.02)
      .startAngle(- (Math.PI / 2))
      .endAngle(radians);

    var arc2 = d3.arc()
      .innerRadius( (this.props.width / 2) * 0.7)
      .outerRadius(this.props.width / 2)
      .padAngle(0.02)
      .startAngle(radians)
      .endAngle(Math.PI / 2);

    svg.append("path")
      .attr("class", "arc chart-filled")
      .attr("d", arc1);

    svg.append("path")
      .attr("class", "arc chart-empty")
      .attr("d", arc2);

    svg.append("text")
      .attr("transform", "translate(-30, -5)")
      .text(this.props.value + "%");

    return (
      <div></div>
    );
  }
}

export default CircularGauge;
