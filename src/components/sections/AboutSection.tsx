interface AboutSectionProps {
  onBookTable: () => void;
}

const AboutSection = ({ onBookTable }: AboutSectionProps) => {
  return (
    <section className="tastyc-section bg-white">
      <div className="tastyc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="tastyc-subheading mb-4">About Us</p>
            <h2 className="tastyc-heading text-tastyc-dark mb-6">
              We Invite You to Visit Our Restaurant
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Tastyc, where the ocean meets your plate. Our passionate 
              team of culinary artists craft exquisite seafood dishes using only 
              the freshest catches, delivered daily from trusted local fishermen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every dish tells a story of tradition, innovation, and an unwavering 
              commitment to quality. From our signature lobster bisque to our 
              perfectly seared scallops, each bite is a celebration of the sea.
            </p>
            <button onClick={onBookTable} className="tastyc-btn-primary">
              Book a Table
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=500&fit=crop"
                alt="Elegant seafood plating"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
