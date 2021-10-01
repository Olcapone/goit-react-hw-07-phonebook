import React, { useEffect } from "react";
import shortid from "shortid";
//=== redux
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import actions from "../../redux/contacts/contacts-actions";
import * as operations from "../../redux/contacts/contacts-operations";
import * as contactSelectors from "../../redux/contacts/contacts-selectors";
import getContact from "../../utils/getContact";

//=== styles
import s from "./ContactList.module.css";

function ContactList({ onDelete }) {
  //const [cont, setContacts] = useState([]);
  const dispatch = useDispatch();
  const contact = useSelector(contactSelectors.getContacts);

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <>
      {contact.length !== 0 && (
        <ul className={s.list}>
          {contact.map(({ name, number, id }) => (
            <li className={s.item} key={shortid.generate()}>
              {name} : {number}{" "}
              <button
                className={s.button}
                type="button"
                onClick={() => onDelete(id)}
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

const mapStateToProps = ({ contacts: { filter, entities } }) => ({
  contact: getContact(filter, entities),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
