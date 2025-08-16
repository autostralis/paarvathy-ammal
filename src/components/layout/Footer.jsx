import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { companyInfo, contactInfo } from '../../data/mock';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'For Investors', href: '/for-investors' },
    { name: 'For Manufacturers', href: '/for-manufacturers' },
    { name: 'Projects', href: '/projects' },
    { name: 'Founder', href: '/founder' }
  ];

  const services = [
    'Civil Construction',
    'MEP Setup',
    'Equipment Integration',
    'Interior Design',
    'Branding',
    'Staff Training'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-xs text-orange-400 font-medium">Part of Mangalathu Group</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {companyInfo.description}. Delivering 200+ projects across Tamil Nadu, Kerala, and Karnataka.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <div className="text-slate-400 hover:text-orange-400 transition-colors duration-200 flex items-center group cursor-pointer">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Working Hours</p>
                  <p className="text-slate-400 text-sm">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 rounded-lg border border-slate-700">
              <h5 className="text-white font-medium mb-2">Ready to Start Your Project?</h5>
              <p className="text-slate-400 text-sm mb-4">Get a free consultation and quote today.</p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2025 {companyInfo.name}. Part of Mangalathu Group. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <button className="hover:text-orange-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-orange-400 transition-colors">Terms of Service</button>
              <span className="text-orange-400 font-medium">Built with Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;