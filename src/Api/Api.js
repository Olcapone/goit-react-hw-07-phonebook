import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function fetchContacts() {
  const { data } = await axios.get(`/items`);
  console.log(data);
  return data;
}

export async function fetchContactsById(contactId) {
  const { data } = await axios.get(`/items?id=${contactId}`);
  return data;
}
