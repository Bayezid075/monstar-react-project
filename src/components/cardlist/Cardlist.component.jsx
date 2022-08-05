import React, { Component } from "react";
import Card from "../card/Card.component";
import "./Cardlist.styles.css";
export default class Cardlist extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
