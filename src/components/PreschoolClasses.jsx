import React from 'react';

const PreschoolClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Nursery Kg 3",
      price: "$150 / Month",
      description: "Pre-School Has Open Doors Alsio Offer Free Trial Sessis Child.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=face",
      classSize: "18-24",
      classTime: "9:30",
      ageGroup: "05-06"
    },
    {
      id: 2,
      title: "Nursery Kg 3",
      price: "$150 / Month", 
      description: "Pre-School Has Open Doors Alsio Offer Free Trial Sessis Child.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=face",
      classSize: "18-24",
      classTime: "9:30",
      ageGroup: "05-06"
    },
    {
      id: 3,
      title: "Nursery Kg 3",
      price: "$150 / Month",
      description: "Pre-School Has Open Doors Alsio Offer Free Trial Sessis Child.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=face",
      classSize: "18-24",
      classTime: "9:30",
      ageGroup: "05-06"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-32 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 800" fill="none">
          <path d="M0,50 Q25,0 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50 T450,50 T500,50 T550,50 T600,50 T650,50 T700,50 T750,50 T800,50" 
                stroke="#3B82F6" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-32 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 800" fill="none">
          <path d="M100,50 Q75,100 50,50 T0,50 T-50,50 T-100,50 T-150,50 T-200,50 T-250,50 T-300,50 T-350,50 T-400,50 T-450,50 T-500,50 T-550,50 T-600,50 T-650,50 T-700,50 T-750,50 T-800,50" 
                stroke="#3B82F6" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-slate-600 text-sm uppercase tracking-wide mb-2">
            SCHOOL GRADE
          </div>
          <h2 className="text-4xl font-bold text-slate-900">
            Our Preschool Classes
          </h2>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Class Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Class Info Tags */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between space-x-2">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg border border-blue-300 text-center flex-1">
                    <div className="text-sm font-bold">{classItem.classSize}</div>
                    <div className="text-xs">Class Size</div>
                  </div>
                  <div className="bg-slate-100 text-slate-800 px-3 py-2 rounded-lg border border-slate-300 text-center flex-1">
                    <div className="text-sm font-bold">{classItem.classTime}</div>
                    <div className="text-xs">Class Time</div>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg border border-blue-300 text-center flex-1">
                    <div className="text-sm font-bold">{classItem.ageGroup}</div>
                    <div className="text-xs">Year Old</div>
                  </div>
                </div>

                {/* Class Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {classItem.title}
                  </h3>
                  
                  <div className="text-blue-600 font-semibold text-lg">
                    {classItem.price}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {classItem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreschoolClasses;
