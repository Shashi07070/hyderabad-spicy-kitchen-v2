import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-24 pb-12 px-6 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-1 border-r border-brand-gold/10 pr-6">
          <h3 className="font-serif text-2xl text-brand-gold mb-6 tracking-widest mb-4">HSK</h3>
          <p className="text-sm font-light text-brand-ivory/50 leading-relaxed mb-6">
            Where Authentic Hyderabad Meets Modern Luxury. Unforgettable flavors, premium hospitality.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <a href="#" className="w-10 h-10 border border-brand-ivory/20 rounded-full flex items-center justify-center text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-colors">
               <span className="text-sm font-serif italic text-center leading-none mt-[2px]">in</span>
             </a>
             <a href="#" className="w-10 h-10 border border-brand-ivory/20 rounded-full flex items-center justify-center text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-colors">
               <span className="text-sm font-serif italic text-center leading-none mt-[2px]">fb</span>
             </a>
          </div>
        </div>

        {/* Links */}
        <div>
           <h4 className="text-sm tracking-widest uppercase text-brand-gold mb-8">Explore</h4>
           <ul className="space-y-4 text-sm font-light text-brand-ivory/60">
             <li><a href="#story" className="hover:text-brand-gold transition-colors">Our Story</a></li>
             <li><a href="#menu" className="hover:text-brand-gold transition-colors">Signatures Menu</a></li>
             <li><a href="#experience" className="hover:text-brand-gold transition-colors">Experiences</a></li>
             <li><a href="#reservation" className="hover:text-brand-gold transition-colors">Book a Table</a></li>
           </ul>
        </div>

        {/* Timings */}
        <div>
           <h4 className="text-sm tracking-widest uppercase text-brand-gold mb-8">Hours</h4>
           <ul className="space-y-4 text-sm font-light text-brand-ivory/60">
             <li><span className="text-brand-ivory pb-1 block">Mon - Thu</span> 12:00 PM – 11:30 PM</li>
             <li><span className="text-brand-ivory pb-1 block">Fri - Sun</span> 12:00 PM – 1:00 AM</li>
             <li className="pt-4 text-brand-gold italic">Dress Code: Smart Casual</li>
           </ul>
        </div>

        {/* Location & Contact */}
        <div>
           <h4 className="text-sm tracking-widest uppercase text-brand-gold mb-8">Location</h4>
           <div className="space-y-6 text-sm font-light text-brand-ivory/60">
             <div className="flex gap-4 items-start">
               <MapPin size={20} className="text-brand-gold flex-shrink-0" />
               <p>Plot 8, FCI Employees Cooperative Housing Society, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032.</p>
             </div>
             
             <div className="flex gap-4 items-center mt-4">
               <Phone size={20} className="text-brand-gold" />
               <a href="tel:+919701098899" className="hover:text-brand-gold transition-colors">+91 97010 98899</a>
             </div>
             
             <div className="pt-4 flex gap-4">
               <a href="#" className="flex items-center gap-2 px-4 py-2 bg-brand-gold/10 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors text-xs tracking-widest uppercase border border-brand-gold/30">
                 Directions
               </a>
               <a href="tel:+919701098899" className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-xs tracking-widest uppercase border border-[#25D366]/30">
                 WhatsApp
               </a>
             </div>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-gold/10 pt-8 mt-12 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs tracking-widest text-brand-ivory/40 uppercase">© 2026 Hyderabad Spicy Kitchen & Bar.</p>
        <div className="flex gap-6 text-xs tracking-widest text-brand-ivory/40 uppercase">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
