
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Check, Clock, Calendar, BookOpen, Info, Search, Home } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const capabilities = [
    {
      category: "Smart Call Answering",
      features: [
        "24/7 availability with no breaks or holidays",
        "Handles multiple calls simultaneously", 
        "Natural, human-like AI voice options",
        "Support for 30+ languages and local accents",
        "Real-time call screening and transfers"
      ]
    },
    {
      category: "Caller Interaction & Messaging", 
      features: [
        "Custom scripts and voice responses",
        "Two-way conversational flow for clarity",
        "Efficient message taking with custom fields",
        "Call recordings and searchable transcripts",
        "Instant notifications via email and text"
      ]
    },
    {
      category: "Scheduling & Appointment Booking",
      features: [
        "Appointment setting over call, text, or online",
        "Syncs with Google Calendar, Outlook, Calendly",
        "Flexible scheduling rules and availability hours", 
        "Confirmation and reminder texts for appointments",
        "Real-time calendar availability checking"
      ]
    },
    {
      category: "Texting & Follow-ups",
      features: [
        "SMS/WhatsApp messages with details or links",
        "Real-time, two-way texting from any device",
        "Automated follow-up message sequences",
        "Voice call enhancement with text summaries",
        "Customizable message templates"
      ]
    },
    {
      category: "Integrations & Compatibility", 
      features: [
        "CRM integrations (HubSpot, Salesforce, Zoho)",
        "Scheduler platforms (Calendly, Acuity, Jobber)",
        "Google My Business and website integration",
        "Zapier for custom automations",
        "API access for custom integrations"
      ]
    },
    {
      category: "Business Tools & Analytics",
      features: [
        "Call queueing and message-on-hold experience",
        "Daily usage reports and call outcome categorization",
        "Data privacy, security, and optional on-prem deployment",
        "ROI tracking from missed call reduction",
        "Performance analytics and optimization insights"
      ]
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Simple sign-up with business email and phone number",
      details: "Quick registration process that takes less than 2 minutes. No credit card required for the free trial."
    },
    {
      step: 2, 
      title: "Train Your AI Assistant",
      description: "Input business info manually or connect Google Business Profile",
      details: "Our AI learns about your business, services, pricing, and availability. Choose from multiple voice options and customize responses."
    },
    {
      step: 3,
      title: "Set Preferences & Integrations", 
      description: "Configure call handling rules and connect your tools",
      details: "Set business hours, keywords for transfers, connect calendars and CRM systems. Everything syncs automatically."
    },
    {
      step: 4,
      title: "Forward Your Business Number",
      description: "Simple call forwarding setup without changing your number",
      details: "We provide easy instructions for your phone carrier. Your customers will never know the difference."
    },
    {
      step: 5,
      title: "Go Live",
      description: "AI assistant starts answering calls immediately", 
      details: "Monitor performance through your dashboard and make adjustments anytime. Full support during setup."
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
              <Link to="/how-it-works" className="text-blue-600 font-medium">How It Works</Link>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Complete Feature Overview
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Prompt Line Can Do
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive AI call management that handles every aspect of customer communication
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Feature Set</h2>
            <p className="text-xl text-gray-600">Every tool you need to manage customer calls professionally</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How to Set It Up</h2>
            <p className="text-xl text-blue-100">Get your AI assistant running in 5 simple steps</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{step.step}</span>
                  </div>
                  {index < setupSteps.length - 1 && (
                    <div className="w-px h-16 bg-blue-400 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-blue-100 mb-3">{step.description}</p>
                  <p className="text-blue-200 text-sm">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Setup takes less than 10 minutes and includes full support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Schedule Demo Call
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Full setup support included</p>
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

export default HowItWorks;
