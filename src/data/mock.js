
// Mock data for Autostralis website

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

export const companyInfo = {
  name: "Autostralis",
  tagline: "Premium Automotive Infrastructure Partner",
  description: "Delivering turnkey car wash and detailing facilities from bare space to business-ready launch",
  phone: "+91-9388666777",
  email: "contact@autostralis.com",
  website: "www.autostralis.com",
  address: "Tamil Nadu • Kerala • Karnataka"
};

export const heroStats = [
  { number: "200+", label: "Projects Delivered", description: "Automotive facilities across South India" },
  { number: "30-45", label: "Days Delivery", description: "Launch-ready facilities in record time" },
  { number: "3", label: "States", description: "Tamil Nadu, Kerala & Karnataka" },
  { number: "10+", label: "Years Experience", description: "Mangalathu Group expertise" }
];

export const coreStrengths = [
  {
    id: 1,
    title: "End-to-End Execution",
    description: "Civil, MEP, equipment integration, interiors, branding, SOPs - everything under one roof",
    icon: "🏗️"
  },
  {
    id: 2,
    title: "Fast-Track Delivery",
    description: "Launch-ready facilities in 30–45 days with transparent timelines",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Proven Expertise",
    description: "200+ projects delivered in the automotive sector with quality assurance",
    icon: "✅"
  },
  {
    id: 4,
    title: "Brand Consistency",
    description: "Uniform quality across multiple sites maintaining brand standards",
    icon: "🎯"
  },
  {
    id: 5,
    title: "Sustainability Focus",
    description: "Eco-friendly materials, water recycling, EV-ready infrastructure",
    icon: "🌱"
  },
  {
    id: 6,
    title: "Client-First Approach",
    description: "Transparent pricing, cost control, and long-term support",
    icon: "🤝"
  }
];

export const forInvestorsServices = [
  {
    id: 1,
    title: "Feasibility & Approvals",
    description: "Complete site inspections, regulatory approvals, and project viability assessment",
    features: ["Site evaluation", "Regulatory compliance", "ROI projections", "Risk assessment"]
  },
  {
    id: 2,
    title: "Concept Design & 3D Planning",
    description: "Detailed layouts, 3D renderings, and brand integration visualization",
    features: ["3D modeling", "Brand integration", "Layout optimization", "Customer flow design"]
  },
  {
    id: 3,
    title: "Civil Construction",
    description: "Complete structural work including pit construction and specialized flooring",
    features: ["Pit construction", "Structural work", "Specialized flooring", "Drainage systems"]
  },
  {
    id: 4,
    title: "MEP & Utilities Setup",
    description: "Water systems, drainage, electrical work, and safety installations",
    features: ["Plumbing systems", "Electrical setup", "Safety systems", "Utility connections"]
  },
  {
    id: 5,
    title: "Equipment Integration",
    description: "Professional installation of wash bays, steam systems, and extraction equipment",
    features: ["Wash bay installation", "Steam systems", "Extraction equipment", "Control systems"]
  },
  {
    id: 6,
    title: "Interior Finishing & Branding",
    description: "Complete interior design, lighting, finishes, and customer lounges",
    features: ["Interior design", "Lighting systems", "Custom finishes", "Branded environments"]
  },
  {
    id: 7,
    title: "Testing & Quality Checks",
    description: "Comprehensive testing including vehicle trial runs and safety verification",
    features: ["System testing", "Trial runs", "Safety checks", "Quality assurance"]
  },
  {
    id: 8,
    title: "Staff Training & SOPs",
    description: "Complete operational training and standard operating procedures",
    features: ["Staff training", "SOPs development", "Service workflows", "Best practices"]
  },
  {
    id: 9,
    title: "Post-Completion Support",
    description: "Ongoing maintenance support, inspections, and facility upgrades",
    features: ["Maintenance support", "Regular inspections", "Upgrades", "Technical assistance"]
  }
];

export const forManufacturersServices = [
  {
    id: 1,
    title: "Civil Planning & Pit Construction",
    description: "Precise site drawings, pit construction, slope & drainage design, and foundations",
    features: ["Site drawings", "Pit construction", "Slope design", "Foundation work"]
  },
  {
    id: 2,
    title: "MEP & Utilities Setup",
    description: "Complete plumbing, oil trap, drainage, electrical, and safety installations",
    features: ["Plumbing systems", "Oil trap installation", "Electrical work", "Safety compliance"]
  },
  {
    id: 3,
    title: "Equipment Integration",
    description: "Professional installations, control systems, and comprehensive testing",
    features: ["Equipment installation", "Control systems", "System testing", "Performance verification"]
  },
  {
    id: 4,
    title: "Interiors & Branding",
    description: "Specialized flooring, wall treatments, lighting, and branded signage",
    features: ["Flooring solutions", "Wall treatments", "Lighting design", "Brand signage"]
  },
  {
    id: 5,
    title: "Handover & Documentation",
    description: "Complete technical drawings, manuals, training, and documentation",
    features: ["Technical drawings", "Operation manuals", "Staff training", "Documentation"]
  },
  {
    id: 6,
    title: "Post-Completion Support",
    description: "Ongoing technical support, inspections, and system upgrades",
    features: ["Technical support", "Regular inspections", "System upgrades", "Maintenance"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Premium Car Wash Hub - Chennai",
    category: "Car Wash Facility",
    location: "Chennai, Tamil Nadu",
    completedDate: "2024",
    description: "State-of-the-art car wash facility with 6 bays, premium interiors, and customer lounge",
    features: ["6 wash bays", "Customer lounge", "Premium interiors", "Water recycling system"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  },
  {
    id: 2,
    title: "Detailing Studio - Kochi",
    category: "Detailing Studio",
    location: "Kochi, Kerala",
    completedDate: "2024",
    description: "High-end detailing studio with specialized equipment and controlled environment",
    features: ["Climate controlled", "Specialized equipment", "Premium finishing", "Customer viewing area"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  },
  {
    id: 3,
    title: "Franchise Outlet - Bangalore",
    category: "Franchise Setup",
    location: "Bangalore, Karnataka",
    completedDate: "2024",
    description: "Turnkey franchise outlet with branded interiors and complete operational setup",
    features: ["Branded interiors", "Complete setup", "Staff training", "Operational handover"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  },
  {
    id: 4,
    title: "Multi-Brand Service Hub - Coimbatore",
    category: "Service Hub",
    location: "Coimbatore, Tamil Nadu",
    completedDate: "2023",
    description: "Large-scale service hub catering to multiple automotive brands with advanced infrastructure",
    features: ["Multi-brand capability", "Advanced infrastructure", "Large capacity", "Brand compliance"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  },
  {
    id: 5,
    title: "Premium Detailing Center - Thiruvananthapuram",
    category: "Detailing Center",
    location: "Thiruvananthapuram, Kerala",
    completedDate: "2023",
    description: "Luxury detailing center with specialized bays and premium customer experience",
    features: ["Luxury interiors", "Specialized bays", "Premium experience", "Advanced systems"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  },
  {
    id: 6,
    title: "Express Car Wash - Mysore",
    category: "Express Wash",
    location: "Mysore, Karnataka",
    completedDate: "2023",
    description: "High-throughput express car wash facility with automated systems",
    features: ["Automated systems", "High throughput", "Efficient design", "Quick service"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Franchise Owner",
    company: "Chennai Car Care",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Autostralis delivered our franchise facility in just 35 days. The quality of work and attention to detail is exceptional. Our ROI timeline has been significantly improved."
  },
  {
    id: 2,
    name: "Priya Nair",
    designation: "Business Owner",
    company: "Kochi Detailing Hub",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "From concept to completion, Autostralis managed everything seamlessly. The staff training and operational handover were particularly impressive."
  },
  {
    id: 3,
    name: "Suresh Reddy",
    designation: "Equipment Manufacturer",
    company: "CarTech Solutions",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Working with Autostralis has been a game-changer for our installations. Their precision and adherence to specifications are unmatched."
  }
];

export const founderInfo = {
  name: "Dr. Adarsh Mangalathu",
  designation: "Founder & Managing Director",
  company: "Mangalathu Group",
  image: "/api/placeholder/400/500",
  bio: "Dr. Adarsh Mangalathu is a visionary entrepreneur and infrastructure specialist who has transformed the way automotive and commercial facilities are built in India. With over a decade of leadership, he has steered the Mangalathu Group to become a market leader in automotive infrastructure.",
  achievements: [
    "Spearheaded South India's most advanced automotive care facilities for global brands like Mercedes-Benz, BMW, Mahindra, Hyundai",
    "Delivered over 25 lakh sq.ft. of infrastructure including government works, franchise outlets, malls, and service hubs",
    "Expanded Mangalathu Group's presence to Dubai, marking its international footprint",
    "Developed a fast-track turnkey model capable of delivering operational facilities within 30–45 days",
    "Introduced eco-friendly construction practices such as water recycling systems, EV charging points, and sustainable materials"
  ],
  experience: "10+ Years",
  projects: "1200+",
  regions: "Kerala, Tamil Nadu, Karnataka, Dubai"
};

export const industryCredibility = [
  { name: "Brand 1",  logo: pic1 },
  { name: "Brand 2",  logo: pic2 },
  { name: "Brand 3",  logo: pic3 },
  { name: "Brand 4",  logo: pic4 },
  { name: "Brand 5",  logo: pic5 },
  { name: "Brand 6",  logo: pic6 },
  { name: "Brand 7",  logo: pic7 },
  { name: "Brand 8",  logo: pic8 },
  { name: "Brand 9",  logo: pic9 },
  { name: "Brand 10", logo: pic10 },
  { name: "Brand 11", logo: pic11 }
];

export const contactInfo = {
  address: "Tamil Nadu • Kerala • Karnataka",
  phone: "+91-9388666777",
  email: "contact@autostralis.com",
  website: "www.autostralis.com",
  workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM"
};