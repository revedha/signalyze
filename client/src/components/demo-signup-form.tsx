import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const demoSignupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type DemoSignupData = z.infer<typeof demoSignupSchema>;

export function DemoSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<DemoSignupData>({
    resolver: zodResolver(demoSignupSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit = async (data: DemoSignupData) => {
    setIsSubmitting(true);
    
    try {
      // Get IP geolocation
      const geoResponse = await fetch('https://ipapi.co/json/');
      const geoData = await geoResponse.json();
      
      // Prepare form data for Formspree
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('location', `${geoData.city || 'Unknown'}, ${geoData.country_name || 'Unknown'}`);
      formData.append('ip', geoData.ip || 'Unknown');
      formData.append('source', 'demo-signup');
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xnnvbjvb', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <Card className="bg-foreground text-white border-0 shadow-2xl">
        <CardContent className="p-12">
          <h2 className="text-3xl font-bold mb-6" data-testid="text-thank-you">
            Thank you for your interest!
          </h2>
          <p className="text-xl text-white/80 mb-8" data-testid="text-schedule-message">
            We've received your request. Please schedule a time that works for you:
          </p>
          <Button 
            onClick={() => window.open('https://calendly.com/signalyze', '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 h-auto text-lg font-semibold btn-hover"
            data-testid="button-schedule-demo"
          >
            Schedule Your Demo
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardContent className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-demo-headline">
            Ready to See How It Works?
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-demo-subtitle">
            Enter your email to book a personalized demo of our AI-powered customer support solution.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Work Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      className="h-12 text-lg"
                      {...field} 
                      data-testid="input-demo-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-semibold btn-hover"
              data-testid="button-demo-submit"
            >
              {isSubmitting ? "Submitting..." : "Book a Demo"}
            </Button>
          </form>
        </Form>
        
        <p className="text-sm text-muted-foreground mt-4 text-center" data-testid="text-demo-disclaimer">
          No spam, just valuable insights about improving your customer support.
        </p>
      </CardContent>
    </Card>
  );
}