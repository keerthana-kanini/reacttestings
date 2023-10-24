import React, { Component } from "react";
import { variables } from "./Variable";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class HotelPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: "",
      hotelLocation: "",
      amenities: "",
      price: 0,
      city: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { hotelName, hotelLocation, amenities, price, city } = this.state;
    const requestData = { hotelName, hotelLocation, amenities, price, city };

    fetch(variables.API_URL + "Hotel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hotel created:", data);
        // Perform any necessary actions after successful creation
      })
      .catch((error) => {
        console.error("Error", error);
        // Handle the error appropriately
      });
  };

  render() {
    return (
      <div className="container">
        <br></br>
        <h2>Create Hotel</h2>
        <div>
          <div className="form-group">
            <label htmlFor="hotelName">Hotel Name</label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              className="form-control"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hotelLocation">Hotel Location</label>
            <input
              type="text"
              id="hotelLocation"
              name="hotelLocation"
              className="form-control"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amenities">Amenities</label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="form-control"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default HotelPost;
