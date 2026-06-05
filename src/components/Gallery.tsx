export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Gallery</h2>
        <p className="text-brand-ivory/60 font-light max-w-xl mx-auto">
          Glimpses of pure indulgence, luxurious spaces, and vibrant energy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-1 md:gap-2 px-1 md:px-2">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group">
             <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
            <img
              src={src}
              alt="Gallery Item"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
            />
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_50px_rgba(212,175,55,0.3)] transition-opacity duration-500 z-20 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
