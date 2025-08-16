import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      toast({
        title: "Invalid phone",
        description: "Enter a 10-digit mobile number (without +91).",
        variant: "destructive"
      });
      return;
    }
    try {
      const resp = await fetch("https://formspree.io/f/mdkdyvdg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: "+91" + phoneDigits,
          region: formData.region,
          equipment: formData.equipment, // keep optional
          message: formData.message
        })
      });
      if (resp.ok) {
        toast({ title: "Message sent ✅", description: "Thanks! We'll get back within 24 hours." });
        setFormData({ name: '', email: '', phone: '', region: '', equipment: '', message: '' });
      } else {
        toast({ title: "Submit failed", description: "Please try again in a minute.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Network error", description: "Please check your connection and retry.", variant: "destructive" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: contactInfo.phone,
      description: "Mon-Sat, 9:00 AM - 6:00 PM",
      action: `tel:${contactInfo.phone}`,
      color: "bg-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: contactInfo.email,
      description: "We'll respond within 24 hours",
      action: `mailto:${contactInfo.email}`,
      color: "bg-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Areas",
      content: contactInfo.address,
      description: "Pan-India mobilization available",
      color: "bg-orange-600"
    }
  ];

  const projectTypes = [
    'Car Wash Facility',
    'Detailing Studio',
    'Service Center',
    'Franchise Outlet',
    'Multi-Brand Hub',
    'Express Wash',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹25 Lakhs',
    '₹25-50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1-2 Crores',
    'Above ₹2 Crores'
  ];

  const timelineOptions = [
    'Immediate (< 1 month)',
    'Short term (1-3 months)',
    'Medium term (3-6 months)',
    'Long term (6+ months)',
    'Just exploring'
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
            Contact Us
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Let's Build Your
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Dream Facility
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into a successful automotive facility? 
            Get in touch with our experts for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`${method.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  {method.action ? (
                    <a 
                      href={method.action}
                      className="text-orange-400 hover:text-orange-300 font-semibold text-lg block mb-2 transition-colors"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-orange-400 font-semibold text-lg mb-2">{method.content}</p>
                  )}
                  <p className="text-slate-400 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center">
                    <Send className="w-6 h-6 mr-3 text-orange-400" />
                    Get Your Free Consultation
                  </CardTitle>
                  <p className="text-slate-300">Fill out the form below and we'll get back to you within 24 hours with a detailed project proposal.</p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Phone Number *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Project Type *</label>
                        <Select onValueChange={(value) => setFormData({...formData, projectType: value})}>
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-orange-500">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type} className="text-white hover:bg-slate-600">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Location</label>
                        <Input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                          placeholder="City, State"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Budget Range</label>
                        <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-orange-500">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range} className="text-white hover:bg-slate-600">
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Timeline</label>
                      <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-orange-500">
                          <SelectValue placeholder="When do you plan to start?" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-white hover:bg-slate-600">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Project Details</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                        placeholder="Tell us about your vision, specific requirements, site details, or any questions you have..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg font-semibold rounded-xl"
                    >
                      Send Message & Get Quote
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Working Hours */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Working Hours</h3>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Sunday:</strong> By appointment only</p>
                    <p className="text-sm text-slate-400 mt-3">Emergency consultations available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Why Choose Autostralis?</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">200+ Projects</p>
                        <p className="text-slate-400 text-sm">Delivered across South India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">30-45 Days</p>
                        <p className="text-slate-400 text-sm">Fast-track delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">End-to-End</p>
                        <p className="text-slate-400 text-sm">Complete turnkey solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Post Support</p>
                        <p className="text-slate-400 text-sm">Ongoing maintenance & assistance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-orange-500">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Need Immediate Assistance?</h3>
                  <p className="text-orange-100 mb-4 text-sm">Our experts are standing by to help with your project</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: {contactInfo.phone}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;