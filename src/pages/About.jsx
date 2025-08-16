import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building, Award, Target, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { coreStrengths, testimonials, industryCredibility } from '../data/mock';

const About = () => {
  const visionMission = {
    vision: "To set the benchmark for automotive care infrastructure in India and beyond — combining precision engineering, fast-track execution, and brand-focused design to create spaces that inspire confidence and drive profitability.",
    mission: [
      "Deliver installation-ready sites that align perfectly with equipment specifications and brand standards.",
      "Provide investors and entrepreneurs with turnkey business-ready studios for rapid ROI.",
      "Ensure every project meets global quality standards while being optimized for local operating conditions.",
      "Integrate sustainable solutions such as water recycling and EV readiness into every build.",
      "Maintain a client-first approach with transparent timelines, cost control, and long-term support."
    ]
  };

  const companyStats = [
    { number: "200+", label: "Projects Delivered", description: "Across Tamil Nadu, Kerala & Karnataka" },
    { number: "25L+", label: "Sq.ft Built", description: "Of premium infrastructure" },
    { number: "10+", label: "Years Experience", description: "Mangalathu Group expertise" },
    { number: "3", label: "States", description: "With expansion capabilities" }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
                About Autostralis
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Premium <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Automotive Infrastructure</span> Partner
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Autostralis is a premium automotive infrastructure partner, delivering turnkey car wash and 
                detailing facilities from bare space to business‑ready launch. We serve car wash & detailing 
                equipment manufacturers and investors/entrepreneurs with end‑to‑end solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/for-investors">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    For Investors
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-orange-400">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Backed by the <strong className="text-white">Mangalathu Group's decade‑plus expertise</strong> in 
                  civil contracting, interiors, and project execution, Autostralis has successfully delivered 
                  <strong className="text-orange-400"> 200+ automotive facilities</strong> across Tamil Nadu, Kerala, and Karnataka.
                </p>
                <p>
                  What sets us apart is our understanding that every automotive facility is more than just a building—
                  it's a business investment that needs to deliver returns from day one. That's why we focus on creating 
                  spaces that not only look impressive but also function flawlessly and attract customers.
                </p>
                <p>
                  From small independent car wash outlets to large multi-brand service hubs, we've built facilities 
                  for global brands like <strong className="text-white">Mercedes-Benz, BMW, Mahindra, Hyundai, 3M Car Care, 
                  and Rocket Car Wash</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-none text-white">
                <CardContent className="p-6">
                  <Building className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">What Makes Us Different?</h3>
                  <ul className="space-y-2 text-orange-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      Single partner from drawings to handover
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      OEM‑aligned pits, slopes, utilities & safety
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      Brand‑ready interiors and customer experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      Transparent timelines and cost control
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Service Regions</h3>
                  <p className="text-slate-300 mb-2">Tamil Nadu • Kerala • Karnataka</p>
                  <p className="text-sm text-slate-400">(with capability to mobilize pan‑India on request)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Vision & <span className="text-orange-400">Mission</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Target className="w-8 h-8 text-orange-400 mr-3" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-300 leading-relaxed italic">
                  "{visionMission.vision}"
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Award className="w-8 h-8 text-orange-400 mr-3" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {visionMission.mission.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Core Strengths</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              What sets us apart in delivering premium automotive infrastructure solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreStrengths.map((strength) => (
              <Card key={strength.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{strength.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Credibility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry <span className="text-orange-400">Credibility</span>
            </h2>
            <p className="text-xl text-slate-300">Trusted by leading automotive brands and manufacturers</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {industryCredibility.map((brand, index) => (
              <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-h-12 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our <span className="text-orange-400">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.designation}</p>
                      <p className="text-orange-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join 200+ satisfied clients who have built successful automotive facilities with Autostralis. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/for-investors">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;