import { useState } from "react";
import emailjs from "emailjs-com";

// Remove the ImportMetaEnv and ImportMeta interfaces

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Initialize with public key from .env

    return emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use template ID from .env
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_USER_ID // Use user ID from .env
      )
      .then(() => {
        setSubmitMessage("Email sent successfully!");
      })
      .catch((error) => {
        setSubmitMessage("Failed to send email. Please try again later.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section className="contact">
      <h2>Please feel free to Contact Me</h2>
      <h4>
        And I Will Do My Best To Answer All your Questions As Fast As Possible
      </h4>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          value={formData.user_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </section>
  );
};

export default Contact;
