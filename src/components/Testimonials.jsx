import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Blex Aster",
      title: "Google CEO",
      text: "Pre-School Has Open Door Andiso Offer Free Trial Sessionin Child. Mea Omneque Modo Alterum Nou Hones",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Alex Aster", 
      title: "Google CEO",
      text: "Pre-School Has Open Door Andiso Offer Free Trial Sessionin Child. Mea Omneque Modo Alterum Nou Hones",
   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-endeavour-dark via-endeavour-blue to-endeavour-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face" 
            alt="Background decoration"
            className="w-full h-full object-cover rounded-full blur-sm"
          />
        </div>
        <div className="absolute top-4 right-4 w-32 h-32 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop&crop=face" 
            alt="Child on bike"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-white text-sm uppercase tracking-wide font-serif mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-white">
            Our Happy Customers
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-xl relative">
              <div className="flex items-start space-x-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative quotation marks */}
              <div className="absolute bottom-4 right-6">
                <div className="text-blue-400 text-6xl font-serif leading-none opacity-30">
                  "
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;