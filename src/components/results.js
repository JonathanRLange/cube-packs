import React, { Component } from "react"

class Results extends Component {
  state = {}
  render() {
    return (
      <div>
        <p>{this.props.simulationNumber} / 10000 Simulations</p>
        <ul>
          <li>
            Percent of packs with a White card:{" "}
            {this.props.results.whiteCount / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a Blue card:{" "}
            {this.props.results.blueCount / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a Black card:{" "}
            {this.props.results.blackCount / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a Red card:{" "}
            {this.props.results.redCount / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a Green card:
            {this.props.results.greenCount / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a MultiColor card:{" "}
            {this.props.results.multicolorNum / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a Colorless card:{" "}
            {this.props.results.colorlessNum / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with a card of each color:
            {this.props.results.allColors / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs missing two or more colors:
            {this.props.results.missTwo / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with five or more cards of a color:
            {this.props.results.fivePlus / this.props.simulationNumber}%
          </li>
          <li>
            Percent of packs with six or more cards of a color:
            {this.props.results.sixPlus / this.props.simulationNumber}%
          </li>
        </ul>
      </div>
    )
  }
}

export default Results
