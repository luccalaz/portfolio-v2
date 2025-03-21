import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Sections } from "@/tools/data.model";

const Contact = ({ sections }: { sections: Sections }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
    setErrors(prevState => ({ ...prevState, [id]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check for captcha token
    if (!captchaToken) {
      setErrors({ captcha: 'Please complete the CAPTCHA' });
      return;
    }

    setStatus('pending');

    try {
      const response = await fetch('/api/mailgun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Include the captcha token in the request body
        body: JSON.stringify({ ...formData, captchaToken })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Called by reCAPTCHA when the user successfully completes the challenge
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <section id="contact" ref={sections.contact}>
      <div className="container my-12 mb-24">
        <div className="p-2 flex flex-col lg:flex-row lg:space-x-24">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-semibold mb-4 border-t-8 border-blue-700 pt-5">
              Get in touch with me, and let’s chat
            </h2>
            <p className="text-gray-300 mb-8">
              I’d love to talk more about my skills and how I can be useful to you or your team!
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-2xl" />
                <span>luccalazza@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-2xl" />
                <span>luccalaz</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-2xl" />
                <span>linkedin.com/in/luccalaz</span>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg mt-12 lg:mt-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-2 rounded bg-neutral-800 text-white ${errors.name ? 'border border-red-500' : 'focus:ring-blue-900'}`}
                  placeholder="Your name"
                  disabled={status === 'pending'}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-2 rounded bg-neutral-800 ${errors.email ? 'border border-red-500' : 'focus:ring-blue-500'}`}
                  placeholder="Your email"
                  disabled={status === 'pending'}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  className={`w-full p-2 h-32 rounded bg-neutral-800 ${errors.message ? 'border border-red-500' : 'focus:ring-blue-500'}`}
                  placeholder="Your message"
                  style={{ resize: "none" }}
                  disabled={status === 'pending'}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* reCAPTCHA widget */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "0"}
                onChange={handleCaptchaChange}
              />

              {/* Submit button */}
              <div className='flex flex-col md:flex-row gap-5'>
                <button
                  type="submit"
                  disabled={status === 'pending'}
                  className="py-2 px-5 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold transition"
                >
                  {status === 'pending' ? "Sending..." : "Send message"}
                </button>

                {/* General form status feedback */}
                <div className='flex items-center'>
                  {status === 'success' && <p className="text-green-400">Email sent successfully!</p>}
                  {status === 'error' && <p className="text-red-400">Error sending email. Please try again later.</p>}
                  {errors.captcha && <p className="text-red-400">{errors.captcha}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;