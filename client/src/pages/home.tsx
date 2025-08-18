import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { DemoSignupForm } from "@/components/demo-signup-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Zap, CheckCircle, X, Mail, Phone } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import signalyzeLogo from "@/assets/signalyze-logo.png";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSource, setContactSource] = useState("");

  const openContactForm = (source: string) => {
    setContactSource(source);
    setShowContactForm(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24" id="hero-cta">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-headline">
                Turn Customer Complaints Into 
                <span className="text-yellow-300"> Growth Opportunities</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                We help SMBs cut down repetitive support tickets, build smarter knowledge bases, and empower agents with AI-driven insights.
              </p>
              <div className="flex justify-start">
                <Button 
                  onClick={() => {
                    const demoSection = document.getElementById('demo-signup');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-accent hover:bg-orange-600 text-white px-8 py-4 h-auto text-lg font-semibold btn-hover shadow-xl"
                  data-testid="button-hero-demo"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="AI-powered support dashboard showing analytics and ticket management" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-hero-dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-gradient py-16 lg:py-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8" data-testid="text-problems-headline">
                The Problems Keeping You Up at Night
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="problem-item-1">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">Same questions asked repeatedly</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">Outdated / unused knowledge base</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">Agents wasting time searching for answers</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">Ticket queues → unhappy customers</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Overwhelmed support team dealing with multiple customer inquiries and tickets" 
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="img-frustrated-team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" data-testid="text-approach-headline">
              How We Solve It
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="text-approach-subtitle">
              Our proven three-step approach transforms your customer support from reactive to proactive
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover bg-white border-2 border-slate-200 p-8 text-center" data-testid="card-step-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Discovery</h3>
                <p className="text-slate-600 mb-4">Analyze conversations, uncover patterns</p>
                <p className="text-sm text-slate-500">"We map recurring complaints and show you where to focus."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-slate-200 p-8 text-center" data-testid="card-step-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Solutioning</h3>
                <p className="text-slate-600 mb-4">Build KB, fix workflows</p>
                <p className="text-sm text-slate-500">"We streamline your knowledge base and automate repetitive issues."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-slate-200 p-8 text-center" data-testid="card-step-3">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Acceleration</h3>
                <p className="text-slate-600 mb-4">Plug into Zendesk/Salesforce/Freshdesk</p>
                <p className="text-sm text-slate-500">"AI-powered add-ons deflect tickets and guide agents in real time."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" data-testid="text-whyus-headline">
              Not Just Another AI Tool
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="text-whyus-subtitle">
              We're different because we understand your business first, then apply the right technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Consulting-first</h3>
                <p className="text-sm text-slate-600">We understand before we automate</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-2">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Works with your stack</h3>
                <p className="text-sm text-slate-600">No rip-and-replace</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-3">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Focused niche</h3>
                <p className="text-sm text-slate-600">We specialize in recurring complaints</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-4">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Future-ready</h3>
                <p className="text-sm text-slate-600">Marketplace add-ons that grow with you</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4" data-testid="text-social-headline">
              Trusted by Support Teams Who Care About Customers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex justify-center" data-testid="logo-salesforce">
              <div className="bg-slate-200 rounded-lg p-4 w-full h-16 flex items-center justify-center">
                <span className="text-slate-500 font-medium">Salesforce</span>
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zendesk">
              <div className="bg-slate-200 rounded-lg p-4 w-full h-16 flex items-center justify-center">
                <span className="text-slate-500 font-medium">Zendesk</span>
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-freshdesk">
              <div className="bg-slate-200 rounded-lg p-4 w-full h-16 flex items-center justify-center">
                <span className="text-slate-500 font-medium">Freshdesk</span>
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zoho">
              <div className="bg-slate-200 rounded-lg p-4 w-full h-16 flex items-center justify-center">
                <span className="text-slate-500 font-medium">Zoho</span>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-slate-50 p-8 text-center" data-testid="card-testimonial">
              <CardContent className="p-0">
                <p className="text-lg text-slate-700 italic mb-4">"Reduced 28% of repetitive tickets in 4 weeks"</p>
                <div className="text-sm text-slate-500">— Coming Soon: Real Client Testimonial</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" data-testid="text-cta-headline">
            Ready to Fix Customer Support at the Root?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Stop fighting the symptoms. Let's solve the real problems in your customer support process.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => {
                const demoSection = document.getElementById('demo-signup');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-accent hover:bg-orange-600 text-white px-8 py-4 h-auto text-lg font-semibold btn-hover shadow-xl"
              data-testid="button-cta-demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Signup Section */}
      <section className="py-16 lg:py-24 bg-slate-50" id="demo-signup">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DemoSignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={signalyzeLogo} 
                  alt="Signalyze logo"
                  className="h-8 w-auto"
                  data-testid="img-footer-logo"
                />
              </div>
              <p className="text-slate-300 mb-4" data-testid="text-footer-tagline">
                AI solutions that turn complaints into opportunities.
              </p>
              <p className="text-sm text-slate-400" data-testid="text-footer-copyright">
                © 2025 Apex Meridian Private Limited
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-about"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-services"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-blog">
                    Blog
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => openContactForm('footer')}
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-slate-300 space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:hello@signalyze.ai" 
                    className="text-sm hover:text-white transition-colors"
                    data-testid="link-contact-email"
                  >
                    hello@signalyze.ai
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href="tel:+918754981502" 
                    className="text-sm hover:text-white transition-colors"
                    data-testid="link-contact-phone"
                  >
                    +91 87549 81502
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <SiLinkedin className="w-4 h-4 text-primary" />
                  <a 
                    href="https://www.linkedin.com/company/signalyze/about/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                    data-testid="link-contact-linkedin"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactForm 
        source={contactSource}
        open={showContactForm}
        onOpenChange={setShowContactForm}
      />
    </div>
  );
}
