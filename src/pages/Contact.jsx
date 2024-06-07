import { useState } from "react";
import { testEmail } from "../utils/helpers";

function contactForm() {
  
  const [name, userName] = useState("");
  const [email, userEmail] = useState("");
  const [message, userMessage] = useState("");
  const [errorMessage, userErrorMessage] = useState("");
  const [submitMessage, userSubmitMessage] = useState("");

 
  const InputChange = (e) => {
    const { target } = e;
    const inputType = target.name; 
    const inputValue = target.value;

    if (inputType === "name") {
      userName(inputValue);
    } else if (inputType == "email") {
      userEmail(inputValue);
    } else {
      userMessage(inputValue);
    }
  };

  const EmailValidation = () => {
    if (!testEmail(email)) {
      userErrorMessage("Enter valid email");
      userSubmitMessage("");
    } else {
      userErrorMessage("");
    }
  };
 
  
  const MessageField = () => {
    if (!message) {
      userErrorMessage("Enter a message");
      userSubmitMessage("");
    } else {
      userErrorMessage("");
    }
  };
 
  

  const NameField = () => {
    if (!name) {
      userErrorMessage("Enter your name");
      userSubmitMessage("");
    } else {
      userErrorMessage("");
    }
  };
  
  
  const FormSubmit = (e) => {
    e.preventDefault();
  

    EmailValidation();


    
    if (!email || !name || !message || !testEmail(email)) {
      userErrorMessage("Please fill in all fields. ");
    } else {
      userSubmitMessage("Sent!");
      userName("");
      userEmail("");
      userMessage("");
    }
  };

 //Form
  return (
    <div className="mt-3"style={{fontFamily: "Gill Sans"}}>
      <header style={{textAlign: "center"}} >Contact Me</header>
      <form className="form" onSubmit={FormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            className="form-control"
            value={name}
            onChange={InputChange}
            onBlur={NameField}
            name="name"
            type="name"
        
         
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            value={email}
            onChange={InputChange}
            onBlur={EmailValidation}
            name="email"
            type="text"
         
          />
        </div>

        <div className="">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={InputChange}
            onBlur={MessageField}
            name="message"
            type="text"
           
            style={{ height: 100 }}
          />
        </div>
        <button
          type="submit"
          className="button"
        >
          Send Message
        </button>
      </form>
      {errorMessage && (
        <div>
          <p style={{ color: "red" }} className="error">
            {errorMessage}
          </p>
        </div>
      )}
      {submitMessage && (
        <div>
          <p className="submitted">
            {submitMessage}
          </p>
        </div>
      )}
    </div>
  );
}

export default contactForm;