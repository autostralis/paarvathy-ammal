import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Settings, Building, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { forManufacturersServices } from '../data/mock';

const ForManufacturers = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "OEM Specifications",
      description: "Installation-ready sites that align perfectly with equipment specifications"
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "Precision Installation",
      description: "Professional installation with control systems and comprehensive testing"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      title: "Quality Assurance",
      description: "Reduced after-sales issues and protected brand reputation"
    },
    {
      icon: <Building className="w-8 h-8 text-orange-400" />,
      title: "Complete Documentation",
      description: "Technical drawings, manuals, and training documentation"
    }
  ];

  const processSteps = [
    { step: 1, title: "Site Assessment", description: "Detailed site evaluation and technical requirements" },
    { step: 2, title: "Civil Planning", description: "Pit construction, slopes, drainage, and foundations" },
    { step: 3, title: "MEP Installation", description: "Plumbing, electrical, and utility setup" },
    { step: 4, title: "Equipment Integration", description: "Professional installation and control systems" },
    { step: 5, title: "Testing & Documentation", description: "Comprehensive testing and handover" }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
              For Equipment Manufacturers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Your Installation-Ready
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Infrastructure Partner
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We help car wash and detailing equipment manufacturers deliver installation-ready bays 
              on time and to spec — reducing after-sales issues and protecting brand reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-2 border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precision <span className="text-orange-400">Installation Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every aspect of infrastructure development designed to meet exact OEM specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forManufacturersServices.map((service, index) => (
              <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-orange-400 border-orange-400/50">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <Wrench className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Installation Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A systematic 5-step approach ensuring precise installation and seamless handover
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-orange-500 h-full"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                            {step.step}
                          </div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-slate-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-900 relative z-10"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Partner with <span className="text-orange-400">Autostralis</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">OEM Alignment</h3>
                    <p className="text-slate-300">Perfect adherence to equipment specifications, reducing compatibility issues and warranty claims.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                    <p className="text-slate-300">Expert installation team with experience in automotive equipment integration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Brand Protection</h3>
                    <p className="text-slate-300">Quality installations that protect and enhance your brand reputation in the market.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Documentation & Support</h3>
                    <p className="text-slate-300">Complete technical documentation and ongoing support for maintenance and upgrades.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-none text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-orange-100">Specification Compliance</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">20-30</div>
                  <div className="text-slate-300">Days Installation</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">200+</div>
                  <div className="text-slate-300">Installations Done</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-slate-300">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Leading <span className="text-orange-400">Brands</span>
            </h2>
            <p className="text-xl text-slate-300">Working with global automotive brands and equipment manufacturers</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
            {['Mercedes-Benz', 'BMW', 'Mahindra', 'Hyundai', '3M Car Care', 'Rocket Car Wash', 'Detailing Wolves'].map((brand, index) => (
              <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-slate-400 text-center text-sm font-medium">{brand}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-6">
              Join the network of satisfied manufacturers who trust Autostralis for precision installations
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 font-semibold rounded-xl">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Streamline Your Installations?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Partner with Autostralis to ensure your equipment is installed with precision, 
            reducing after-sales issues and protecting your brand reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                Discuss Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl">
                View Installations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForManufacturers;