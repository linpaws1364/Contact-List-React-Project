import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  // adding event handler for name, phone and email
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "" || this.state.email === "") {
      alert("Please input all the fields");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", phone: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main editing">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          {/* div to create field to put name of contact */}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          {/* div to create field for contact number */}
          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Contact Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          {/* div to create field for email*/}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          {/* button to add the new contact in contact list */}
          <button className="adding">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
