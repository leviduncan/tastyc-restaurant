import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { RESTAURANT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const galleryImages = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?w=150&h=150&fit=crop",
];

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "facebook":
      return <Facebook size={18} />;
    case "twitter":
      return <Twitter size={18} />;
    case "instagram":
      return <Instagram size={18} />;
    case "youtube":
      return <Youtube size={18} />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="bg-tastyc-dark text-white pt-20 pb-8">
      <div className="tastyc-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">{RESTAURANT_INFO.name}</h3>
            <p className="text-tastyc-text-light text-sm leading-relaxed mb-6">
              Experience the finest seafood cuisine in an elegant atmosphere. 
              Our chefs prepare each dish with passion and the freshest ingredients 
              from the ocean.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">About</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-tastyc-text-light hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-tastyc-text-light hover:text-primary text-sm transition-colors duration-300"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-tastyc-text-light">
                <span className="block text-white mb-1">Address</span>
                {RESTAURANT_INFO.address}
              </li>
              <li className="text-tastyc-text-light">
                <span className="block text-white mb-1">Phone</span>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-primary transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="text-tastyc-text-light">
                <span className="block text-white mb-1">Email</span>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-primary transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <a
                  key={index}
                  href="#"
                  className="block aspect-square overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-tastyc-text-light text-sm">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
