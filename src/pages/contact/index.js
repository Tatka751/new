import uuid4 from "uuid4";
import styles from "./components/Contact/Contact.module.css";
import { useState, useEffect } from "react";
import { CardContact } from "./components/Contact/Contact";

function App() {
  const [state, setState] = useState({
    contacts: [
      {
        id: uuid4(),
        sign: "male.jpg",
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
      },
      {
        id: uuid4(),
        sign: "male.jpg",
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
      },
      {
        id: uuid4(),
        sign: "nospecify.jpg",
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
      },
      {
        id: uuid4(),
        sign: "female.jpg",
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
      },
      {
        id: uuid4(),
        sign: "male.jpg",
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
      },
      {
        id: uuid4(),
        sign: "male.jpg",
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
      },
    ],
    search: "",
    male: "",
    female: "",
    nospecify: "",
    result: "",
  });

  function handleSearchChange({ target: { name, value } }) {
    if (name === "male") {
      setIsCheckedMale(!isCheckedMale);
      setState((prev) => ({ ...prev, [name]: value }));
      filter(name, value);
      setState((prev) => ({ ...prev, result: filteredContacts }));
    }
    if (name === "female") {
      setIsCheckedFemale(!isCheckedFemale);
      setState((prev) => ({ ...prev, [name]: value }));
      filter(state.search, state.male, value, state.nospecify);
      setState((prev) => ({ ...prev, result: filteredContacts }));
    }
    if (name === "nospecify") {
      setIsCheckedNospecify(!isCheckedNospecify);
      setState((prev) => ({ ...prev, [name]: value }));
      filter(state.search, state.male, state.female, value);
      setState((prev) => ({ ...prev, result: filteredContacts }));
    }

    if (name === "search") {
      setState((prev) => ({ ...prev, [name]: value }));
      filter(name, value);
      setState((prev) => ({ ...prev, result: filteredContacts }));
    }
  }

  useEffect(() => {}, [state]);

  let filteredContacts = [...state.contacts];
  const [isCheckedMale, setIsCheckedMale] = useState(false);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  const [isCheckedNospecify, setIsCheckedNospecify] = useState(false);

  function filter(name, arg) {
    if (name === "search") {
      if (state.result) {
        filteredContacts = state.contacts.filter((contacts) => {
          return (
            contacts.firstName.toLowerCase().includes(arg.toLowerCase()) ||
            contacts.lastName.toLowerCase().includes(arg.toLowerCase()) ||
            contacts.phone.toLowerCase().includes(arg.toLowerCase())
          );
        });
      } else {
        filteredContacts = state.contacts.filter((contacts) => {
          return (
            contacts.firstName.toLowerCase().includes(arg.toLowerCase()) ||
            contacts.lastName.toLowerCase().includes(arg.toLowerCase()) ||
            contacts.phone.toLowerCase().includes(arg.toLowerCase())
          );
        });
      }
    }

    if (!state.result) {
      filteredContacts = state.contacts.filter((contacts) => {
        return contacts.firstName.toLowerCase().includes(arg.toLowerCase());
      });
    }
  }

  return (
    <>

      <div className="App">
      {state.contacts.map((contacts) => (
              <CardContact key={contacts.id} data={contacts} />
            ))}
      </div>
    </>
  );
}

export default App;
