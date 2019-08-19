import React from "react";
import { storage } from "../firebase/firebase";

export default class PropertyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.property ? props.property.title : "",
      description: props.property ? props.property.description : "",
      amount: props.property ? props.property.amount.toString() : "",
      rating: props.property ? props.property.rating : "not rated",
      image: null,
      url: props.property
        ? props.property.url
        : "http://via.placeholder.com/150x200",
      progress: 0,
      error: ""
    };
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  onImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

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
        rating: this.state.rating ? this.state.rating : "not rated",
        url: this.state.url
      });
    }
  };
  render() {
    return (
      <div className="row">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div
              className="col s6"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label className="file-field input-field btn">
                {this.state.image ? "Image Selected" : "Select Image"}
                <input
                  type="file"
                  onChange={this.onImageChange}
                  style={{ display: "none" }}
                  accept=".jpeg,.jpg,.png,.gif.tif"
                />
              </label>
              <button onClick={this.handleUpload}>Upload</button>
            </div>
            <div className="col s6">
              <img
                src={this.state.url}
                alt="uploaded file"
                height="150"
                width="200"
              />
            </div>
          </div>
          <label>Title</label>
          <input
            value={this.state.title}
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            autoFocus
          />
          <label>Description</label>
          <textarea
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder="Add details for the property..."
          />
          <label>Price</label>
          <input
            type="number"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <label>Rating</label>
          <select
            className="browser-default"
            value={this.state.rating}
            onChange={this.onRatingChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="btn waves-effect" type="submit">
            Add Property
          </button>
        </form>
      </div>
    );
  }
}
