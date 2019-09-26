import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Rose Windsong",
        email: "rose@crescentmoon.com",
        phone: "444-444-4444",
        type: "personal"
      },
      {
        id: 1,
        name: "Zabek Ortega",
        email: "zabek@qteam.com",
        phone: "444-444-4444",
        type: "personal"
      },
      {
        id: 1,
        name: "Angelfire Starformation",
        email: "afire@crescentmooon.com",
        phone: "444-444-4444",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
