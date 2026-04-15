import React, { useState } from "react";
import User from "./User";

// function based component
const App = () => {
  // [state variable, method to update]
  const [firstName, setFirstName] = useState("alina");
  const [num, setNum] = useState(20);
  const [person, setPerson] = useState({
    name: "alaya",
    id: 1,
  });

  return (
    <>
      {firstName}
      <p>{num}</p>
      <p>{person.name}</p>
      <User person={person} num={num} />
    </>
  );
};

export default App;

// User(person = {}, num = 20)
