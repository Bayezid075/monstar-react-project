import React, { Component } from "react";

export default class Cardlist extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div>
        {monster.map((m) => (
          <h1 key={m.id}> {m.name} </h1>
        ))}
      </div>
    );
  }
}
