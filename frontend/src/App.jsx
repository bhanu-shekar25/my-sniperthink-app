import React, { useState, useEffect } from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [slides, setSlides] = useState([]);
  const [features, setFeatures] = useState([]);
  const [pricingPlans, setPricingPlans] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fetch slides, features, and pricing from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [slidesRes, featuresRes, pricingRes] = await Promise.all([
          fetch('http://localhost:5000/api/slides'),
          fetch('http://localhost:5000/api/features'),
          fetch('http://localhost:5000/api/pricing')
        ]);

        const [slidesData, featuresData, pricingData] = await Promise.all([
          slidesRes.json(),
          featuresRes.json(),
          pricingRes.json()
        ]);

        setSlides(slidesData);
        setFeatures(featuresData);
        setPricingPlans(pricingData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('submitting');
      setTimeout(() => {
        console.log("Form submitted:", { name, email, message });
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitStatus(null), 3000);
      }, 1000);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero currentSlide={currentSlide} mockSlides={slides} setCurrentSlide={setCurrentSlide} />
      <Features features={features} darkMode={darkMode} />
      <Pricing pricingPlans={pricingPlans} darkMode={darkMode} />
      <Contact 
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        formErrors={formErrors}
        handleSubmit={handleSubmit}
        submitStatus={submitStatus}
      />
      <Footer />
    </div>
  );
}

export default App;
