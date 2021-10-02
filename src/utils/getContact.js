const getContact = (value, contacts) => {
  const normalizetext = value.toLowerCase();
  console.log(`get contact gived ${value} ${contacts}`);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizetext)
  );
  // contacts &&
};

export default getContact;
