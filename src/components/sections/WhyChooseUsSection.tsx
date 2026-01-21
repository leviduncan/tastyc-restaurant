import { UtensilsCrossed, Leaf, ChefHat } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Menu for Every Taste",
    description:
      "From classic seafood dishes to innovative fusion creations, our diverse menu caters to every palate and dietary preference.",
  },
  {
    icon: Leaf,
    title: "Always Fresh Ingredients",
    description:
      "We source only the freshest catches daily from trusted local fishermen and sustainable suppliers.",
  },
  {
    icon: ChefHat,
    title: "Experienced Chefs",
    description:
      "Our team of award-winning chefs brings decades of culinary expertise to every dish they create.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="tastyc-section tastyc-light-section">
      <div className="tastyc-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="tastyc-subheading mb-4">Why Us</p>
          <h2 className="tastyc-heading text-tastyc-dark">
            Why People Choose Us?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-tastyc-cream group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-tastyc-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
