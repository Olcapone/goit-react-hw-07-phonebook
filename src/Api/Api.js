import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function fetchContacts() {
  const { data } = await axios.get(`/items`);
  return data;
}

// export async function fetchContactsById(contactId) {
//   const { data } = await axios.get(`/items?id=${contactId}`);
//   return data;
// };

export function addContact(user) {
  return axios.post(`/items`, user);
  // return data;
}

export function deleteContact(id) {
  return axios.delete(`/items/` + id);
}

// export function fetchFirstContacts() {
//  return

// };
