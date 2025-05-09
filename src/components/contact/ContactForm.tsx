
import { useState, FormEvent } from "react";
import { Send, Check } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, replace this with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {submitted ? (
        <div className="text-center py-8">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <Check className="text-green-600 dark:text-green-400" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formState.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="How can we help you?"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Please provide details about your inquiry..."
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="bg-ministry-purple dark:bg-ministry-gold text-white dark:text-ministry-dark font-medium px-6 py-3 rounded-md shadow-md transition-all hover:bg-ministry-purple/90 dark:hover:bg-ministry-gold/90 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {submitting ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
