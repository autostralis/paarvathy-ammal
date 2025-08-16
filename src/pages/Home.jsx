import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Building, Clock, Award, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroStats, coreStrengths, projects, testimonials } from '../data/mock';

const Home = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % heroStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Automotive Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From bare space to business-ready launch. We deliver turnkey car wash and detailing 
              facilities that perform from day one.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/for-investors">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                For Investors
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/for-manufacturers">
              <Button variant="outline" className="border-2 border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                For Manufacturers
              </Button>
            </Link>
          </div>

          {/* Rotating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => (
              <div key={index} className={`p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm transform transition-all duration-500 ${
                index === currentStatIndex ? 'scale-105 border-orange-500 bg-orange-500/10' : ''
              }`}>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-orange-400">Autostralis</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Autostralis is a premium automotive infrastructure partner, delivering turnkey car wash and 
                detailing facilities from bare space to business‑ready launch. We serve car wash & detailing 
                equipment manufacturers and investors/entrepreneurs with end‑to‑end solutions.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Backed by the <strong className="text-white">Mangalathu Group's decade‑plus expertise</strong> in 
                civil contracting, interiors, and project execution, Autostralis has successfully delivered 
                <strong className="text-orange-400"> 200+ automotive facilities</strong> across Tamil Nadu, Kerala, and Karnataka.
              </p>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 font-semibold rounded-xl">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">What makes us different?</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-orange-400 mr-2" />Single partner from drawings to handover</li>
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-orange-400 mr-2" />OEM‑aligned pits, slopes, utilities & safety</li>
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-orange-400 mr-2" />Brand‑ready interiors and customer experience</li>
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-orange-400 mr-2" />Transparent timelines and cost control</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Service Regions</h3>
                  </div>
                  <p className="text-slate-300">Tamil Nadu • Kerala • Karnataka</p>
                  <p className="text-sm text-slate-400 mt-2">(with capability to mobilize pan‑India on request)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-20">
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
              <Card key={strength.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
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

      {/* Featured Projects Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-orange-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing our latest automotive infrastructure projects across South India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="bg-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-orange-400 font-semibold bg-orange-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-slate-400">{project.completedDate}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-2 text-sm">{project.location}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 font-semibold rounded-xl">
                View All Projects
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
            Ready to Build Your Dream Facility?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            From concept to completion in 30-45 days. Get your free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl">
                <Phone className="mr-2 w-5 h-5" />
                Call +91-9388666777
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl">
                <Mail className="mr-2 w-5 h-5" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;