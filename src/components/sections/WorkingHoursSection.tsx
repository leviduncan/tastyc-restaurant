import { RESTAURANT_INFO } from "@/lib/constants";

interface WorkingHoursSectionProps {
  onBookTable: () => void;
}

const WorkingHoursSection = ({ onBookTable }: WorkingHoursSectionProps) => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="tastyc-container relative z-10">
        <div className="flex justify-end">
          <div className="bg-white p-10 lg:p-14 max-w-md w-full">
            <p className="tastyc-subheading mb-4 text-tastyc-dark">Visit Us</p>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-tastyc-dark mb-8">
              Working Hours
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-tastyc-dark font-medium">
                  {RESTAURANT_INFO.hours.weekdays.open} - {RESTAURANT_INFO.hours.weekdays.close}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Saturday - Sunday</span>
                <span className="text-tastyc-dark font-medium">
                  {RESTAURANT_INFO.hours.weekends.open} - {RESTAURANT_INFO.hours.weekends.close}
                </span>
              </div>
            </div>

            <button onClick={onBookTable} className="tastyc-btn-primary w-full">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
