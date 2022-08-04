import React, { Component } from "react";
import "./Cardlist.styles.css";
export default class Cardlist extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((m) => {
          const { id, name, email } = m;
          return (
            <div className="card-container">
              <img
                alt={name}
                src={`https://robohash.org/${id}?set=set2`}
                key={id}
              />

              <h2> {name} </h2>
              <p> {email} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
