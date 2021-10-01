const getContact = (value, contacts) => {
  const normalizetext = value.toLowerCase();
  console.log(`get contact gived ${value} ${contacts}`);

  return (
    contacts &&
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizetext))
  );
};

export default getContact;
