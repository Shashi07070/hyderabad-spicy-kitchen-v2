import { motion } from 'motion/react';

export default function Reservation() {
  return (
    <section id="reservation" className="py-32 px-6 bg-brand-green/10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#111111] p-8 md:p-16 border border-brand-gold/20 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Flairs */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-gold/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-gold/50" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-4">Reserve & Order</h2>
            <p className="text-brand-ivory/60 font-light">Experience the finest Hyderabadi dining, or enjoy from home.</p>
          </div>

          <div className="space-y-6 relative z-10 flex flex-col items-center max-w-sm mx-auto">
            <a 
              href="https://link.district.in/DSTRKT/3fuuciei" 
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center px-10 py-5 border border-brand-gold text-brand-gold font-semibold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              Book via District
            </a>
            
            <a 
              href="https://www.zomato.com/hyderabad/hyderabad-spicy-kitchen-bar-gachibowli/book?requires_login=1&tracking_params=rwg_offer&utm_source=rwg_offer&product_id=BFT030408944535" 
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center px-10 py-5 border border-[#E23744] text-[#E23744] font-semibold tracking-widest uppercase hover:bg-[#E23744] hover:text-white transition-colors"
            >
              Book on Zomato
            </a>

            <a 
              href="https://www.swiggy.com/restaurants/hyderabad/gachibowli/hyderabad-spicy-kitchen-bar-1068062/dineout" 
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center px-10 py-5 border border-[#FC8019] text-[#FC8019] font-semibold tracking-widest uppercase hover:bg-[#FC8019] hover:text-white transition-colors"
            >
              Book on Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
