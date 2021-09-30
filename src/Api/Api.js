import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function fetchContacts() {
  const { response } = await axios.get(`/items`);
  return response;
}

export async function fetchContactsById(contactId) {
  const { response } = await axios.get(`/items?id=${contactId}`);
  return response;
}
