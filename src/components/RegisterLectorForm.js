import React, { useState } from "react";

const RegisterLectorForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/registerlektor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Signin</button>
    </form>
  );
};

export default RegisterLectorForm;
