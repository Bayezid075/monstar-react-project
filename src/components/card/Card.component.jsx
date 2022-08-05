import React, { Component } from "react";
import "./Card.styles.css";

export default class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container">
        <img alt={name} src={`https://robohash.org/${id}?set=set2`} key={id} />

        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    );
  }
}
