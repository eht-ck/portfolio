import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chandresh Kumar",
          from_email: form.email,
          to_email: "chandresh@gmail.com",
          message: form.email +" " + form.message,
        },
        process.env.REACT_APP_API_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block text-xl font-bold mb-2 text-[#915EFF]">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#915EFF] text-xl font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#915EFF] text-xl font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>
      <div style={{  }}>
  <button
    type="submit"
    disabled={loading}
    className={`bg-[#915EFF] text-white py-2 rounded-md hover:bg-[#8453ee] transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    style={{ width: '100%' }}
  >
    {loading ? 'Sending...' : 'Send'}
  </button>
</div>

    </form>
  );
};

export default Contact;
