
import { useState, FormEvent } from 'react';
import { EventProps } from './EventCard';
import { Check } from 'lucide-react';

interface EventRegistrationFormProps {
  event: EventProps;
}

const EventRegistrationForm = ({ event }: EventRegistrationFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    notes: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, replace this with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-8">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <Check className="text-green-600 dark:text-green-400" size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Registration Complete!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for registering for "{event.title}". A confirmation has been sent to your email.
          </p>
          <p className="text-sm text-muted-foreground">
            If you have any questions, please contact us at <a href="mailto:info@godsvesselsministry.org" className="text-ministry-purple dark:text-ministry-gold hover:underline">info@godsvesselsministry.org</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-ministry-dark/50 rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Register for this Event</h3>
      
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your full name"
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
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="attendees" className="block text-sm font-medium mb-2">
              Number of Attendees*
            </label>
            <select
              id="attendees"
              name="attendees"
              required
              value={formState.attendees}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
              <option value="more than 10">More than 10</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="notes" className="block text-sm font-medium mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formState.notes}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Any special requests or information we should know..."
          />
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-ministry-purple dark:bg-ministry-gold text-white dark:text-ministry-dark font-medium px-6 py-3 rounded-md shadow transition-all hover:bg-ministry-purple/90 dark:hover:bg-ministry-gold/90 disabled:opacity-70"
          >
            {submitting ? 'Submitting...' : 'Register Now'}
          </button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          By registering, you agree to share your contact information with God's Vessels International Ministry for event-related communications.
        </p>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
