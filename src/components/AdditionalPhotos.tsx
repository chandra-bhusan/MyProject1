// Replaced lucide icon with custom logo image

const photos = [
  { name: 'Kitchen', img: '/additional photos/cyap1.jpg' },
  { name: 'Canteen', img: '/additional photos/cyap3.jpg' },
  { name: 'Indoor Game', img: '/additional photos/cyap11.jpg' },
  { name: 'Outside View', img: '/additional photos/cyap22.jpg' },
  { name: 'Road View', img: '/additional photos/cyap5.jpg' },
  { name: 'Stairs', img: '/additional photos/cyap6.jpg' },
];

export default function AdditionalPhotos() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <img src="/logo/cylogo3.png" alt="Additional Photos" className="w-7 h-7 md:w-9 md:h-9" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700">Additional Photos</h2>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[18rem] sm:max-w-xs">
                <img
                  src={photo.img}
                  alt={photo.name}
                  className="w-full h-40 sm:h-44 object-cover"
                />
              </div>
              <p className="text-center text-base lg:text-lg font-bold text-gray-700 mt-3">
                {photo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
