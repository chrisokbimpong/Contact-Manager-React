import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AddContact extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="field">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-primary">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
