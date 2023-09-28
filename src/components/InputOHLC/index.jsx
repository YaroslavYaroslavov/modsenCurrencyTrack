import React, { Component, createRef } from "react";

class InputOHLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: 0,
      high: 0,
      low: 0,
      close: 0,
    };
    this.dateInputRef = createRef();
  }

  formatDate() {
    let date = new Date();

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  addOneDay(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return year + "-" + month + "-" + day;
  }

  handleButtonAddClick = () => {
    const { open, high, low, close } = this.state;
    const { handleDatasChange } = this.props;

    handleDatasChange((prev) => [
      ...prev,
      {
        x: Date.parse(this.dateInputRef.current.value),
        o: open,
        h: high,
        l: low,
        c: close,
      },
    ]);

    this.dateInputRef.current.value = this.addOneDay(
      this.dateInputRef.current.value
    );
  };

  handleOpenChange = (e) => {
    this.setState({ open: e.target.value });
  };

  handleHighChange = (e) => {
    this.setState({ high: e.target.value });
  };

  handleLowChange = (e) => {
    this.setState({ low: e.target.value });
  };

  handleCloseChange = (e) => {
    this.setState({ close: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Enter the data to display</h1>
        <input
          type="number"
          onChange={this.handleOpenChange}
          placeholder="Open"
        />
        <input
          type="number"
          onChange={this.handleHighChange}
          placeholder="High"
        />
        <input
          type="number"
          onChange={this.handleLowChange}
          placeholder="Low"
        />
        <input
          type="number"
          onChange={this.handleCloseChange}
          placeholder="Close"
        />
        <input
          type="date"
          defaultValue={this.formatDate()}
          ref={this.dateInputRef}
        />
        <button onClick={this.handleButtonAddClick}>Add</button>
      </div>
    );
  }
}

export default InputOHLC;
