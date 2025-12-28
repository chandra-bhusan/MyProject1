// Replaced lucide icon with custom logo image

const meals = [
  {
    name: 'BreakFast (7:00 to 8:45)',
    items: [
      { name: 'Tea and Cookies', img: '/images/cybfst1.jpg' },
      { name: 'Dosa Chutney', img: '/images/cybfst2.jpg' },
      { name: 'Tea and simple bun', img: '/images/teacream.jpg' },
      { name: 'Aloo Paratha', img: '/images/cybfst4.jpg' },
      { name: 'Idli Chutney', img: '/images/cybfst5.jpg' },
      { name: 'Puri Sabji', img: '/images/cybfst6.jpg' },
    ],
  },
  {
    name: 'Lunch (12:00 to 2:30)',
    items: [
      { name: 'Rice Pulse Bhujiya', img: '/images/cyblunc1.jpg' },
      { name: 'Rice Pulse Vindi', img: '/images/cyblunc2.jpg' },
      { name: 'Rice Paneer', img: '/images/cyblunc3.jpg' },
      { name: 'Chicken Rice', img: '/images/cyblunc4.jpg' },
      { name: 'Sambar Rice Pappad', img: '/images/cyblunc5.jpg' },
      { name: 'Mutton Rice', img: '/images/cyblunc6.jpg' },
    ],
  },
  {
    name: 'Snacks (4:00 to 5:30)',
    items: [
      { name: 'Samosa Chutney', img: '/images/cysn1.jpg' },
      { name: 'Chowmein Sauce', img: '/images/cysn2.jpg' },
      { name: 'Egg Fry Rice', img: '/images/cysn3.jpg' },
      { name: 'Pakoras Chilli Chutney', img: '/images/cysn4.jpg' },
      { name: 'Spicy Murmura', img: '/images/cysn5.jpg' },
      { name: 'Gobi Manchurian', img: '/images/cysn6.jpg' },
    ],
  },
  {
    name: 'Dinner (7:00 to 8:30)',
    items: [
      { name: 'Rice Pulse Veg & Salad', img: '/images/cydin1.jpg' },
      { name: 'Chappati Curd Chutney', img: '/images/cydin2.jpg' },
      { name: 'Mushroom Rice', img: '/images/cydin3.jpg' },
      { name: 'Mutton Rice', img: '/images/cydin4.jpg' },
      { name: 'Rice Pulse & Saag', img: '/images/cydin5.jpg' },
      { name: 'Fish Curry', img: '/images/cydin6.jpg' },
    ],
  },
];

export default function Food() {
  return (
    <section id="food" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <img src="/logo/cylogo2.png" alt="Food" className="w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Food</h2>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        {meals.map((meal, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">
              {meal.name}
            </h3>
            <div className="w-64 mx-auto mb-6">
              <hr className="border-t-2 border-white" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {meal.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col items-center w-full">
                  <div className="rounded-lg overflow-hidden w-full max-w-[10rem] sm:max-w-[11rem]">
                    <div className="w-full h-[8.075rem] sm:h-auto sm:aspect-[4/3] flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center text-base sm:text-lg font-semibold text-gray-700 mt-4">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
