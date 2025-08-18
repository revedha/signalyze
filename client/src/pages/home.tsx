import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { DemoSignupForm } from "@/components/demo-signup-form";
import TrueFocus from "@/components/TrueFocus";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Zap, CheckCircle, X, Mail, Phone } from "lucide-react";
import { SiLinkedin, SiSalesforce, SiZendesk } from "react-icons/si";
import signalyzeLogo from "@/assets/signalyze-logo.png";
import salesforceLogo from "@/assets/salesforce-logo.png";
import zendeskLogo from "@/assets/zendesk-logo.png";
import zohoLogo from "@/assets/zoho-logo.png";
import freshdeskLogo from "@/assets/freshdesk-logo.png";

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
          <div className="text-center text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 animate-pulse-slow">
                ✨ Trusted by leading Support Teams
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-headline">
              Turn 
              <div className="my-4">
                <TrueFocus 
                  sentence="Customer Complaints"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#66BE77"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
              into
              <div className="my-4">
                <TrueFocus 
                  sentence="Growth Opportunities"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#007B47"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto" data-testid="text-hero-subtitle">
              We help YOU cut down repetitive support tickets, build smarter knowledge bases, and empower agents with AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex flex-col items-center gap-3">
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
                <p className="text-white/80 text-lg font-medium" data-testid="text-hero-cost-reduction">
                  Cut support costs by 30% in 90 days
                </p>
              </div>
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
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-gradient py-16 lg:py-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-problems-headline">
              The problems keeping you <span className="text-secondary">UP</span> at night
            </h2>
          </div>
          
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="card-hover bg-white border-2 border-red-100 p-6" data-testid="card-problem-1">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">SAME QUESTIONS, AGAIN AND AGAIN</h3>
                <p className="text-sm text-muted-foreground text-center">Up to 40% of tickets are duplicates of previously answered issues, creating unnecessary workload for your team.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-red-100 p-6" data-testid="card-problem-2">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">KNOWLEDGE BASE THAT NOBODY USES</h3>
                <p className="text-sm text-muted-foreground text-center">Over 60% of self-service portals fail because content is outdated, incomplete, or hard to find.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-red-100 p-6" data-testid="card-problem-3">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">LONG QUEUES, FRUSTRATED CUSTOMERS</h3>
                <p className="text-sm text-muted-foreground text-center">Customer satisfaction drops by 20% when response times stretch beyond 24 hours.</p>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover bg-white border-2 border-red-100 p-6" data-testid="card-problem-4">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">AGENTS STUCK HUNTING FOR ANSWERS</h3>
                <p className="text-sm text-muted-foreground text-center">Support reps spend nearly 30% of their day just looking for information instead of resolving tickets.</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-red-100 p-6" data-testid="card-problem-5">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center">NO SINGLE SOURCE OF TRUTH</h3>
                <p className="text-sm text-muted-foreground text-center">The average company uses 3–5 tools for customer support, causing longer resolution times and higher agent frustration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-approach-headline">
              How <span className="text-primary">WE</span> solve it
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
                <p className="text-muted-foreground mb-4">Analyze conversations, Uncover patterns</p>
                <p className="text-sm text-muted-foreground">"We map recurring complaints and show you where to focus."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-border p-8 text-center" data-testid="card-step-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">SOLUTIONING</h3>
                <p className="text-muted-foreground mb-4">Build KB, Fix workflows</p>
                <p className="text-sm text-muted-foreground">"We streamline your knowledge base and automate repetitive issues."</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white border-2 border-border p-8 text-center" data-testid="card-step-3">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">ACCELERATION</h3>
                <p className="text-muted-foreground mb-4">Plug into Salesforce/Zendesk/Zoho/Freshdesk</p>
                <p className="text-sm text-muted-foreground">"AI-powered add-ons deflect tickets and guide agents in real time."</p>
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
              <span className="text-accent">NOT</span> just another AI tool
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-whyus-subtitle">
              We're different because we understand your business first, then apply the right technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">CONSULTING-FIRST</h3>
                <p className="text-sm text-muted-foreground">We understand before we automate</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-2">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">WORKS WITH YOUR STACK</h3>
                <p className="text-sm text-muted-foreground">No rip-and-replace</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-white p-6 text-center shadow-sm" data-testid="card-feature-3">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">FUTURE-READY</h3>
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
              Compatible with leading providers and more...
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center" data-testid="logo-salesforce">
              <div className="flex items-center justify-center h-24 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-8 group">
                <img 
                  src={salesforceLogo} 
                  alt="Salesforce logo" 
                  className="h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zendesk">
              <div className="flex items-center justify-center h-24 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-8 group">
                <img 
                  src={zendeskLogo} 
                  alt="Zendesk logo" 
                  className="h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-zoho">
              <div className="flex items-center justify-center h-24 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-8 group">
                <img 
                  src={zohoLogo} 
                  alt="Zoho logo" 
                  className="h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="flex justify-center" data-testid="logo-freshdesk">
              <div className="flex items-center justify-center h-24 w-full bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 p-8 group">
                <img 
                  src={freshdeskLogo} 
                  alt="Freshdesk logo" 
                  className="h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
              <p className="text-sm text-white/60 mt-1" data-testid="text-footer-tagline">
                Handcrafted in India for the world
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
