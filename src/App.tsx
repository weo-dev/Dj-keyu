import { motion } from "motion/react";
import { 
  Music, 
  Mic2, 
  Speaker, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Youtube,
  Menu,
  X,
  ChevronRight,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark-bg/95 backdrop-blur-md border-b border-neon-cyan/20 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-cyan rounded-full flex items-center justify-center shadow-[0_0_15px_#00f5ff]">
            <Music className="text-dark-bg w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wider text-neon-cyan neon-text-cyan">KEYUR DHODI</span>
            <span className="font-display text-sm tracking-[0.2em] text-gold">PRO SOUND</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium tracking-widest uppercase hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/916354488594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neon-pink text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neon-pink/80 transition-all shadow-[0_0_15px_#ff007a]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-dark-bg border-b border-neon-cyan/20 py-8 px-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-display tracking-widest uppercase text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/916354488594" 
            className="bg-neon-pink text-white py-4 rounded-full text-center font-bold uppercase tracking-widest shadow-[0_0_15px_#ff007a]"
            onClick={() => setIsMenuOpen(false)}
          >
            WhatsApp Us
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1920" 
          alt="DJ Setup" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-dark-bg/60 to-dark-bg"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold font-display text-xl md:text-2xl tracking-[0.3em] mb-4 uppercase">Gujarat's Premium DJ Service</h2>
          <h1 className="text-6xl md:text-9xl font-display leading-none mb-6">
            <span className="block text-white">TURN UP THE</span>
            <span className="block text-neon-cyan neon-text-cyan">NIGHT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium tracking-wide">
            "Turn Up The Night. Feel Every Beat." – Professional sound experiences for weddings, parties, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-neon-cyan text-dark-bg px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_20px_#00f5ff]"
            >
              Get a Quote
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto border-2 border-neon-pink text-neon-pink px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-neon-pink hover:text-white transition-all shadow-[0_0_15px_#ff007a]"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-neon-cyan to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-neon-pink rounded-2xl z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800" 
            alt="Keyur Dhodi" 
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-neon-cyan p-6 rounded-xl z-20 shadow-xl">
            <span className="block font-display text-4xl text-dark-bg">10+ YEARS</span>
            <span className="block text-xs font-bold text-dark-bg uppercase tracking-widest">Experience in Sound</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-neon-pink font-display text-xl tracking-widest uppercase mb-4">The Artist Behind The Sound</h3>
          <h2 className="text-5xl font-display mb-8 leading-tight">KEYUR DHODI <br/><span className="text-neon-cyan">PRO SOUND</span></h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Based in Gujarat, India, Keyur Dhodi is a name synonymous with high-energy performances and crystal-clear sound engineering. With over a decade of experience, we've mastered the art of reading the crowd and delivering exactly what the moment demands.
            </p>
            <p>
              From intimate weddings to massive corporate galas, our professional sound service is designed to provide an immersive audio-visual experience that stays with your guests long after the final beat drops.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-3xl font-display text-white mb-1">500+</span>
              <span className="text-xs text-gold uppercase tracking-widest font-bold">Events Completed</span>
            </div>
            <div>
              <span className="block text-3xl font-display text-white mb-1">100%</span>
              <span className="text-xs text-gold uppercase tracking-widest font-bold">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Wedding DJ",
      desc: "Creating magical moments for your special day with curated playlists and professional sound.",
      icon: <Music className="w-10 h-10" />,
      color: "neon-cyan"
    },
    {
      title: "Corporate Events",
      desc: "Sophisticated audio solutions and professional MC services for your business gatherings.",
      icon: <Mic2 className="w-10 h-10" />,
      color: "neon-pink"
    },
    {
      title: "Professional Sound",
      desc: "High-end PA systems and sound engineering for events of any scale in Gujarat.",
      icon: <Speaker className="w-10 h-10" />,
      color: "gold"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-gold font-display text-xl tracking-widest uppercase mb-4">What We Offer</h3>
          <h2 className="text-5xl font-display">OUR SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl bg-dark-bg border border-white/5 hover:border-${s.color}/50 transition-all group cursor-default`}
            >
              <div className={`mb-6 text-${s.color} group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h4 className="text-2xl font-display mb-4 tracking-wider">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-neon-cyan font-display text-xl tracking-widest uppercase mb-4">Visual Experience</h3>
            <h2 className="text-5xl font-display">EVENT GALLERY</h2>
          </div>
          <a href="#" className="text-gold font-bold uppercase tracking-widest text-sm border-b border-gold pb-1 hover:text-white hover:border-white transition-all">
            View All Photos
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-2xl relative group"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-neon-pink font-display text-xl tracking-widest uppercase mb-4">Let's Connect</h3>
            <h2 className="text-5xl font-display mb-8">READY TO START <br/><span className="text-neon-pink neon-text-pink">THE PARTY?</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We're available for bookings across Gujarat. Whether it's a wedding, corporate event, or a private party, we'll bring the perfect sound to your venue.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</span>
                  <a href="tel:+916354488594" className="text-xl font-medium hover:text-neon-cyan transition-colors">+91 63544 88594</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-pink">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-xl font-medium">Gujarat, India</span>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp</span>
                  <a href="https://wa.me/916354488594" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-gold transition-colors">Chat with Keyur</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark-bg p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full"></div>
            
            <h4 className="text-2xl font-display mb-8 tracking-wider">SEND A MESSAGE</h4>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Event Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors appearance-none">
                  <option className="bg-dark-bg">Wedding</option>
                  <option className="bg-dark-bg">Corporate</option>
                  <option className="bg-dark-bg">Private Party</option>
                  <option className="bg-dark-bg">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Tell us about your event..."></textarea>
              </div>
              <button className="w-full bg-neon-pink text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-[0_0_15px_#ff007a] hover:scale-[1.02] transition-transform">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center">
            <Music className="text-dark-bg w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wider text-neon-cyan">KEYUR DHODI</span>
            <span className="font-display text-xs tracking-[0.2em] text-gold">PRO SOUND</span>
          </div>
        </div>

        <div className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Keyur Dhodi – PRO SOUND. All Rights Reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-neon-cyan selection:text-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/916354488594" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageSquare className="text-white w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-dark-bg px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
