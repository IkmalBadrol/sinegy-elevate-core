import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your funds are protected with military-grade encryption and multi-signature cold storage technology."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our advanced matching engine and global infrastructure."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trade 24/7 across 150+ countries with support for 40+ fiat currencies and 200+ cryptocurrencies."
    },
    {
      icon: Award,
      title: "Regulated & Compliant",
      description: "Fully licensed and regulated, ensuring compliance with international financial standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient">Sinegy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2020, Sinegy has emerged as a leading cryptocurrency exchange platform, 
            providing institutional-grade trading infrastructure for both retail and professional traders worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              To democratize access to digital assets by providing a secure, reliable, and user-friendly 
              platform that empowers everyone to participate in the digital economy. We believe in the 
              transformative power of blockchain technology and are committed to building the infrastructure 
              that will shape the future of finance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experienced professionals from traditional finance and cutting-edge technology 
              sectors work tirelessly to ensure that Sinegy remains at the forefront of innovation while 
              maintaining the highest standards of security and compliance.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open("https://exchange.sinegy.com", "_blank")}
            >
              Join Sinegy Today
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-scale-in p-6 bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted by millions worldwide</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the revolution and start your crypto journey with the most trusted exchange platform.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="opacity-80">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="opacity-80">Cryptocurrencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="opacity-80">Fiat Currencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;