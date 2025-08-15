import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of
              <span className="block text-gradient">Crypto Trading</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              Experience the most secure, efficient, and user-friendly cryptocurrency exchange platform. Trade with confidence on Sinegy.
            </p>
          </div>

          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open("https://exchange.sinegy.com", "_blank")}
              className="group"
            >
              Start Trading Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up grid grid-cols-1 md:grid-cols-3 gap-8" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card p-6 text-center hover-scale">
              <Shield className="mx-auto mb-3 w-8 h-8 text-accent" />
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div className="glass-card p-6 text-center hover-scale">
              <TrendingUp className="mx-auto mb-3 w-8 h-8 text-accent" />
              <div className="text-2xl font-bold">$2.5B+</div>
              <div className="text-white/80">Trading Volume</div>
            </div>
            <div className="glass-card p-6 text-center hover-scale">
              <Users className="mx-auto mb-3 w-8 h-8 text-accent" />
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-light/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;