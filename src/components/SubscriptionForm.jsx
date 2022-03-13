import { useEffect, useState } from "react";
import sendImage from "../images/Send.svg";

const SubscriptionForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disable) return;
    setDisable(true);
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        'group[45212][2]': 1
      });
  };
  useEffect(() => {
    if (status === "success") {
      alert("You have successfully subscribed to our newsletter!");
    }
    if (status === "error") {
      alert("There was an error with your submission. Please try again later.");
    }
    setDisable(false);
  }, [status, setDisable]);

  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div>
          <img src={sendImage} alt="submite" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default SubscriptionForm;
