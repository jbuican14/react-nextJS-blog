import {useState} from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  function sendMessageHandler(event) {
    event.preventDefault();

    // option for validate data client side

    fetch("/api/contact/", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(evt) => setEnteredEmail(evt.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(evt) => setEnteredName(evt.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            name=""
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(evt) => setEnteredMessage(evt.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
