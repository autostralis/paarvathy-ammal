import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Wrench, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { forInvestorsServices, forManufacturersServices } from '../data/mock';

const Services = () => {
  const serviceOverview = [
    {
      title: "For Investors & Entrepreneurs",
      description: "Complete turnkey solutions from bare land to grand opening",
      icon: <Users className="w-8 h-8 text-orange-400" />,
      href: "/for-investors",
      services: forInvestorsServices.length,
      timeline: "30-45 days",
      highlight: "Most Popular"
    },
    {
      title: "For Equipment Manufacturers",
      description: "Installation-ready infrastructure that meets OEM specifications",
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      href: "/for-manufacturers",
      services: forManufacturersServices.length,
      timeline: "20-30 days",
      highlight: "Precision Focused"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Planning",
      description: "Understanding your requirements and developing the perfect solution"
    },
    {
      step: 2,
      title: "Design & Approval",
      description: "3D concepts, technical drawings, and regulatory approvals"
    },
    {
      step: 3,
      title: "Construction & Installation",
      description: "Civil works, MEP setup, and equipment integration"
    },
    {
      step: 4,
      title: "Finishing & Handover",
      description: "Interior finishing, branding, testing, and operational handover"
    }
  ];

  const benefits = [
    "Single point of responsibility from concept to completion",
    "Proven track record with 200+ successful projects",
    "Fast-track delivery in 30-45 days",
    "Brand-consistent quality across all projects",
    "Ongoing post-completion support and maintenance",
    "Sustainable solutions with water recycling and EV readiness"
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Complete <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Turnkey Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From civil works to equipment integration, interiors to branding - we handle every aspect 
            of your automotive facility project under one roof.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-slate-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">30-45</div>
              <div className="text-slate-300">Days Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your <span className="text-orange-400">Service Path</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're an investor building your dream facility or a manufacturer needing precision installations, 
              we have specialized solutions for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceOverview.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden">
                {category.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">
                      {category.highlight}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    {category.icon}
                    <div className="text-right text-sm text-slate-400">
                      <div>{category.services} Services</div>
                      <div>{category.timeline}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-6 leading-relaxed">{category.description}</p>
                  <Link to={category.href}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl">
                      Explore Services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Proven <span className="text-orange-400">Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A streamlined 4-step process that ensures quality delivery and transparency at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={step.step} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 text-center group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-orange-400">Autostralis</span>?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-none text-white text-center">
                <CardContent className="p-6">
                  <Building className="w-10 h-10 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-orange-100">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Star className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-orange-400 mb-2">5.0</div>
                  <div className="text-slate-300">Client Rating</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-slate-300">On-Time Delivery</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                  <div className="text-slate-300">States Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What's <span className="text-orange-400">Included</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Building className="w-6 h-6 text-orange-400 mr-3" />
                  Civil & Construction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Site preparation & excavation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Pit construction & slopes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Structural works & flooring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Drainage systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Wrench className="w-6 h-6 text-orange-400 mr-3" />
                  MEP & Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Plumbing & water systems</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Electrical installations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Equipment installation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Safety systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Star className="w-6 h-6 text-orange-400 mr-3" />
                  Finishing & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Interior design & lighting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Branding & signage</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Staff training</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Ongoing support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Choose your path and let us transform your vision into a successful automotive facility. 
            Get a free consultation and detailed project proposal today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/for-investors">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                For Investors
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/for-manufacturers">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl">
                For Manufacturers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;