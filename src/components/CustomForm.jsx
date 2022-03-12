import React, { useEffect, useState } from "react";
// import "./mcFormStyles.scss";
// import input from "../../ui/input/input";

const CustomForm = ({ status, message, onValidated, setVisible }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    console.log(123123);
    e.preventDefault();
    email &&
      name &&
      company &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        NAME: name,
        COMPANY: company,
        TITLE: title,
        PHONE: phone,
      });
  };

  useEffect(() => {
    if (status === "success") {
      alert("You have successfully sign up!");
      clearFields();
      setVisible(false);
    }
  }, [status, setVisible]);

  const clearFields = () => {
    setName("");
    setCompany("");
    setEmail("");
  };

  return (
    <div className="mc__form-container">
      <div style={{ textAlign: "right" }}>
        <span
          onClick={() => {
            setVisible(false);
          }}
        >
          Close
        </span>
      </div>
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
          Thank you for showing interest<br></br>
          in ZettaBlock.
        </h3>
        <p>We look forward to speaking with you!</p>
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">sending...</div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="mc__field-container">
          <p>*Name:</p>
          <input
            required
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={name}
            placeholder="Name"
            //   isRequired
          />
          <p>*Company:</p>
          <input
            required
            label="Company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            value={company}
            placeholder="Company"
            //   isRequired
          />
          <p>*Email:</p>
          <input
            required
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            placeholder="your@email.com"
            //   isRequired
          />
          <p>*Title:</p>
          <input
            required
            label="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            value={title}
            placeholder="Company CEO"
            //   isRequired
          />
          <p>Phone:</p>
          <input
            label="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="phone"
            value={phone}
            placeholder="7788888888"
            //   isRequired
          />
        </div>

        <div>
          <input
            label="subscribe"
            type="submit"
            // formValues={[email, name, company]}
          />
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
