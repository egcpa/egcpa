
import React from 'react';

const Careers = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-display font-bold text-evergreen-primary mb-6 leading-tight">Work that warms the heart.</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We're not just hiring caregivers; we're growing a family. At Evergreen Care PA, we treat our team with the same dignity and respect we provide our clients.
            </p>
            <div className="space-y-4">
              {[
                "Competitive Montgomery County Wages",
                "Flexible Shifts to Fit Your Life",
                "Continuing Education & Certification Assistance",
                "Supportive, Local Management Team"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center text-evergreen-dark font-medium">
                  <div className="w-6 h-6 bg-evergreen-sage text-evergreen-primary rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/id/64/600/800" 
              alt="Happy caregiver" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-evergreen-gold rounded-full z-0 opacity-20"></div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-evergreen-sage/20">
          <h2 className="text-3xl font-display font-bold text-evergreen-primary mb-10 text-center">Start Your Application</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-evergreen-dark uppercase tracking-wider">Full Name</label>
              <input type="text" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-evergreen-dark uppercase tracking-wider">Email Address</label>
              <input type="email" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-evergreen-dark uppercase tracking-wider">Phone Number</label>
              <input type="tel" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-evergreen-dark uppercase tracking-wider">Zip Code</label>
              <input type="text" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
            </div>
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-evergreen-dark uppercase tracking-wider">Experience Summary</label>
              <textarea rows={4} className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary"></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 text-center pt-4">
              <button type="submit" className="bg-evergreen-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-evergreen-dark transition-all shadow-lg">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
