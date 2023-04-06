import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Fields are required");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="container">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="field">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <br />
          <button className=" addbtn">
            <span>Add Contact</span>
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
