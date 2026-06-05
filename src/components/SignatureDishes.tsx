import { motion } from 'motion/react';

const dishes = [
  {
    name: 'Hyderabadi Dum Biryani',
    desc: 'Slow-cooked royal delicacy with fragrant basmati and tender meat',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Pachi Mirchi Kodi Kebab',
    desc: 'Marinated in fresh green chillies and slow-grilled to perfection',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Natukodi Iguru',
    desc: 'Country chicken cooked in a rich, thick gravy with local spices',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function SignatureDishes() {
  return (
    <section className="py-32 px-6 bg-brand-green/10 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-brand-gold text-sm font-semibold block mb-4">The Culinary Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory">Signature Expressions</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {dishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/100 transition-colors z-20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/0 group-hover:border-brand-gold/100 transition-colors z-20" />
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-xl font-serif text-brand-gold mb-3 transition-colors">{dish.name}</h3>
                <p className="text-sm font-light text-brand-ivory/60 leading-relaxed group-hover:text-brand-ivory/80 transition-colors">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
