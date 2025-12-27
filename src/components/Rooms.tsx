// Replaced lucide icon with custom logo image

const roomTypes = [
  { type: '1 Sharing', images: 6 },
  { type: '2 Sharing', images: 6 },
  { type: '3 Sharing', images: 6 },
  { type: '4 Sharing', images: 6 },
];

// Map directly to the filenames present under public/rooms
const roomImagesMap: Record<string, string[]> = {
  '1 Sharing': [
    '/rooms/1-sharing/cy1share1.jpg',
    '/rooms/1-sharing/cy1share2.jpg',
    '/rooms/1-sharing/cy1share3.jpg',
    '/rooms/1-sharing/cy1share4.jpg',
    '/rooms/1-sharing/cy1share5.jpg',
    '/rooms/1-sharing/cy1share6.png',
  ],
  '2 Sharing': [
    '/rooms/2-sharing/cy2share1.jpg',
    '/rooms/2-sharing/cy2share2.jpg',
    '/rooms/2-sharing/cy2share3.jpg',
    '/rooms/2-sharing/cy2share4.jpg',
    '/rooms/2-sharing/cy2share5.jpg',
  ],
  '3 Sharing': [
    '/rooms/3-sharing/cy3share1.jpg',
    '/rooms/3-sharing/cy3share2.jpg',
    '/rooms/3-sharing/cy3share3.jpg',
    '/rooms/3-sharing/cy3share4.jpg',
    '/rooms/3-sharing/cy3share5.jpg',
    '/rooms/3-sharing/cy3share6.jpg',
  ],
  '4 Sharing': [
    '/rooms/4-sharing/cy4share1.jpg',
    '/rooms/4-sharing/cy4share2.jpg',
    '/rooms/4-sharing/cy4share3.jpg',
    '/rooms/4-sharing/cy4share4.jpg',
    '/rooms/4-sharing/cy4share5.jpg',
    '/rooms/4-sharing/cy4share6.jpg',
  ],
};

const getRoomImage = (type: string, idx: number) => {
  const arr = roomImagesMap[type];
  if (arr && arr.length) return arr[idx % arr.length];
  return '';
};

export default function Rooms() {
  return (
    <section id="rooms" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
          <img src="/logo/cylogo5.png" alt="Rooms" className="w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Rooms</h2>
        </div>
      </div>
      <div className="px-8">
        <hr className="border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="max-w-7xl mx-auto px-4">

        {roomTypes.map((room, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-700 text-center mb-6 pb-2 border-b-2 border-gray-400 block w-fit mx-auto">
              {room.type}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 place-items-center">
              {Array.from({ length: room.images }).map((_, imgIdx) => (
                <div key={imgIdx} className="overflow-hidden rounded-lg shadow-md w-full max-w-[18rem] sm:max-w-[16rem]">
                  <img
                    src={getRoomImage(room.type, imgIdx)}
                    alt={`${room.type} room ${imgIdx + 1}`}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      const arr = roomImagesMap[room.type];
                      if (arr && arr.length) {
                        e.currentTarget.src = arr[0];
                        return;
                      }
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
