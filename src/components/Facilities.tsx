// Replaced lucide icon with custom logo image

const facilities = [
  { name: 'Wi-Fi', img: '/facilities/cyfaci1.jpg' },
  { name: 'CCTV Security', img: '/facilities/cyfaci2.jpg' },
  { name: 'Cupboard', img: '/facilities/cyfaci3.jpg' },
  { name: 'Induction-Self Cooking', img: '/facilities/cyfaci4.jpg' },
  { name: 'Drinking Water (RO)', img: '/facilities/cyfaci5.jpg' },
  { name: 'Washing Machine', img: '/facilities/cyfaci6.jpg' },
];

export default function Facilities() {
  return (
    <section className="py-10 bg-white -mt-4 sm:-mt-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <img src="/logo/cylogo6.png" alt="Facilities" className="w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Facilities</h2>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white rounded-full border-4 flex items-center justify-center mb-4 shadow-lg overflow-hidden" style={{ borderColor: '#c4c8d2' }}>
                  <img 
                    src={facility.img} 
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-bold text-gray-700 text-sm sm:text-base lg:text-lg">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
