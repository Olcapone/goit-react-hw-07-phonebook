import * as contactsActions from "./contacts-actions";
import * as ContactsAPI from "../../Api/Api";

export const fetchContact = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await ContactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
