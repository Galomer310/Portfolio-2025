// Contact.tsx
import { useState } from "react";
import emailjs from "emailjs-com";

// Contact component renders the contact form.
const Contact: React.FC = () => {
  // State for the form inputs.
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  // State to store the submission message.
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle input changes.
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to send email using EmailJS.
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Remove the emailjs.init() call if you are passing the public key here.
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key (instead of USER_ID)
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
        {/* Input for name */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          value={formData.user_name}
          onChange={handleChange}
        />
        {/* Input for email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          value={formData.user_email}
          onChange={handleChange}
        />
        {/* Textarea for message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {/* Display submission message if present */}
      {submitMessage && <p>{submitMessage}</p>}
    </section>
  );
};

export default Contact;
