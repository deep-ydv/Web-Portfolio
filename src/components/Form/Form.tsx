import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_email: email,
          message: message,
          name:name,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => setLoading(false));
  };
  const styles: { [key: string]: React.CSSProperties } = {
    form: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex:"500",

    },
    input: {
      padding: "10px",
      fontSize: "16px"
    },
    textarea: {
      padding: "10px",
      fontSize: "16px",
      minHeight: "120px",
      resize: "none"
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      cursor: "pointer"
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Contact Us</h2>
        <input
          type="name"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};

export default Form;
