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
      const response = await fetch('https://accord-ai-backend-murex.vercel.app/api/contacts', {
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
    <div className="relative w-full overflow-hidden bg-white">
      {/* === BACKGROUND IMAGE SECTION === */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          height: "170vh",
          backgroundImage: "url('/contact-section-img.png')",
          backgroundAttachment: "scroll",
        }}
      >
        {/* ✅ Fixed Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />

        {/* Centered Text */}
        <div className="absolute top-[60%] sm:top-[55%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center px-4 -mt-90 sm:-mt-80 md:-mt-50 w-full">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold leading-tight font-poppins text-center">
            <span className="italic font-light">&ldquo;</span>
            Let's Build AI with <br className="hidden md:block" /> Soul - Together.
          </h1>

          {/* Mobile Social Icons */}
          <div className="sm:hidden flex justify-center items-center gap-4 mt-8">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
                <Icon className="text-white w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Tablet Social Icons - Below Title in Row */}
          <div className="hidden sm:flex lg:hidden flex-row justify-center items-center gap-6 mt-16">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:bg-white/10 transition-colors"
              >
                <Icon className="text-white w-7 h-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex absolute right-4 lg:right-40 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4 z-10 -mt-50 lg:mr-30">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
              <Icon className="text-white w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      {/* === CONTACT FORM SECTION === */}
      <section className="relative -mt-100 z-20 px-4">
        <div className="max-w-6xl mx-auto p-4 md:p-10 md:-mt-80">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
              <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-2 md:mb-0">
                Contact Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1c1c1e] leading-tight mb-6 text-center md:text-left">
                <span className="text-blue-600">Reach Out</span>, Tune In —<br className="hidden md:block" />
                Let's Build the Future in Harmony.
              </h2>
              <div className="w-full max-w-[350px] h-[400px] sm:h-[450px] md:h-[500px] mx-auto md:mx-0 rounded-xl overflow-hidden md:mt-0">
                <img
                  src="/contact-form-img.png"
                  alt="AI Bot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="flex flex-col items-center md:items-start order-1 md:order-2">
              {/* WHY US Box */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6 text-center md:text-left w-full">
                <h3 className="font-semibold text-[#1c1c1e] mb-2">WHY US</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center md:text-left">
                  Have an idea, question, or spark of inspiration? Let's connect
                  and explore how we can bring it into reality through AI that
                  understands and elevates.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 mt-20 w-full">
                {/* Success/Error Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                    ? 'bg-green-100 border border-green-400 text-green-700'
                    : 'bg-red-100 border border-red-400 text-red-700'
                    }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label className="block text-[#1c1c1e] mb-1 text-center md:text-left">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors text-center md:text-left"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1 text-center md:text-left">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors text-center md:text-left"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1 text-center md:text-left">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10,}"
                    inputMode="numeric"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 focus:border-blue-600 transition-colors text-center md:text-left"
                  />
                </div>

                <div>
                  <label className="block text-[#1c1c1e] mb-1 text-center md:text-left">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none focus:border-blue-600 transition-colors text-center md:text-left"
                  ></textarea>
                </div>

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-full px-6 py-3 flex items-center gap-2 font-medium transition cursor-pointer ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Leave us a Message'}
                    {!isSubmitting && <GoArrowRight className="text-lg" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
