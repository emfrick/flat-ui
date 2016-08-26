import React from 'react';
import * as d3 from "d3";
import './circulargauge.scss';

class CircularGauge extends React.Component {

  componentDidMount() {
    console.log("CircularGauge.componentDidMount()", this._node);

    var degrees = this._percentToDegrees(this.props.value);
    var radians = this._degreesToRadians(degrees);

    var svg = d3.select(this._node)
                .append("svg")
                .attr("width", this.props.width)
                .attr("height", this.props.height)

    svg.append("g")
       .attr("transform", "translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")");

    this._redraw(radians);
  }

  componentDidUpdate() {
    console.log("CircularGauge.componentDidUpdate()", this._node);

    var degrees = this._percentToDegrees(this.props.value);
    var radians = this._degreesToRadians(degrees);

    this._redraw(radians);
  }

  render() {

    return (
      <div ref={ (c) => this._node = c }></div>
    );
  }

  _percentToDegrees(percent) {
    var p = percent / 100;
    return (p * 180) - 90;
  }

  _degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  _redraw(radians) {
    console.log("CircularGauge._redraw()", radians);

    d3.select(this._node).select("g").selectAll("path").remove();
    d3.select(this._node).select("g").selectAll("text").remove();

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

    d3.select(this._node).select("g").append("path")
      .attr("class", "arc chart-filled")
      .attr("d", arc1);

    d3.select(this._node).select("g").append("path")
      .attr("class", "arc chart-empty")
      .attr("d", arc2);

    d3.select(this._node).select("g").append("text")
      .attr("transform", "translate(-30, -5)")
      .text(this.props.value + "%");
  }

}

export default CircularGauge;
