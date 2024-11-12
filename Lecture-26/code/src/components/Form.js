import React, { useState } from "react";

const Form = ({ getContactData }) => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");

  //   const [error, setError] = useState({
  //     nameError: "",
  //     ageError:"",
  //     emailError: "",
  //     contactError:" "
  //   })

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    if (e.target.id == "firstName") {
      validateName(e.target.value);
    } else if (e.target.id == "age") {
      validateAge(e.target.value);
    } else if (e.target.id == "contact") {
      validateContact(e.target.value);
    } else if (e.target.id == "email") {
      validateEmail(e.target.value);
    }
  };

  const validateEmail = () => {
    //try validate throgh regex
  };

  const validateName = (name) => {
    //logic to validate name
    let error = nameError;
    let valid = formValid;

    if (name.trim() === "") {
      error = "This is required!";
      valid = false;
    } else if (name.trim().length <= 3) {
      error = "Please enter valid name";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setFirstName(name);
    setNameError(error);
    setFormValid(valid);

    return valid;
  };

  const validateAge = (age) => {
    let error = ageError;
    let valid = formValid;

    if (age.trim().length > 3) {
      error = "Please enter valid age";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setAge(age);
    setFormValid(valid);
    setAgeError(error);

    return valid;
  };

  const validateContact = (contact) => {
    let error = contactError;
    let valid = formValid;

    if (contact.trim().length != 10) {
      error = "Enter valid contact";
      valid = false;
    } else {
      error = "";
      valid = true;
    }

    setContact(contact);
    setFormValid(valid);
    setContactError(error);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName(firstName) &&
      validateAge(age) &&
      validateContact(contact)
    ) {
      alert("form is submitted");

      const person = {
        firstName,
        age,
        contact,
      }; //restructuring of objects

      getContactData(person);
      setFirstName("");
      setAge("");
      setContact("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter First Name</label>
        <input
          type="text"
          placeholder="Please enter firstname"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <p>{nameError}</p>

        <label htmlFor="age">Enter Age</label>
        <input
          type="text"
          placeholder="Please enter age"
          name="age"
          id="age"
          value={age}
          onChange={handleChange}
        />
        <p>{ageError}</p>

        <label htmlFor="contact">Enter Contact</label>
        <input
          type="text"
          placeholder="Please enter contact"
          name=""
          id="contact"
          value={contact}
          onChange={handleChange}
        />
        <p>{contactError}</p>

        <label htmlFor="email">Enter Email</label>
        <input
          type="text"
          placeholder="Please enter email"
          name=""
          id="email"
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;

//property shorthand
// {
//   firstName, age
// }

// {
//   firstName: firstName, age: age
// }
