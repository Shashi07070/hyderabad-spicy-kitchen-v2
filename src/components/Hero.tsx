import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Simulator */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Dining"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Particles effect simulation */}
      <div className="absolute inset-0 z-10 bg-texture opacity-30 pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=HS&backgroundColor=transparent&textColor=d4af37&fontFamily=Times%20New%20Roman" alt="Logo Mark" className="w-20 h-20 mx-auto mb-8 opacity-80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-gold mb-6 text-balance leading-tight drop-shadow-2xl"
        >
          Hyderabad Spicy Kitchen & Bar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl font-light text-brand-ivory/90 mb-12 max-w-2xl text-balance tracking-wide"
        >
          Where Authentic Hyderabad Meets Modern Luxury
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#reservation"
            className="px-8 py-4 bg-brand-gold text-brand-black font-semibold tracking-widest uppercase text-sm transition-transform hover:scale-105 active:scale-95"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-brand-ivory/30 text-brand-ivory font-medium tracking-widest uppercase text-sm hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-light text-brand-ivory/50 mb-4">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
