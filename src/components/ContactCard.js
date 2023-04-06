import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/AddContact.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <table className="table container tcontact">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <i className="bi bi-person-circle tdname"> {name} </i>
            </td>
            <td className="emailtd">{email}</td>
            <td className="trashtd">
              <i className="bi bi-trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactCard;
