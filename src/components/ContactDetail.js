import React from "react";
import { Link } from "react-router-dom";
import contactDetail from "../images/id-card.png";

const ContactDetail = (props) => {
  const { name, phone, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        {/* div for contact card image  */}
        <div className="image">
          <img src={contactDetail} alt="user" />
        </div>
        {/* div for contact details  */}
        <div className="content">
          <div><h2 className="ui header">{name}</h2></div>
          <div><h4 className="ui header" style={{margin: "5px 0px"}}>{phone}</h4></div>
          <div className="description">{email}</div>
        </div>
      </div>
      {/* div for back button  */}
      <div className="center-div">
        <Link to="/">
        <button className="backer"> Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
