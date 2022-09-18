import React from "react";

class EditContact extends React.Component {
  // constructor to receive props of the contact details 
  constructor(props) {
    super(props);
    const { id, name, phone, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      phone,
      email,
    };
  }

  // function to update the contact entry details 
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", phone: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main editing">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          {/* div to edit contact name */}
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

          {/* div to edit contact number  */}
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

          {/* div to edit email id  */}
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
          {/* the update button to add the edit to selected contact and add it back to contact list main page  */}
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
