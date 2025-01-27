import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-casa-blue">Casa Green Energy</h3>
            <p className="text-gray-600">
              Leading the way in sustainable energy solutions for a greener tomorrow.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-casa-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-casa-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-casa-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-casa-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-casa-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-casa-blue transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-600 hover:text-casa-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="#projects" className="text-gray-600 hover:text-casa-blue transition-colors">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-blue">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Solar Panel Installation</li>
              <li className="text-gray-600">Energy Efficiency Consulting</li>
              <li className="text-gray-600">Home Energy Solutions</li>
              <li className="text-gray-600">Commercial Solar Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-casa-blue">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-casa-blue" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-casa-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-casa-blue" />
                <span>contact@casagreen.energy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Casa Green Energy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-casa-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-casa-blue transition-colors">
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