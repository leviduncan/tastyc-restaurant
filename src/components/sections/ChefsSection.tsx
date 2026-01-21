const ChefsSection = () => {
  return (
    <section className="tastyc-section bg-white">
      <div className="tastyc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="tastyc-subheading mb-4">Our Chefs</p>
            <h2 className="tastyc-heading text-tastyc-dark mb-6">
              Use the Tips & Recipes of Our Chefs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of world-class chefs brings together decades of culinary 
              expertise. Led by Executive Chef Marcus Rivera, our kitchen team 
              creates innovative dishes that honor traditional seafood preparations 
              while pushing the boundaries of contemporary cuisine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Join our exclusive cooking classes and learn the secrets behind our 
              most beloved dishes. From knife skills to sauce making, our chefs 
              share their knowledge with passion and precision.
            </p>
            <a href="#blog" className="tastyc-btn-primary">
              View Recipes
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=500&fit=crop"
              alt="Chef preparing dishes"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            {/* Quote Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6">
              <p className="text-tastyc-dark font-serif text-lg italic">
                "Cooking is an art, but all art requires knowing something about 
                the techniques and materials."
              </p>
              <p className="text-primary text-sm mt-2 font-medium">— Chef Marcus Rivera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
