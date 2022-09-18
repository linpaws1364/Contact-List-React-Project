import React from "react";
import { Link } from "react-router-dom";
import user from "../images/profile.png";

const ContactCard = (props) => {
  const { id, name, phone, email } = props.contact;
  return (
    <div className="item">
      {/* the profile icon  */}
      <img className="ui avatar image" src={user} alt="user" style={{width: "70px", height: "70px"}} />

      {/* div for each contact entry  */}
      <div className="content" style={{margin: "0% 3%"}}>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
          <div className="header">{name}</div>
          {/* div for phone number  */}
          <div className="connection"style={{margin: "3px 0px"}}>
          Phone: {phone}
          </div>
          {/* div for email id  */}
          <div className="connection">
            Email: {email}
          </div>
        </Link>
        {/* div for delete button and edit button  */}
      </div>
      <button className="deleter"
      onClick={() => props.clickHander(id)}
      >Delete</button>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <button className="editor">Edit</button>
      </Link>
    </div>
  );
};

export default ContactCard;
