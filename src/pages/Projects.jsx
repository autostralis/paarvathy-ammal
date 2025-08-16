import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, CheckCircle, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const categories = ['All', 'Car Wash Facility', 'Detailing Studio', 'Franchise Setup', 'Service Hub', 'Detailing Center', 'Express Wash'];
  const locations = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const locationMatch = selectedLocation === 'All' || project.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Showcasing 200+ automotive infrastructure projects delivered across Tamil Nadu, Kerala, and Karnataka
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <div className="text-slate-300">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-slate-300">Lakh Sq.ft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Location Filter */}
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Location:</span>
              <div className="flex gap-2">
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location)}
                    className={`${
                      selectedLocation === location
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Completed {project.completedDate}</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-400">
                          <CheckCircle className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium"
                    size="sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project <span className="text-orange-400">Statistics</span>
            </h2>
            <p className="text-xl text-slate-300">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Total Projects</h3>
              <p className="text-slate-400 text-sm">Across all categories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">25L+</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sq.ft Built</h3>
              <p className="text-slate-400 text-sm">Infrastructure delivered</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">45</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Days Avg</h3>
              <p className="text-slate-400 text-sm">Project completion</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">100%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Success Rate</h3>
              <p className="text-slate-400 text-sm">On-time delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join 200+ satisfied clients who have transformed their vision into successful automotive facilities with Autostralis.
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
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;