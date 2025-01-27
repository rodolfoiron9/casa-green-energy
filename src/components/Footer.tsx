import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-casa-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-casa-gold">Casa Green Energy</h3>
            <p className="text-sm text-gray-300">
              Leading the way in sustainable energy solutions for a greener tomorrow.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-casa-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-casa-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-casa-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-casa-gold transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-casa-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-casa-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="#services" className="text-sm hover:text-casa-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="#projects" className="text-sm hover:text-casa-gold transition-colors">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-gold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Solar Panel Installation</li>
              <li className="text-sm">Energy Efficiency Consulting</li>
              <li className="text-sm">Home Energy Solutions</li>
              <li className="text-sm">Commercial Solar Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-casa-gold" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-casa-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-casa-gold" />
                <span>contact@casagreen.energy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {currentYear} Casa Green Energy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-300 hover:text-casa-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-300 hover:text-casa-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;