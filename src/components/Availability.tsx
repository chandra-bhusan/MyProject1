import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const availability = [
  { type: '1 Sharing', vacant: 6, fee: '14000', icon: 1 },
  { type: '2 Sharing', vacant: 3, fee: '10000', icon: 2 },
  { type: '3 Sharing', vacant: 5, fee: '9000', icon: 3 },
  { type: '4 Sharing', vacant: 3, fee: '8000', icon: 4 },
];

export default function Availability() {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLive(prev => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600">Availability Status</h2>
          <span className={`text-sm font-bold transition-all ${isLive ? 'text-red-500 opacity-100' : 'text-red-300 opacity-50'}`}>● LIVE</span>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-10" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 place-items-center">
          {availability.map((item, idx) => (
            <div key={idx} className="bg-green-50 rounded-xl p-6 text-center shadow-md border border-green-100">
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">{item.type}</h3>
              <p className="text-base text-gray-600 mb-2">
                Vacant Beds: <span className="font-bold text-xl text-gray-800">{item.vacant}</span>
              </p>
              <p className="text-base text-gray-600">
                Monthly Fees: <span className="font-bold text-xl text-gray-800">₹ {item.fee}/-</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
