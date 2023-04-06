import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactCard from "./ContactCard";
import "../css/AddContact.css";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="">{renderContactList}</div>;
};

export default ContactList;
