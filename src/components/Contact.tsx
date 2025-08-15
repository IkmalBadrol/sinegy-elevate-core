import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our platform? Need support? Or interested in institutional services? 
            We're here to help you succeed in your crypto journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email Support</h4>
                  <p className="text-muted-foreground">support@sinegy.com</p>
                  <p className="text-sm text-muted-foreground">24/7 customer support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone Support</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Business hours: 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Headquarters</h4>
                  <p className="text-muted-foreground">Unit 3.2, Wisma Leader, 8, Jalan Larut,</p>
                  <p className="text-muted-foreground">10050 George Town, Penang</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Trading Hours</h4>
                  <p className="text-muted-foreground">24/7/365</p>
                  <p className="text-sm text-muted-foreground">Crypto markets never sleep</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h4 className="font-bold text-foreground mb-3">Institutional Clients</h4>
              <p className="text-muted-foreground mb-4">
                For institutional inquiries, custom solutions, or high-volume trading needs, 
                please contact our dedicated institutional team.
              </p>
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open("https://sinegyexchange.zendesk.com/hc/en-us/requests/new", "_blank")}
              >
                Contact Institutional Team
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="John"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Doe"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    type="text" 
                    placeholder="How can we help you?"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required 
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-xl shadow-card">
              <h4 className="font-bold text-card-foreground mb-3">How do I create an account?</h4>
              <p className="text-muted-foreground">
                Simply visit our exchange platform and click "Sign Up". The process takes just a few minutes 
                and requires basic verification to ensure security.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-card">
              <h4 className="font-bold text-card-foreground mb-3">What are your trading fees?</h4>
              <p className="text-muted-foreground">
                Our trading fees start at just 0.1% for spot trading and decrease based on your trading volume. 
                Check our fee schedule for detailed information.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-card">
              <h4 className="font-bold text-card-foreground mb-3">Is my money safe on Sinegy?</h4>
              <p className="text-muted-foreground">
                Yes, we use bank-grade security with 95% of funds stored in offline cold storage and 
                comprehensive insurance coverage for digital assets.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-card">
              <h4 className="font-bold text-card-foreground mb-3">Do you offer mobile trading?</h4>
              <p className="text-muted-foreground">
                Absolutely! Our mobile apps for iOS and Android offer full trading functionality with 
                advanced charting tools and real-time notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;