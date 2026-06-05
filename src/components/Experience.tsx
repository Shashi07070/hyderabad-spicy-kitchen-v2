import { motion } from 'motion/react';

const experiences = [
  {
    title: 'Fine Dining',
    desc: 'Elegant seating, ambient lighting, and world-class hospitality tailored for unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-brand-black">
      {experiences.map((exp, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className={`grid lg:grid-cols-2 min-h-[70vh] ${isEven ? '' : 'bg-brand-black/50'}`}>
            <div className={`relative h-full min-h-[400px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
            
            <div className={`p-12 md:p-24 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-[1px] bg-brand-gold mb-8" />
                <h3 className="text-3xl md:text-5xl font-serif text-brand-gold mb-6">{exp.title}</h3>
                <p className="text-lg text-brand-ivory/70 font-light leading-relaxed mb-10 max-w-lg">
                  {exp.desc}
                </p>
                <a href="#reservation" className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-brand-ivory hover:text-brand-gold transition-colors group">
                  Discover More
                  <span className="w-8 h-[1px] bg-brand-ivory group-hover:bg-brand-gold transition-colors block" />
                </a>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
