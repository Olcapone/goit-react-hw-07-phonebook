import { createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import shortid from "shortid";

import actions from "./contacts-actions";
import * as ContactsAPI from "../../Api/Api";

export const fetchContact = createAsyncThunk(
  "fetchContactsRequest",
  async () => {
    const contacts = await ContactsAPI.fetchContacts();
    return contacts;
  }
);

export const addContacts = (text) => (dispatch) => {
  const { stateName, number } = text;
  const user = { id: shortid.generate(), name: stateName, number };
  console.log(user);

  dispatch(actions.addContactRequest());

  // axios
  // .post(`/items`, user)
  ContactsAPI.addContact(user)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export const deleteContact = (userId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  ContactsAPI.deleteContact(userId)
    .then(() => dispatch(actions.deleteContactSuccess(userId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};

// "deleteContactsRequest",
// async () => {
//   // axios.delete(`/items/${name}`)
//   const contacts =
//   return contacts;
// }
