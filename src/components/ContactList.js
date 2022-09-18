import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  // mapping the all contacts present in api 

  const renderContactList = props.contacts.map((contact) => {
    return (
      // element to handle the contacts list 
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="mainer">
      <h2>
        List of Contacts
        <Link to="/add">
          {/* add to contact button */}
          <button className="adder">Add Contact</button> 
        </Link>
      </h2>
      {/* div for rendering entries  */}
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
