import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconProps = { size: 20, color: "#403E43" };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#221F26]">Casa Green Energy</h3>
            <p className="text-[#403E43]">
              Leading the way in sustainable energy solutions for a greener tomorrow.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8E9196] hover:text-[#403E43] transition-colors">
                <Twitter {...iconProps} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8E9196] hover:text-[#403E43] transition-colors">
                <Facebook {...iconProps} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8E9196] hover:text-[#403E43] transition-colors">
                <Linkedin {...iconProps} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8E9196] hover:text-[#403E43] transition-colors">
                <Github {...iconProps} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#221F26]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#403E43] hover:text-[#221F26] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#403E43] hover:text-[#221F26] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="#services" className="text-[#403E43] hover:text-[#221F26] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="#projects" className="text-[#403E43] hover:text-[#221F26] transition-colors">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#221F26]">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-[#403E43]">Solar Panel Installation</li>
              <li className="text-[#403E43]">Energy Efficiency Consulting</li>
              <li className="text-[#403E43]">Home Energy Solutions</li>
              <li className="text-[#403E43]">Commercial Solar Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#221F26]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#403E43]">
                <MapPin {...iconProps} />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-[#403E43]">
                <Phone {...iconProps} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-[#403E43]">
                <Mail {...iconProps} />
                <span>contact@casagreen.energy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#8E9196]">
              © {currentYear} Casa Green Energy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-[#8E9196] hover:text-[#403E43] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-[#8E9196] hover:text-[#403E43] transition-colors">
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