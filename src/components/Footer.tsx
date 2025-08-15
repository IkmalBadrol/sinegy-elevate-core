import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-light rounded-lg"></div>
              <span className="text-2xl font-bold">Sinegy</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              The most trusted cryptocurrency exchange platform, providing secure and efficient 
              trading solutions for millions of users worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Spot Trading</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Futures Trading</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Margin Trading</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Staking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors">Team</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Security</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 mb-4 md:mb-0">
              © {currentYear} Sinegy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cookie Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;