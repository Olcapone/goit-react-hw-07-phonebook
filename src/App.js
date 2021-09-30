import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <section className="mainSection">
      <h1 className="mainTitle">
        <span className="logo">P</span>honebook
      </h1>
      <ContactForm />

      <h2 className="mainTitle">Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}

export default App;
