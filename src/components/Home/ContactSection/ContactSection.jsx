import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SectionHeading from "../../../UI/SectionHeading";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });

        Swal.fire({
          title: "Message received!",
          text: "Thank you for reaching out. We will get back to you soon.",
          iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" fill="#33acc0"><path d="M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12s12-5.4 12-12C24 5.4 18.6 0 12 0zm6 9.6l-7.2 7.2c-.6.6-1.2.6-1.8 0L6 13.2c-.6-.6-.6-1.2 0-1.8s1.2-.6 1.8 0l2.4 2.4 6.3-6.3c.6-.6 1.2-.6 1.8 0s.6 1.2 0 1.8z"/></svg>`,
          background: "rgba(61, 64, 91, 0.4)",
          color: "#f4f1ee",
          confirmButtonColor: "#33acc0",
          confirmButtonText: "Okay",
          customClass: {
            popup: "blur-popup",
            icon: "custom-icon",
          },
          didOpen: () => {
            const popup = document.querySelector(".blur-popup");
            if (popup) {
              popup.style.backdropFilter = "blur(8px)";
              popup.style.webkitBackdropFilter = "blur(8px)";
            }
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 text-secondary md:py-16 py-10"
      id="contact"
    >
      <SectionHeading
        title="Contact Me"
        subtitle="Let’s connect and bring your ideas to life!"
        textAlign="center"
      />
      <div className="grid lg:grid-cols-2 mt-12 bg-primary/5 rounded-2xl shadow-primary/10 shadow-2xl overflow-hidden">
        {/* Left: Contact Info */}
        <div className="space-y-6 p-8 md:p-12 bg-base-200/80 opacity-80">
          <h3 className="text-xl font-semibold text-primary">Get in Touch</h3>
          <p className="text-base leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi
            — I’ll try my best to get back to you!
          </p>
          <div className="space-y-3 text-sm md:text-base">
            <p>
              <strong>Email: </strong>
              <a
                href="mailto:wd.naimur@gmail.com"
                className="text-primary underline"
              >
                wd.naimur@gmail.com
              </a>
            </p>
            <p>
              <strong>Location:</strong> Rangpur, Bangladesh
            </p>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form
          className="space-y-2 p-8 md:p-12 bg-primary/10"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="fieldset-legend text-secondary/60">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input border-none shadow-none focus:ring-0 focus:outline-primary/20 w-full"
                placeholder="Your Name"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="fieldset-legend text-secondary/60">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input border-none shadow-none focus:ring-0 focus:outline-primary/20 w-full"
                placeholder="Your Email"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="fieldset-legend text-secondary/60">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input input-secondary border-none shadow-none focus:ring-0 focus:outline-primary/20 w-full"
              placeholder="Subject"
              disabled={loading}
            />
          </div>
          <div>
            <label className="fieldset-legend text-secondary/60">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-secondary border-none shadow-none focus:ring-0 focus:outline-primary/20 w-full"
              placeholder="Your message..."
              required
              disabled={loading}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg bg-primary text-white font-semibold transition w-full cursor-pointer active:scale-95
              ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary/90"
              }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
