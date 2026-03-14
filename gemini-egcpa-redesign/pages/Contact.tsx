
import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-display font-bold text-evergreen-primary mb-6">Let's Talk About Your Loved One</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Help is just a phone call or click away. Our Collegeville office is ready to support you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-evergreen-gold">
              <h4 className="font-display font-bold text-lg text-evergreen-primary mb-2">Office Location</h4>
              <p className="text-gray-600">
                123 Evergreen Lane<br />
                Collegeville, PA 19426
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-evergreen-gold">
              <h4 className="font-display font-bold text-lg text-evergreen-primary mb-2">Direct Contact</h4>
              <p className="text-gray-600">
                Phone: (610) 555-0123<br />
                Email: admin@evergreencarepa.com
              </p>
            </div>
            <div className="bg-evergreen-primary text-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-display font-bold text-lg mb-2">Hours</h4>
              <ul className="text-evergreen-mint/80 space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00am - 5:00pm</span></li>
                <li className="flex justify-between font-bold text-white"><span>On-Call Support:</span> <span>24/7 Available</span></li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-evergreen-sage/20">
              <h3 className="text-2xl font-display font-bold text-evergreen-primary mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
                  <input type="email" placeholder="Your Email" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
                </div>
                <input type="text" placeholder="Loved One's Location (Zip Code)" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary" />
                <select className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary">
                  <option>Primary Concern</option>
                  <option>Dementia Care</option>
                  <option>Post-Hospitalization</option>
                  <option>Companion Care</option>
                  <option>General Support</option>
                </select>
                <textarea rows={5} placeholder="How can we help?" className="w-full p-4 bg-evergreen-cream border-evergreen-sage/30 border rounded-xl outline-none focus:ring-2 focus:ring-evergreen-primary"></textarea>
                <button type="submit" className="w-full bg-evergreen-gold text-white py-5 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-xl">
                  Request Free Assessment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Local Area Map Placeholder */}
        <div className="mt-20 bg-evergreen-mint/20 h-96 rounded-3xl overflow-hidden relative flex items-center justify-center border-2 border-evergreen-sage border-dashed">
           <div className="text-center p-8">
             <h4 className="font-display font-bold text-2xl text-evergreen-primary mb-2 italic">Proudly Serving Montgomery County</h4>
             <p className="text-evergreen-dark/70 text-lg">Collegeville • Phoenixville • Skippack • Royersford • Trappe • Schwenksville</p>
             <div className="mt-6 flex justify-center space-x-2">
                {[19426, 19460, 19468, 19473, 19464].map(zip => (
                  <span key={zip} className="bg-evergreen-primary/10 text-evergreen-primary px-3 py-1 rounded-full text-xs font-bold">{zip}</span>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
