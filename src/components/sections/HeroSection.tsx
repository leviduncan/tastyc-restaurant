import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onBookTable: () => void;
}

const HeroSection = ({ onBookTable }: HeroSectionProps) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="tastyc-subheading mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to Tastyc
        </p>
        <h1 className="tastyc-heading text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Reserve Your Table Today
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button onClick={onBookTable} className="tastyc-btn-primary">
            Book a Table
          </button>
          <a href="#menu" className="tastyc-btn-outline">
            View Menu
          </a>
        </div>
      </div>

      {/* Slider Dots - Left */}
      <div className="absolute left-8 bottom-12 flex flex-col gap-3 z-10">
        {[0, 1, 2].map((dot, index) => (
          <button
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === 0 ? "bg-primary" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${dot + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Right */}
      <div className="absolute right-8 bottom-12 flex gap-4 z-10">
        <button
          className="w-12 h-12 border border-white/30 text-white/60 hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="w-12 h-12 border border-white/30 text-white/60 hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
