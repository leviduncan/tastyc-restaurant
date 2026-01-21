import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Subscribed!",
      description: "Thank you for joining our newsletter.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-tastyc-dark/85" />
      </div>

      {/* Content */}
      <div className="tastyc-container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <p className="tastyc-subheading mb-4">Stay Updated</p>
          <h2 className="tastyc-heading mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-tastyc-text-light mb-10">
            Get exclusive recipes, special offers, and news about upcoming events 
            delivered straight to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="tastyc-btn-primary h-14 px-8 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
