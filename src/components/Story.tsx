import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="py-32 px-6 bg-brand-black relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative">
          <div className="absolute -inset-4 border border-brand-gold/20 translate-x-4 -translate-y-4" />
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200"
            alt="Restaurant Interior"
            className="relative z-10 w-full h-[600px] object-cover grayscale-[0.2]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:pl-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="uppercase tracking-[0.3em] text-brand-gold text-sm font-semibold">Our Heritage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory leading-tight mb-8">
            A Feast of <br/><span className="text-brand-gold italic">Flavors & Culture</span>
          </h2>
          
          <div className="space-y-6 text-brand-ivory/70 font-light text-lg leading-relaxed">
            <p>
              In the heart of every Hyderabadi meal lies a story—a tale of royal kitchens, bustling spice markets, and homes filled with the aroma of slow-cooked curries and hand-pounded masalas. At Hyderabad Spicy Kitchen & Bar, we bring you this legacy on a plate, celebrating the bold and fiery flavors of Telangana, the rich traditions of Hyderabad, and the spirit of togetherness that good food inspires.
            </p>
            <p>
              From the smoky, spice-laden Karimnagar Kodi Vepudu to the comforting warmth of Gongura Mamsam Pulao, Pacchimirchi Kodi Kebab and Natu Kodi Nallakaram roast, every dish here is crafted with time-honored recipes and the freshest ingredients.
            </p>
            <p>
              Welcome to a place where flavors dance, drinks flow, and memories are made.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-gold/20 pt-12">
            <div>
              <h3 className="text-3xl font-serif text-brand-gold mb-2">15+</h3>
              <p className="text-sm uppercase tracking-wider text-brand-ivory/50">Years of Mastery</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-brand-gold mb-2">Signature</h3>
              <p className="text-sm uppercase tracking-wider text-brand-ivory/50">Chef Creations</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
