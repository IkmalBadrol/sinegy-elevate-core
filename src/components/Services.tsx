import { Button } from "@/components/ui/button";
import { TrendingUp, Wallet, BarChart3, Users, Smartphone, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Spot Trading",
      description: "Trade 200+ cryptocurrencies with competitive fees and deep liquidity.",
      features: ["Low trading fees", "Advanced order types", "Real-time market data"]
    },
    {
      icon: BarChart3,
      title: "Futures Trading",
      description: "Access leverage trading with up to 100x leverage on major cryptocurrencies.",
      features: ["Risk management tools", "Cross & isolated margin", "24/7 trading"]
    },
    {
      icon: Wallet,
      title: "Secure Wallet",
      description: "Store your digital assets safely with our multi-signature cold storage.",
      features: ["Multi-sig security", "Insurance coverage", "Instant withdrawals"]
    },
    {
      icon: Users,
      title: "Institutional Services",
      description: "Tailored solutions for institutional clients and high-volume traders.",
      features: ["Dedicated support", "Custom APIs", "Bulk trading tools"]
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our award-winning mobile application.",
      features: ["iOS & Android apps", "Push notifications", "Biometric security"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support.",
      features: ["Live chat support", "Multilingual team", "Video tutorials"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive trading solutions designed to meet the needs of every type of crypto trader, 
            from beginners to institutional investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-scale-in bg-card p-8 rounded-xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <service.icon className="w-16 h-16 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">Ready to get started?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Sinegy for their cryptocurrency trading needs. 
            Start your journey today with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open("https://exchange.sinegy.com", "_blank")}
            >
              Create Account
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;