import React, { useState } from "react";
import axios from "axios";

const Orders = () => {
  const [name, setName] = useState(``); 
  const [surname, setSurname] = useState(``);

  const handleSubmit = () => {
    axios
      .post("https://northwind.vercel.app/api/suppliers", {
        companyName: name,
        contactName: surname,
      })

      .then((response) => {
        console.log(response.data);
      });

    setName("");
    setSurname("")
  };

    return (
      <div>
        NAME:
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter name"
        />
        SURNAME:
        <input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          type="text"
          placeholder="Enter surname"
        />
        ENTER:
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Click me{" "}
        </button>
      </div>
    );
  };

export default Orders;
