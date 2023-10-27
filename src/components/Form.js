import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Gerald");
  const [lastName, setLastName] = useState("Mwangi");

  const [submittedData, setSubmittedDdata] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedDdata(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["A name is required here!"]);
    }
}

const listOfSubmissions = submittedData.map((data, index) => {
  return ( 
    <div key= {index}>
      {data.firstName} {data.lastName}
    </div>
  )
})

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      </form>
       {/* rendering error messages */}
       {errors.length > 0
       ? errors.map((error, index)=> (
       <p key={index} style={{ color: "red"}}>
        {error}
        </p>
    ))
  : null}
   <h3>Submissions</h3>
   {listOfSubmissions}
  </div>
  );
}

export default Form;
