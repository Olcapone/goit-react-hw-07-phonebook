import React, { useState, useEffect } from "react";
import shortid from "shortid";
//=== redux
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../redux/contacts/contacts-actions";
import * as operations from "../../redux/contacts/contacts-operations";
import * as contactSelectors from "../../redux/contacts/contacts-selectors";
import getContact from "../../utils/getContact";

//=== styles
import s from "./ContactList.module.css";

function ContactList({ onDelete }) {
  const [contact, setContacts] = useState([]);
  const dispatch = useDispatch();
  const conts = useSelector(contactSelectors.getContacts);

  useEffect(() => dispatch(operations.fetchContact()), [dispatch]);

  // fetchContact().then((data) => {
  // setContacts(data)

  return (
    <>
      {conts.length > 0 && (
        <ul className={s.list}>
          {contact.map(({ name, number }) => (
            <li className={s.item} key={shortid.generate()}>
              {name} : {number}{" "}
              <button
                className={s.button}
                type="button"
                onClick={() => onDelete(name)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = ({ contacts: { filter, items } }) => ({
  contact: getContact(filter, items),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (name) => dispatch(actions.deleteContact(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
