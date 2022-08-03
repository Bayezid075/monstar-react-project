import "./App.css";
import React from "react";
import { Component } from "react";
import CardList from "./components/cardlist/Cardlist.component";

export default class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monstars: [],
      searchFeld: "",
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

  onSearchChange = (event) => {
    const searchFeld = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFeld };
    });
  };

  render() {
    const filerMonster = this.state.monstars.filter((monstar) => {
      return monstar.name.toLocaleLowerCase().includes(this.state.searchFeld);
    });
    console.log("render function !!");
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monstar"
          className="search-box"
          onChange={this.onSearchChange}
        />
        <CardList monster={filerMonster} />
      </div>
    );
  }
}
