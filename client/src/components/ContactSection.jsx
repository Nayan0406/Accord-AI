import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitStatus({ type: 'error', message: errorData.message || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* === BACKGROUND IMAGE SECTION === */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center overflow-hidden bg-attachment-scroll md:bg-attachment-scroll"
        style={{
          height: "170vh",
          backgroundImage: "url('/contact-section-img.png')",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Top Center Text - Center for both Mobile and Desktop */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center px-4 -mt-80 w-full">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[6rem] font-bold leading-tight font-poppins">
            <span className="italic font-light">&ldquo;</span>
            Let's Build AI with <br className="hidden md:block" /> Soul - Together.
          </h1>
          
          {/* Mobile & Tablet Social Icons - Below title (hidden on desktop) */}
          <div className="md:hidden flex justify-center items-center gap-4 mt-8">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full"
              >
                <Icon className="text-white w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Icons - Right side (unchanged) */}
        <div className="hidden md:flex absolute right-4 md:right-40 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4 z-10 -mt-60">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full"
            >
              <Icon className="text-white w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      {/* === CONTACT FORM SECTION === */}
      <section className="relative -mt-80 z-20 px-4">
        <div className="max-w-6xl mx-auto p-4 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-2 md:mb-0">
                Contact Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1c1c1e] leading-tight mb-6">
                <span className="text-blue-600">Reach Out</span>, Tune In —
                <br className="hidden md:block" />
                Let's Build the Future in Harmony.
              </h2>
              <div className="w-full max-w-[350px] h-[500px] mx-auto md:mx-0 rounded-xl overflow-hidden md:mt-0">
                <img
                  src="/contact-form-img.png"
                  alt="AI Bot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Form */}
            <div>
              {/* WHY US Box */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="font-semibold text-[#1c1c1e] mb-2">WHY US</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Have an idea, question, or spark of inspiration? Let's connect
                  and explore how we can bring it into reality through AI that
                  understands and elevates.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 mt-30">
                {/* Success/Error Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 border border-green-400 text-green-700' 
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label className="block text-[#1c1c1e] mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none focus:border-blue-600 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`rounded-full px-6 py-3 flex items-center gap-2 font-medium transition ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Leave us a Message'}
                  {!isSubmitting && <GoArrowRight className="text-lg" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;