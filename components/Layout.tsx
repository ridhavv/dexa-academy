import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Us', href: '#/about' },
    { name: 'Specialisations', href: '#/specialisations' },
    { name: 'Success Stories', href: '#/success-stories' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            DEXA<span className="text-amber-500">ACADEMY</span>
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#/enroll" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-200 transition-all transform hover:scale-105">
          Enroll Now
        </a>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-sm">D</div>
              <span className="text-xl font-bold text-white tracking-tight">DEXA ACADEMY</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Empowering global young minds with the ancient wisdom of Vedic Maths and modern communication excellence.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/dexaacad" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-amber-500 transition-colors p-2 rounded-full" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/dexaacademy" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-amber-500 transition-colors p-2 rounded-full" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/917976959913" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-amber-500 transition-colors p-2 rounded-full" aria-label="WhatsApp">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.472 3.527C18.224 1.278 15.297 0 12.197 0 5.529 0 0.101 5.429 0.101 12.097c0 2.133 0.557 4.218 1.618 6.055L0 24l6.006-1.576c1.771 0.967 3.769 1.476 5.802 1.476h0.005c6.667 0 12.096-5.429 12.096-12.097 0-3.101-1.277-6.027-3.526-8.276zM12.197 22.094h-0.004c-1.804 0-3.575-0.486-5.121-1.403l-0.367-0.218-3.806 0.999 1.015-3.707-0.239-0.38c-1.007-1.602-1.539-3.454-1.539-5.37 0-5.546 4.515-10.061 10.065-10.061 2.688 0 5.212 1.047 7.111 2.947s2.947 4.423 2.947 7.111c-0.001 5.548-4.515 10.062-10.062 10.062zm5.521-7.526c-0.303-0.152-1.792-0.885-2.07-0.985-0.278-0.101-0.48-0.152-0.683 0.152-0.203 0.303-0.785 0.985-0.961 1.186-0.176 0.203-0.353 0.227-0.656 0.076-0.303-0.152-1.278-0.47-2.434-1.503-0.899-0.802-1.507-1.793-1.683-2.096-0.176-0.303-0.019-0.466 0.132-0.617 0.136-0.135 0.303-0.354 0.455-0.53 0.152-0.177 0.203-0.303 0.304-0.506 0.101-0.202 0.05-0.379-0.025-0.53-0.076-0.152-0.683-1.645-0.935-2.252-0.246-0.591-0.497-0.51-0.683-0.51-0.176-0.008-0.379-0.008-0.581-0.008-0.203 0-0.531 0.076-0.809 0.379s-1.06 1.037-1.06 2.527c0 1.491 1.086 2.932 1.237 3.135 0.152 0.202 2.137 3.259 5.18 4.577 0.723 0.313 1.287 0.5 1.726 0.638 0.726 0.232 1.387 0.199 1.909 0.121 0.582-0.087 1.792-0.733 2.045-1.441 0.252-0.708 0.252-1.314 0.176-1.441-0.075-0.126-0.277-0.202-0.581-0.354z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#/" className="hover:text-amber-400 transition-colors text-sm">Home</a></li>
              <li><a href="#/about" className="hover:text-amber-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#/specialisations" className="hover:text-amber-400 transition-colors text-sm">Specialisations</a></li>
              <li><a href="#/success-stories" className="hover:text-amber-400 transition-colors text-sm">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span>📧</span>
                <div>
                  <p className="text-slate-400">Email</p>
                  <a href="mailto:contact@dexaacademy.com" className="text-amber-400 hover:text-amber-300">contact@dexaacademy.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span>📞</span>
                <div>
                  <p className="text-slate-400">Phone</p>
                  <a href="tel:+917976959913" className="text-amber-400 hover:text-amber-300">+91 79769 59913</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span>💬</span>
                <div>
                  <p className="text-slate-400">WhatsApp</p>
                  <a href="https://wa.me/917976959913" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Chat on WhatsApp</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <p className="text-sm text-slate-500">&copy; {currentYear} Dexa Academy. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-amber-400">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400">Terms of Service</a>
              <a href="#" className="hover:text-amber-400">Cookie Policy</a>
            </div>
          </div>
          <p className="text-center text-xs text-slate-600">
            Designed & Developed by Dexa Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};