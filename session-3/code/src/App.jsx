import React, { use, useState } from "react";
import Products from "./Products";

const App = () => {
  const [firstName, setFirstName] = useState("Alina");
  const [age, setAge] = useState(20);
  const [person, setPerson] = useState({
    id: 10,
    name: "alaya",
    salary: 909090,
  });

  const [isVerified, setIsVerified] = useState(false);

  let [arr, setArr] = useState([10, 2, 3, 4, 20]);

  const handleUpdate = () => {
    setFirstName("John");
    setAge(21);
    setPerson({ ...person, salary: 898090 });
  };

  return (
    <>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.salary}</p>
      <p>
        {arr.map((a) => (
          <>{a}</>
        ))}
      </p>

      {/* conditional rendering  */}
      {isVerified ? <Products /> : <p>Nothing....</p>}

      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => setIsVerified(!isVerified)}>Display</button>
    </>
  );
};

export default App;
