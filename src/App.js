import "./App.css";
import React from "react";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monstars: [],
    };
  }

  componentDidMount() {
    console.log("lifecycle method ");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monstars: users };
        })
      );
  }

  render() {
    console.log("render function !!");
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monstar"
          className="search-box"
          onChange={(event) => {
            const lowerString = event.target.value.toLocaleLowerCase();

            const filerMonster = this.state.monstars.filter((monstar) => {
              return monstar.name.toLocaleLowerCase().includes(lowerString);
            });
            this.setState(() => {
              return { monstars: filerMonster };
            });
          }}
        />

        {this.state.monstars.map((monstar) => {
          return <h1 key={monstar.key}> {monstar.name} </h1>;
        })}
      </div>
    );
  }
}
