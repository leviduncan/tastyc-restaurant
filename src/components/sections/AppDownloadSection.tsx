const AppDownloadSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-tastyc-dark/90" />
      </div>

      {/* Content */}
      <div className="tastyc-container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <p className="tastyc-subheading mb-4">Mobile App</p>
          <h2 className="tastyc-heading mb-6">
            Download Our Application
          </h2>
          <p className="text-tastyc-text-light mb-10 max-w-lg mx-auto">
            Get exclusive offers, easy table reservations, and browse our menu 
            right from your phone. Download our app today and enjoy a seamless 
            dining experience.
          </p>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-tastyc-dark px-6 py-4 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <span className="block text-xs">Download on the</span>
                <span className="block font-semibold">App Store</span>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-tastyc-dark px-6 py-4 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <span className="block text-xs">Get it on</span>
                <span className="block font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
