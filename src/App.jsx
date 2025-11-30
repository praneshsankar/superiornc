import React, { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Menu, X, Scissors, Calendar, Star } from 'lucide-react';
import cuttingImg from './assets/cutting.jpg';
import chairImg from './assets/chair.jpg';
import tableImg from './assets/table.jpg';
import jrImg from './assets/jr.jpg';
import logoImg from './assets/logo.jpg';
import interiorImg from './assets/interior.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Business Data for Superior NC Barber Lounge
  const businessInfo = {
    name: "Superior NC Barber Lounge",
    location: "4670 Clayton Rd, Concord, CA 94521",
    phone: "+1 925-375-1402", // Placeholder - Update with real number if available
    mapsLink: "#",
    hours: [
      { day: "Monday", time: "10:00 AM - 6:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
      { day: "Thursday", time: "10:00 AM - 6:00 PM" },
      { day: "Friday", time: "10:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 6:00 PM" },
      { day: "Sunday", time: "Closed" },
    ]
  };

  const services = [
    { name: "Superior Haircut", price: "$40", desc: "Precision cut, hot towel finish, and styling." },
    { name: "Beard Sculpting", price: "$25", desc: "Razor line-up, trim, and conditioning oils." },
    { name: "The Executive", price: "$60", desc: "Haircut + Beard Trim + Hot Towel treatment." },
    { name: "Kids Cut", price: "$30", desc: "Patient, stylish cuts for the little ones (Under 12)." },
    { name: "Line Up", price: "$20", desc: "Crisp edge-up to keep you looking sharp between cuts." },
    { name: "Designs", price: "$10+", desc: "Custom freestyle designs added to any cut." }
  ];

  const barbers = [
    { name: "Lead Barber", role: "Owner", img: chairImg },
    { name: "Pro Barber", role: "Stylist", img: tableImg },
    { name: "Junior Barber", role: "Stylist", img: jrImg }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-yellow-600 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={logoImg} 
                alt="Superior NC Barber Lounge Logo" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <span className="font-bold text-xl md:text-2xl tracking-wider text-white">SUPERIOR<span className="text-yellow-600">.</span> NC</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-yellow-600 transition-colors text-sm tracking-widest uppercase">Home</a>
              <a href="#about" className="hover:text-yellow-600 transition-colors text-sm tracking-widest uppercase">About</a>
              <a href="#services" className="hover:text-yellow-600 transition-colors text-sm tracking-widest uppercase">Services</a>
              <a href="#team" className="hover:text-yellow-600 transition-colors text-sm tracking-widest uppercase">Team</a>
              <a href={businessInfo.mapsLink} rel="noreferrer" className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded-none transition-all transform hover:-translate-y-1">
                BOOK NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-yellow-600">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-yellow-600">Services</a>
              <a href={businessInfo.mapsLink} rel="noreferrer" className="block w-full mt-4 bg-yellow-600 text-black font-bold py-3">BOOK APPOINTMENT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={interiorImg} 
            alt="Barbershop Interior"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={logoImg} 
              alt="Superior NC Barber Lounge Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain drop-shadow-2xl"
            />
          </div>
          <h2 className="text-yellow-600 tracking-[0.2em] uppercase font-semibold mb-4 text-sm md:text-base animate-fade-in-up">Concord's Premier Experience</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            SUPERIOR CUTS.<br />SUPERIOR VIBES.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Elevate your style at Superior NC Barber Lounge. Precision, professionalism, and a classic atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={businessInfo.mapsLink} rel="noreferrer" className="bg-yellow-600 text-black font-bold py-4 px-10 hover:bg-yellow-700 transition-all uppercase tracking-wider text-sm">
              Book Appointment
            </a>
            <a href="#services" className="border border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <div className="bg-neutral-900 border-y border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
            <MapPin className="text-yellow-600 h-6 w-6" />
            <div>
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-sm">{businessInfo.location}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
            <Clock className="text-yellow-600 h-6 w-6" />
            <div>
              <p className="text-white font-semibold">Opening Hours</p>
              <p className="text-sm">Mon - Sat: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
            <Phone className="text-yellow-600 h-6 w-6" />
            <div>
              <p className="text-white font-semibold">Contact</p>
              <p className="text-sm">{businessInfo.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow-600/50"></div>
              <img 
                src={cuttingImg}  
                alt="Barber cutting hair"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-yellow-600/50"></div>
            </div>
            <div>
              <h3 className="text-yellow-600 font-bold tracking-widest uppercase mb-2">Our Story</h3>
              <h2 className="text-4xl font-bold text-white mb-6">THE SUPERIOR STANDARD</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Welcome to Superior NC Barber Lounge. We have redefined the barbering experience in Concord, 
                combining traditional techniques with modern style. Step into our lounge and relax while we refine your look.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need a sharp fade, a classic gentleman's cut, or a beard sculpt, our team delivers perfection every time.
                We believe in quality over quantity, ensuring you leave our chair feeling confident and superior.
              </p>
              <div className="flex gap-4">
                <div className="text-center p-4 border border-neutral-800 bg-neutral-900/50 min-w-[100px]">
                  <p className="text-3xl font-bold text-white">5.0</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Stars</p>
                </div>
                <div className="text-center p-4 border border-neutral-800 bg-neutral-900/50 min-w-[100px]">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-yellow-600 font-bold tracking-widest uppercase mb-2">Pricing Menu</h3>
          <h2 className="text-4xl font-bold text-white mb-16">OUR SERVICES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-neutral-950 p-8 border border-neutral-800 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-yellow-600 transition-colors">{service.name}</h4>
                  <span className="text-xl font-bold text-yellow-600">{service.price}</span>
                </div>
                <p className="text-gray-500 text-left text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-6 pt-6 border-t border-neutral-900 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white uppercase tracking-wider">Book Now</span>
                  <Scissors className="h-4 w-4 text-yellow-600" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <a href={businessInfo.mapsLink} rel="noreferrer" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 hover:bg-white hover:text-black transition-colors uppercase tracking-widest">
              Book Your Cut
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-yellow-600 font-bold tracking-widest uppercase mb-2">The Crew</h3>
          <h2 className="text-4xl font-bold text-white mb-16">MEET THE BARBERS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {barbers.map((barber, index) => (
              <div key={index} className="group relative">
                <div className="overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={barber.img} 
                    alt={barber.name} 
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">{barber.name}</h4>
                <p className="text-yellow-600 text-sm uppercase tracking-wider mt-1">{barber.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logoImg} 
                  alt="Superior NC Barber Lounge Logo" 
                  className="h-20 w-20 object-contain"
                />
                <span className="font-bold text-xl tracking-wider text-white">SUPERIOR<span className="text-yellow-600">.</span> NC</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Redefining the standard for barbershops in Concord, CA. 
                Where superior service meets superior style.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/superior.nc/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-7 w-7" /></a>
                <a href="https://www.facebook.com/SuperiorNCBarberLounge" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-7 w-7" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Location</h4>
              <p className="text-gray-400 mb-2">{businessInfo.name}</p>
              <p className="text-gray-400 mb-2">{businessInfo.location}</p>
              <a href={businessInfo.mapsLink} className="text-yellow-600 text-sm hover:underline mt-2 inline-block">Get Directions →</a>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                {businessInfo.hours.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm border-b border-neutral-800 pb-2 mb-2 last:border-0">
                    <span>{item.day}</span>
                    <span className={item.time === "Closed" ? "text-red-500" : "text-white"}>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Superior NC Barber Lounge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;