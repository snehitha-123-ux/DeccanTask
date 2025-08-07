import React, { useState } from "react";

function Events() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [input, setInput] = useState("");

  // onChange - updates state with input value
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // onClick - button click updates submittedName
  const handleClick = () => {
    setSubmittedName(name);
  };

  // onSubmit - triggered when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Form submitted with name: ${name}`);
  };

  // onFocus - changes background color of input
  const handleFocus = () => {
    setInput("#e0f7fa");
  };


  return (
    <div>
      <h2>React Event Handlers Demo</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:{" "}
          <input
            type="text"
            value={name}
            onChange={handleChange} 
            onFocus={handleFocus}  
            style={{ backgroundColor: input, padding: "5px" }}
          />
        </label>
        <br /><br />

        <button type="button" onClick={handleClick}>
          Click Me
        </button>{" "}
        <button type="submit">Submit</button> 
      </form>

      <br />
      <h3>Typed Name: {name}</h3>
      <h3>Submitted Name: {submittedName}</h3>
    </div>
  );
}

export default Events;