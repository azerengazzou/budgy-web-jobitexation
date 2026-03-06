import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
          <Mail className="w-12 h-12 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t.newsletter.title}
        </h2>

        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          {t.newsletter.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-blue-400 focus:outline-none text-gray-900 text-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {t.newsletter.cta}
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg animate-fade-in">
            <CheckCircle className="w-5 h-5" />
            {t.newsletter.success}
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-500 text-white px-6 py-4 rounded-xl inline-block shadow-lg animate-fade-in">
            {t.newsletter.error}
          </div>
        )}

        {status === 'idle' && (
          <p className="text-blue-200 text-sm">
            {t.newsletter.privacy}
          </p>
        )}
      </div>
    </section>
  );
}
