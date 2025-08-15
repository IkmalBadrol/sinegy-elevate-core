import { Linkedin, Twitter } from "lucide-react";
import teamCeo from "@/assets/kel.jpg";
import teamCto from "@/assets/jack.jpg";
import teamCompliance from "@/assets/shen.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Kelvyn",
      role: "Chief Executive Officer",
      image: teamCeo,
      bio: "Former Goldman Sachs VP with 15+ years in financial markets. Kelvyn leads Sinegy's vision for the future of digital finance.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Jack Chan",
      role: "DAX Lead",
      image: teamCto,
      bio: "Ex-Google engineer and blockchain pioneer. Jack oversees our cutting-edge trading infrastructure and security systems.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Shen-Hoei Yeoh",
      role: "Chief Compliance Officer",
      image: teamCompliance,
      bio: "Former SEC regulatory expert ensuring Sinegy meets the highest compliance standards across all jurisdictions.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const advisors = [
    { name: "John Thompson", role: "Former CEO, PayPal" },
    { name: "Lisa Wang", role: "Partner, Andreessen Horowitz" },
    { name: "David Kim", role: "Founder, Blockchain Capital" },
    { name: "Maria Santos", role: "Former CTO, Coinbase" }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our world-class team combines decades of experience from traditional finance, 
            cutting-edge technology, and regulatory expertise to build the future of crypto trading.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="animate-scale-in bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-card-foreground">{member.name}</h4>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={member.twitter}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Advisory Board</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're proud to be guided by industry veterans who bring invaluable expertise and strategic vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="animate-fade-up text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold text-card-foreground mb-2">{advisor.name}</h4>
                <p className="text-sm text-muted-foreground">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">Join Our Mission</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to shape the future of finance. 
            Join our team of innovators and help build the next generation of financial infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">Remote</div>
              <div className="text-muted-foreground">First Culture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;