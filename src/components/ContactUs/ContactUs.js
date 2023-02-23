import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./ContactUs.module.css";
// import MainHeader from "../MainHeader/MainHeader";
import Card from "../UI/Card/Card";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setUserMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormStatus(true);
    console.log(userName, userEmail, userMessage);
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <>
      <main>
        <Card className={classes.contact}>
          <h2>Get In Touch</h2>
          <h4>
            Have an analytics need or want to know more about our services?
            Kindly fill the form. If you’re facing any issues to filling this
            form, please write to us at{" "}
            <span className={classes.link}>info@tigeranalytics.com</span> and we
            will get back to you as soon as possible.
          </h4>
          <form onSubmit={submitHandler}>
            <Input
              id="name"
              label="Name"
              type="text"
              onChange={nameChangeHandler}
              value={userName}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              onChange={emailChangeHandler}
              value={userEmail}
            />
            <Input
              id="message"
              label="Message"
              type="text"
              onChange={messageChangeHandler}
              value={userMessage}
            />

            <Button type="submit">Send</Button>
            {formStatus && <p>Form is successfully submitted</p>}
          </form>
        </Card>
      </main>
    </>
  );
};

export default ContactUs;
