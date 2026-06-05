import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Soups & Starters', 'Signature Biryanis', 'Curries & Mains', 'Global Flavors'];

const menuItems = {
  'Soups & Starters': [
    { name: 'Nalli Bokkala Soup', price: '₹239', desc: 'Rich bone marrow soup with traditional spices' },
    { name: 'Kodi Rasam', price: '₹229', desc: 'Spicy and tangy South Indian chicken soup' },
    { name: 'Pachi Mirchi Kodi Kebab', price: '₹429', desc: 'Marinated in fresh green chillies and slow-grilled' },
    { name: 'Apollo Fish', price: '₹469', desc: 'Spicy pan-fried boneless fish cubes' },
    { name: 'Telangana Chilli Paneer', price: '₹379', desc: 'Cottage cheese tossed in fiery local chillies' },
  ],
  'Signature Biryanis': [
    { name: 'Hyderabadi Mutton Dum Biryani', price: '₹479', desc: 'Slow-cooked royal delicacy with fragrant basmati and tender meat' },
    { name: 'Chicken Dum Biryani', price: '₹419', desc: 'Classic dum style, saffron infused basmati' },
    { name: 'Gongura Mamsam Pulao', price: '₹479', desc: 'Tangy gongura leaves cooked with premium mutton' },
    { name: 'Muvva Guthhi Vankaya Pulao', price: '₹399', desc: 'Stuffed baby eggplants in a flavorful pulao' },
  ],
  'Curries & Mains': [
    { name: 'Natukodi Iguru', price: '₹439', desc: 'Country chicken cooked in a rich, thick gravy' },
    { name: 'Gongura Mamsam Curry', price: '₹459', desc: 'Mutton curry balanced with the tartness of gongura' },
    { name: 'Nalli Nihari', price: '₹755', desc: 'Slow-cooked lamb shank, robust spices' },
    { name: 'Gutti Vankai Kura', price: '₹329', desc: 'Traditional stuffed eggplant curry' },
  ],
  'Global Flavors': [
    { name: 'Spicy Grilled Chicken Lasagne', price: '₹389', desc: 'Layers of pasta, cheese, and spicy grilled chicken' },
    { name: 'Chicken Pepper Steak', price: '₹369', desc: 'Grilled steak served with a robust pepper sauce' },
    { name: 'Classic Margherita Pizza', price: '₹359', desc: 'Traditional pizza with fresh tomatoes and cheese' },
    { name: 'Penne Alfredo', price: '₹399', desc: 'Creamy white sauce with a choice of veg or chicken' }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="py-32 px-6 bg-[#111111] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Culinary Repertoire</h2>
          <p className="text-brand-ivory/60 font-light max-w-2xl mx-auto">
            A curated selection of our finest offerings, blending traditional Hyderabadi recipes with global fine-dining standards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-gold text-brand-black font-medium' 
                  : 'text-brand-ivory/60 hover:text-brand-gold border border-brand-ivory/10 hover:border-brand-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-x-16 gap-y-10"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif text-brand-ivory group-hover:text-brand-gold transition-colors">{item.name}</h4>
                    <span className="flex-1 border-b border-dashed border-brand-ivory/20 mx-4" />
                    <span className="text-lg font-medium text-brand-gold">{item.price}</span>
                  </div>
                  <p className="text-sm font-light text-brand-ivory/50">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
