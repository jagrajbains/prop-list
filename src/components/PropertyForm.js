import React from "react";

export default class PropertyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.property ? props.property.title : "",
      description: props.property ? props.property.description : "",
      amount: props.property ? props.property.amount.toString() : "",
      rating: props.property ? props.property.rating : "not rated",
      error: ""
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onRatingChange = e => {
    const rating = e.target.value;
    this.setState({ rating });
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount || !this.state.title) {
      this.setState(() => ({
        error: "Please provide title, description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10).toLocaleString("en-IN"),
        title: this.state.title,
        rating: this.state.rating !== "not rated" && parseInt(this.state.rating)
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.title}
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            autoFocus
          />
          <textarea
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder="Add details for the property..."
          />
          <input
            type="number"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <select value={this.state.rating} onChange={this.onRatingChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button type="submit">Add Property</button>
        </form>
      </div>
    );
  }
}
