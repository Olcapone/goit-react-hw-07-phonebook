import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction(
  "contacts/addContact",
  function prepare({ stateName, number }) {
    return {
      payload: { id: shortid.generate(), name: stateName, number },
    };
  }
);
const deleteContact = createAction("contacts/deleteContact");
const changeFilter = createAction("contacts/changeFilter");

//== bd actions

// //== pending
// export const fetchContactsRequest = createAction(
//   "contacts/fetchContactsRequest"
// );
// //fullfilled
// export const fetchContactsSuccess = createAction(
//   "contacts/fetchContactsSuccess"
// );
// //rejected
// export const fetchContactsError = createAction("contacts/fetchContactsError");

export default { addContact, deleteContact, changeFilter };
