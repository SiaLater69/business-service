"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-white">MADE FOR YOU</h2>
          <h1 className="mt-2 text-4xl font-semibold text-white">Connect with our Team</h1>
          <p className="mt-4 text-lg text-white">Ready to take your business to the next level?</p>
          <p className="mt-2 text-lg text-white">Reach out to us and let's start the conversation.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="NAME"
              className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-MAIL"
              className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="PHONE"
              className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-slate-600 py-3 px-6 hover:bg-opacity-90 transition-colors duration-200"
          >
            SUBMIT
          </button>
        </form>

        <div className="pt-12 text-center space-y-2">
          <h3 className="text-white font-medium">CONTACT DETAILS</h3>
          <div className="text-white space-y-1">
            <p>+966 11 239 4449</p>
            <p>+966 9200 2525</p>
            <p>info@b-aware.sa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;