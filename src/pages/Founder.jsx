import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building, MapPin, Users, Target, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

import founderPic from '../assets/founder_circle.png';
import pic1 from '../assets/Picture1.png';
import pic2 from '../assets/Picture2.png';
import pic3 from '../assets/Picture3.png';
import pic4 from '../assets/Picture4.png';
import pic5 from '../assets/Picture5.png';
import pic6 from '../assets/Picture6.png';
import pic7 from '../assets/Picture7.png';
import pic8 from '../assets/Picture8.png';
import pic9 from '../assets/Picture9.png';
import pic10 from '../assets/Picture10.png';
import pic11 from '../assets/Picture11.png';

import { founderInfo } from '../data/mock';

const Founder = () => {
  const keyAchievements = [
    {
      icon: <Building className="w-8 h-8 text-orange-400" />,
      title: "1200+ Projects",
      description: "High-value projects across multiple sectors",
      highlight: "Including government works, franchise outlets, malls"
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-400" />,
      title: "International Expansion",
      description: "Expanded to Dubai market",
      highlight: "Marking Mangalathu Group's global footprint"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Fast-Track Model",
      description: "30-45 days delivery system",
      highlight: "Revolutionary approach in automotive infrastructure"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-400" />,
      title: "Brand Partnerships",
      description: "Global automotive brands",
      highlight: "Mercedes-Benz, BMW, Mahindra, Hyundai"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Leadership", description: "In infrastructure development" },
    { number: "25L+", label: "Sq.ft Built", description: "Of premium infrastructure" },
    { number: "200+", label: "Auto Facilities", description: "Across South India" },
    { number: "4", label: "Regions", description: "Kerala, Tamil Nadu, Karnataka, Dubai" }
  ];

  const visionPoints = [
    "Transforming automotive infrastructure standards in India",
    "Combining precision engineering with fast-track execution",
    "Creating spaces that inspire confidence and drive profitability",
    "Introducing sustainable construction practices",
    "Building long-term partnerships with global brands"
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <style>{`
        @keyframes ringPulse { 0%,100%{ box-shadow:0 0 0 0 rgba(59,130,246,0.6);} 50%{ box-shadow:0 0 0 8px rgba(59,130,246,0);} }
        .portrait-ring { animation: ringPulse 3s infinite; }

        .client-logo { height:44px; max-width:140px; object-fit:contain; filter:grayscale(100%); opacity:.8; transition:filter .2s ease, opacity .2s ease, transform .2s ease; }
        .client-logo:hover { filter:grayscale(0%); opacity:1; transform:translateY(-2px); }
        .client-track { display:flex; align-items:center; gap:3rem; padding-top:1.5rem; padding-bottom:1.5rem; will-change:transform; animation: marquee 28s linear infinite; }
        .client-track:hover { animation-play-state: paused; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-20" style={{backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-800 px-4 py-2 text-lg font-semibold">
                Founder & Visionary
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Dr. Adarsh Mangalathu
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-semibold">
                {founderInfo.designation}
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {founderInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    Connect With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-2 border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Founder Image & Quick Stats */}
            <div className="space-y-6">
              <div className="mt-0 bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div
                    className="portrait-ring shrink-0"
                    style={{
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid #3b82f6",
                      boxShadow: "0 8px 24px rgba(0,0,0,.4)"
                    }}
                  >
                    <img
                      src={founderPic}
                      alt={`${founderInfo.name} – Founder`}
                      className="w-full h-full object-cover object-[50%_30%]"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{founderInfo.name}</h4>
                    <p className="text-slate-400">{founderInfo.designation}</p>
                    <p className="mt-3 text-slate-300 leading-relaxed">
                      Infrastructure specialist with a decade of execution across automotive &amp; commercial facilities.
                      Focus on fast‑track delivery, SOPs, and brand‑consistent studios.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-2 rounded-xl">
                      <span className="text-2xl font-bold text-white">{founderInfo.experience}</span>
                      <span className="text-orange-100 text-sm font-medium">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Career <span className="text-orange-400">Highlights</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key achievements that transformed automotive infrastructure development in South India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {keyAchievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-orange-600/10 rounded-lg group-hover:bg-orange-600/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{achievement.title}</CardTitle>
                      <p className="text-slate-400">{achievement.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{achievement.highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Achievements */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Star className="w-8 h-8 text-orange-400 mr-3" />
                Major Accomplishments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {founderInfo.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Leadership <span className="text-orange-400">Vision</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Dr. Adarsh's vision extends beyond traditional construction. He believes in creating infrastructure 
                that not only meets technical requirements but also drives business success for clients.
              </p>
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-none text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
                  <p className="text-orange-100 leading-relaxed italic">
                    "Every project is an opportunity to set new standards. We don't just build facilities; 
                    we create platforms for our clients' success."
                  </p>
                  <div className="mt-6 pt-6 border-t border-orange-400/30">
                    <p className="text-orange-200 text-sm">- Dr. Adarsh Mangalathu</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Innovation Focus</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Sustainable construction practices
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Water recycling systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      EV-ready infrastructure
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Smart building technologies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Recognition & <span className="text-orange-400">Impact</span>
            </h2>
            <p className="text-xl text-slate-300">
              Leading transformation in automotive infrastructure across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <Building className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Industry Pioneer</h3>
                <p className="text-slate-300">
                  First to introduce fast-track turnkey model in automotive infrastructure development
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Team Leadership</h3>
                <p className="text-slate-300">
                  Built and leads a team of 100+ specialists across civil, MEP, and project management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Quality Standards</h3>
                <p className="text-slate-300">
                  Established quality benchmarks that are now followed across the automotive sector
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients & Partners – Scrolling Strip */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-700 rounded-2xl overflow-hidden">
            <div className="bg-slate-800/60 px-4 py-3 border-b border-slate-700 text-sm text-slate-300">
              Trusted by brands &amp; partners
            </div>
            <div className="relative overflow-hidden">
              <div className="client-track">
                {/* Set A */}
                <div className="flex items-center gap-12">
                  <img src={pic1}  alt="Client 1"  className="client-logo" />
                  <img src={pic2}  alt="Client 2"  className="client-logo" />
                  <img src={pic3}  alt="Client 3"  className="client-logo" />
                  <img src={pic4}  alt="Client 4"  className="client-logo" />
                  <img src={pic5}  alt="Client 5"  className="client-logo" />
                  <img src={pic6}  alt="Client 6"  className="client-logo" />
                  <img src={pic7}  alt="Client 7"  className="client-logo" />
                  <img src={pic8}  alt="Client 8"  className="client-logo" />
                  <img src={pic9}  alt="Client 9"  className="client-logo" />
                  <img src={pic10} alt="Client 10" className="client-logo" />
                  <img src={pic11} alt="Client 11" className="client-logo" />
                </div>
                {/* Set B (duplicate for seamless loop) */}
                <div className="flex items-center gap-12" aria-hidden="true">
                  <img src={pic1}  alt="" className="client-logo" />
                  <img src={pic2}  alt="" className="client-logo" />
                  <img src={pic3}  alt="" className="client-logo" />
                  <img src={pic4}  alt="" className="client-logo" />
                  <img src={pic5}  alt="" className="client-logo" />
                  <img src={pic6}  alt="" className="client-logo" />
                  <img src={pic7}  alt="" className="client-logo" />
                  <img src={pic8}  alt="" className="client-logo" />
                  <img src={pic9}  alt="" className="client-logo" />
                  <img src={pic10} alt="" className="client-logo" />
                  <img src={pic11} alt="" className="client-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work With a Visionary Leader
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Experience the difference that comes from working with a team led by industry-transforming vision 
            and decade-plus expertise. Let's build something extraordinary together.
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

export default Founder;