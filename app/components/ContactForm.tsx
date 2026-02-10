'use client';
import { useState } from 'react';
import { translations } from '../locales/translations';

export default function ContactForm() {
  const t = translations.contact.pl.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(t.apiError);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">{t.name}</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">{t.email}</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">{t.message}</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 disabled:bg-gray-400 transition-colors duration-200"
        >
          {status === 'loading' ? t.sending : t.submit}
        </button>
        {status === 'success' && (
          <p className="text-green-600 text-center">{t.success}</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center">{t.error}</p>
        )}
      </form>
    </div>
  );
} 