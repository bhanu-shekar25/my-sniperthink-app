import React from 'react';

const Contact = ({ name, setName, email, setEmail, message, setMessage, formErrors, handleSubmit, submitStatus }) => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg opacity-80">
              Have questions or want to learn more about SniperThink? Reach out to us.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                placeholder="Your name"
              />
              {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                placeholder="your@email.com"
              />
              {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.message ? 'border-red-500' : 'border-gray-300 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                placeholder="How can we help?"
              ></textarea>
              {formErrors.message && <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {submitStatus === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : submitStatus === 'success' ? (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Message Sent!
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;