import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { DemoSignupForm } from "@/components/demo-signup-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Zap, CheckCircle, X, Mail, Phone } from "lucide-react";
import { SiLinkedin, SiSalesforce, SiZendesk } from "react-icons/si";
import signalyzeLogo from "@/assets/signalyze-logo.png";
import salesforceLogo from "@/assets/salesforce-logo.png";
import zendeskLogo from "@/assets/zendesk-logo.png";
import zohoLogo from "@/assets/zoho-logo.png";
import freshdeskLogo from "@/assets/freshdesk-logo.png";
import heroImage from "@assets/generated_images/Successful_business_team_collaboration_74c710dd.png";
import problemImage from "@assets/generated_images/Overwhelmed_customer_support_team_cc68f16e.png";

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
            <div className="text-white animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 animate-pulse-slow">
                  ✨ Trusted by leading Support Teams
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-headline">
                TURN Customer Complaints INTO 
                <span className="block mt-3 text-transparent bg-gradient-to-r from-white via-secondary to-white bg-clip-text animate-gradient">
                  Growth Opportunities
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-subtitle">
                We help SMBs cut down repetitive support tickets, build smarter knowledge bases, and empower agents with AI-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onClick={() => {
                    const demoSection = document.getElementById('demo-signup');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 px-8 py-4 h-auto text-lg font-semibold shadow-xl border-2 border-white group"
                  data-testid="button-hero-demo"
                >
                  Book a Demo 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
                <button 
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-white hover:text-secondary transition-colors duration-200 px-8 py-4 text-lg font-medium underline underline-offset-4 hover:underline-offset-8"
                  data-testid="button-hero-learn-more"
                >
                  Learn How It Works
                </button>
              </div>

            </div>
            <div className="lg:pl-8">
              <img 
                src={heroImage} 
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-problems-headline">
                The PROBLEMS KEEPING You UP at Night
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="problem-item-1">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Same questions asked repeatedly</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Outdated / unused knowledge base</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Agents time wasted searching for answers</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Ticket queues → unhappy customers</p>
                </div>
                <div className="flex items-start space-x-4" data-testid="problem-item-5">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Scattered information across tools → no single source of truth</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={problemImage} 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-approach-headline">
              HOW We SOLVE It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-approach-subtitle">
              Our proven three-step approach transforms your customer support from reactive to proactive
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover bg-white border-2 border-border p-8 text-center" data-testid="card-step-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">DISCOVERY</h3>
                <p className="text-muted-foreground mb-4">ANALYZE conversations, UNCOVER patterns</p>
                <p className="text-sm text-muted-foreground">"We MAP recurring complaints and SHOW you where to FOCUS."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-border p-8 text-center" data-testid="card-step-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">SOLUTIONING</h3>
                <p className="text-muted-foreground mb-4">BUILD KB, FIX workflows</p>
                <p className="text-sm text-muted-foreground">"We STREAMLINE your knowledge base and AUTOMATE repetitive issues."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-border p-8 text-center" data-testid="card-step-3">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">ACCELERATION</h3>
                <p className="text-muted-foreground mb-4">PLUG INTO Zendesk/Salesforce/Freshdesk</p>
                <p className="text-sm text-muted-foreground">"AI-powered add-ons DEFLECT tickets and GUIDE agents in real time."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-whyus-headline">
              NOT Just Another AI TOOL
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-whyus-subtitle">
              We're different because we understand your business first, then apply the right technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Consulting-first</h3>
                <p className="text-sm text-muted-foreground">We understand before we automate</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-2">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Works with your stack</h3>
                <p className="text-sm text-muted-foreground">No rip-and-replace</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-3">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Focused niche</h3>
                <p className="text-sm text-muted-foreground">We specialize in recurring complaints</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-4">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Future-ready</h3>
                <p className="text-sm text-muted-foreground">Marketplace add-ons that grow with you</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-social-headline">
              COMPATIBLE WITH leading PROVIDERS
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <div className="flex justify-center" data-testid="logo-salesforce">
              <div className="flex items-center justify-center h-16 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-6 group">
                <img 
                  src={salesforceLogo} 
                  alt="Salesforce logo" 
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zendesk">
              <div className="flex items-center justify-center h-16 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-6 group">
                <img 
                  src={zendeskLogo} 
                  alt="Zendesk logo" 
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zoho">
              <div className="flex items-center justify-center h-16 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-6 group">
                <img 
                  src={zohoLogo} 
                  alt="Zoho logo" 
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-freshdesk">
              <div className="flex items-center justify-center h-16 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-6 group">
                <img 
                  src={freshdeskLogo} 
                  alt="Freshdesk logo" 
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Demo Signup Section */}
      <section className="py-16 lg:py-24 bg-muted" id="demo-signup">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DemoSignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12" id="contact">
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
              <p className="text-white/80 mb-4" data-testid="text-footer-tagline">
                AI solutions that turn complaints into opportunities.
              </p>
              <p className="text-sm text-white/60" data-testid="text-footer-copyright">
                © 2025 Apex Meridian Private Limited
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/80">
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

              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-white/80 space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a 
                    href="mailto:hello@signalyze.ai" 
                    className="text-sm hover:text-white transition-colors"
                    data-testid="link-contact-email"
                  >
                    hello@signalyze.ai
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <a 
                    href="tel:+918754981502" 
                    className="text-sm hover:text-white transition-colors"
                    data-testid="link-contact-phone"
                  >
                    +91 87549 81502
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <SiLinkedin className="w-4 h-4 text-secondary" />
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
