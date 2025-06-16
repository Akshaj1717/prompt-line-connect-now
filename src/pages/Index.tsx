
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Check, Clock, Calendar, Home, Book, BookOpen, Info, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const demoRecordings = [
    { 
      id: "nail-salon", 
      business: "Nail Salon", 
      description: "Booking appointment with availability check",
      duration: "45s"
    },
    { 
      id: "lawn-care", 
      business: "Lawn Care", 
      description: "Emergency service call and scheduling",
      duration: "38s"
    },
    { 
      id: "pizza-shop", 
      business: "Pizza Shop", 
      description: "Order taking and delivery coordination",
      duration: "52s"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call, even outside business hours"
    },
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "AI books appointments directly into your calendar"
    },
    {
      icon: BookOpen,
      title: "Call Transcripts",
      description: "Every conversation transcribed and searchable"
    },
    {
      icon: Info,
      title: "Text Follow-up",
      description: "Automatic SMS confirmations and reminders"
    }
  ];

  const testimonials = [
    {
      quote: "Prompt Line saved us from missing 30+ calls per week. Our bookings increased 40%!",
      author: "Sarah Chen",
      business: "Bella Nails Spa"
    },
    {
      quote: "The AI sounds so natural, customers don't even realize it's not human.",
      author: "Mike Rodriguez", 
      business: "Rodriguez Landscaping"
    },
    {
      quote: "Setup took 10 minutes. Best investment we've made for our restaurant.",
      author: "Tony Italiano",
      business: "Tony's Pizza Palace"
    }
  ];

  const handlePlayDemo = (demoId: string) => {
    setPlayingDemo(playingDemo === demoId ? null : demoId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Prompt Line</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link>
              <Link to="/industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Try It Free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Trusted by 500+ Small Businesses
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Never Miss a Call
            <span className="text-blue-600"> Again</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered call answering that works 24/7, sounds human, and books appointments for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>

          {/* Demo Recordings */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Hear Prompt Line in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {demoRecordings.map((demo) => (
                <Card key={demo.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handlePlayDemo(demo.id)}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {playingDemo === demo.id ? (
                        <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                      ) : (
                        <div className="w-0 h-0 border-l-[8px] border-l-blue-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{demo.business}</h3>
                    <p className="text-sm text-gray-600 mb-2">{demo.description}</p>
                    <Badge variant="secondary">{demo.duration}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Grow</h2>
            <p className="text-xl text-gray-600">Powerful features that work together seamlessly</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-blue-100">Three simple steps to never miss a call again</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Setup Your AI</h3>
              <p className="text-blue-100">Train your assistant with your business info in minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Forward Calls</h3>
              <p className="text-blue-100">Simple call forwarding setup, keep your number</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Go Live</h3>
              <p className="text-blue-100">Your AI assistant starts working immediately</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/how-it-works">
              <Button size="lg" variant="secondary" className="text-blue-600">
                See Full Setup Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Growing Businesses</h2>
            <p className="text-xl text-gray-600">See how Prompt Line helps businesses grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Never Miss Another Call?</h2>
          <p className="text-xl text-gray-600 mb-8">Join hundreds of businesses already growing with Prompt Line</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Start Free Trial - No Credit Card
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Setup in under 10 minutes • Cancel anytime</p>
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

export default Index;
