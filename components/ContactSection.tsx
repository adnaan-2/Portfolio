"use client";
import { useState } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending failed:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full p-4 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black" />
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Send Me Message
              </>
            )}
          </button>

          {success && (
            <div className="p-4 bg-green-500/20 text-green-500 rounded-lg flex gap-2">
              <CheckCircle className="w-5 h-5" />
              Message sent successfully!
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/20 text-red-500 rounded-lg flex gap-2">
              <XCircle className="w-5 h-5" />
              Failed to send message
            </div>
          )}
        </form>
      </div>
    </section>
  );
}