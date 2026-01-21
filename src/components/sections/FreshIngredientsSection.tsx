const FreshIngredientsSection = () => {
  return (
    <section className="tastyc-section tastyc-light-section">
      <div className="tastyc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=700&h=600&fit=crop"
              alt="Fresh seafood ingredients"
              className="w-full h-[400px] lg:h-[550px] object-cover"
              loading="lazy"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-4 lg:right-8 bg-primary text-white p-6 text-center">
              <span className="block text-4xl font-serif font-bold">25</span>
              <span className="text-sm uppercase tracking-wider">Years of Experience</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="tastyc-subheading mb-4">Quality First</p>
            <h2 className="tastyc-heading text-tastyc-dark mb-6">
              Always Fresh Ingredients
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that exceptional cuisine starts with exceptional ingredients. 
              That's why we source our seafood from sustainable fisheries and local 
              suppliers who share our passion for quality.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Daily fresh catches from local fishermen",
                "Organic herbs grown in our own garden",
                "Premium spices imported from around the world",
                "Sustainable and eco-friendly sourcing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#menu" className="tastyc-btn-primary">
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshIngredientsSection;
