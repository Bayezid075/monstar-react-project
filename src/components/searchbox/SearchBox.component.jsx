import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, type } = this.props;
    return (
      <div>
        {" "}
        <input
          type={type}
          placeholder={placeholder}
          className="search-box"
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
