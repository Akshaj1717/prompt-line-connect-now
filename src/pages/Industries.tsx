
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      name: "Repair & Cleaning Services",
      description: "Handle emergency calls, schedule appointments, and provide instant quotes",
      benefits: ["24/7 emergency response", "Appointment scheduling", "Service area coverage", "Quote collection"],
      examples: "Plumbing, HVAC, House Cleaning, Appliance Repair"
    },
    {
      name: "Contractors", 
      description: "Capture leads, schedule estimates, and manage project inquiries",
      benefits: ["Lead capture while on job sites", "Estimate scheduling", "Project inquiry management", "Material availability updates"],
      examples: "Construction, Roofing, Electrical, Landscaping"
    },
    {
      name: "Automotive Services",
      description: "Schedule service appointments, handle warranty calls, and manage parts inquiries", 
      benefits: ["Service appointment booking", "Warranty information", "Parts availability", "Pickup/delivery coordination"],
      examples: "Auto Repair, Oil Change, Tire Shops, Car Washes"
    },
    {
      name: "Transportation Services",
      description: "Book rides, coordinate logistics, and handle customer inquiries",
      benefits: ["Real-time booking", "Route coordination", "Customer updates", "Special request handling"],
      examples: "Limo Services, Moving Companies, Taxi Services, Delivery"
    },
    {
      name: "Restaurants & Food Service", 
      description: "Take orders, handle reservations, and provide menu information",
      benefits: ["Order taking", "Reservation management", "Menu information", "Delivery coordination"],
      examples: "Pizza Shops, Catering, Fine Dining, Food Trucks"
    },
    {
      name: "Beauty & Personal Care",
      description: "Book appointments, handle cancellations, and provide service information",
      benefits: ["Appointment booking", "Cancellation management", "Service descriptions", "Availability updates"],
      examples: "Hair Salons, Nail Spas, Barber Shops, Massage Therapy"
    },
    {
      name: "Health & Wellness",
      description: "Schedule sessions, handle memberships, and provide class information",
      benefits: ["Class scheduling", "Membership inquiries", "Personal training bookings", "Facility information"],
      examples: "Gyms, Yoga Studios, Spas, Physical Therapy"
    },
    {
      name: "Childcare & Education",
      description: "Handle enrollments, schedule tours, and manage parent communications",
      benefits: ["Enrollment inquiries", "Tour scheduling", "Program information", "Parent communications"],
      examples: "Daycare Centers, After-school Programs, Tutoring, Summer Camps"
    },
    {
      name: "Professional Services",
      description: "Schedule consultations, handle client inquiries, and manage appointments",
      benefits: ["Consultation scheduling", "Service explanations", "Document requests", "Follow-up coordination"],
      examples: "Insurance Agents, Accountants, Financial Advisors, Real Estate"
    },
    {
      name: "Legal Services",
      description: "Screen potential clients, schedule consultations, and handle urgent matters",
      benefits: ["Client screening", "Consultation booking", "Urgent matter handling", "Document collection"],
      examples: "Law Firms, Notaries, Mediators, Legal Consultants"
    },
    {
      name: "Hospitality",
      description: "Handle reservations, provide information, and manage guest services",
      benefits: ["Reservation management", "Property information", "Guest services", "Local recommendations"],
      examples: "Hotels, Bed & Breakfasts, Vacation Rentals, Event Venues"
    },
    {
      name: "Creative & Marketing",
      description: "Capture project inquiries, schedule consultations, and handle client communication",
      benefits: ["Project inquiry capture", "Portfolio discussions", "Timeline coordination", "Client onboarding"],
      examples: "Web Design, Marketing Agencies, Photography, Graphic Design"
    },
    {
      name: "E-commerce & Tech",
      description: "Handle customer support, process orders, and manage technical inquiries",
      benefits: ["Order support", "Technical assistance", "Return processing", "Product information"],
      examples: "Online Stores, Software Companies, Tech Support, IT Services"
    },
    {
      name: "Consulting & Freelancing",
      description: "Screen prospects, schedule discovery calls, and manage project inquiries",
      benefits: ["Prospect screening", "Discovery call scheduling", "Service explanations", "Project scoping"],
      examples: "Business Consultants, Freelancers, Coaches, Specialists"
    },
    {
      name: "General Office & Other",
      description: "Handle general inquiries, schedule meetings, and manage communications",
      benefits: ["General inquiry handling", "Meeting scheduling", "Information distribution", "Call routing"],
      examples: "Professional Offices, Service Businesses, Non-profits, Startups"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">Prompt Line</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link>
              <Link to="/industries" className="text-blue-600 font-medium">Industries</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Try It Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Tailored for Your Industry
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prompt Line Works for
            <span className="text-blue-600"> Every Business</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From service businesses to professional offices, our AI adapts to your industry's unique needs
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-lg">{industry.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 italic">{industry.examples}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Prompt Line's AI adapts to any business type. Let us show you how it works for yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600 text-lg px-8 py-4">
              Schedule Custom Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Start Free Trial
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">Custom setup available for specialized industries</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Prompt Line</h3>
              <p className="text-gray-400">AI-powered call answering for growing businesses</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/how-it-works" className="text-gray-400 hover:text-white block transition-colors">How It Works</Link>
                <Link to="/pricing" className="text-gray-400 hover:text-white block transition-colors">Pricing</Link>
                <Link to="/industries" className="text-gray-400 hover:text-white block transition-colors">Industries</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link to="/about" className="text-gray-400 hover:text-white block transition-colors">About Us</Link>
                <Link to="/support" className="text-gray-400 hover:text-white block transition-colors">Support</Link>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Trust & Security</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Security</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prompt Line. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Industries;
