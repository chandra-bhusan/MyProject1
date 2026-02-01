
export default function Hero() {
  return (
    <section id="home" className="bg-white py-12 pb-20 md:py-20">
      <style>{`
        @keyframes textLightPass {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .text-light-pass {
          background: linear-gradient(
            90deg,
            #1f2937 0%,
            #1f2937 30%,
            #fbbf24 50%,
            #1f2937 70%,
            #1f2937 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textLightPass 4s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-4 md:gap-12">
          <div className="text-center">
            <h1 className="text-[1.5rem] md:text-5xl font-bold mb-1 text-light-pass">
            Umika Comforts PG For Gents
            </h1>
            <p className="text-lg md:text-[1.625rem] md:leading-[1.85rem] md:pb-0.5 font-bold mb-3 md:mt-4 text-light-pass">
            Jain College Opposite Road,Bangalore
            </p>
            <div className="flex justify-center gap-4 md:mt-4">
              <a href="https://wa.me/919900882285" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <img src="/home/cyhome3.png" alt="WhatsApp" className="w-9 h-9" />
              </a>
              <a href="tel:+919353773283" className="hover:scale-110 transition">
                <img src="/home/cyhome4.png" alt="Call" className="w-9 h-9 rounded-full object-cover" />
              </a>
              <a href="mailto:luxurypg@gmail.com" className="hover:scale-110 transition">
                <img src="/home/cyhome5.png" alt="Mail" className="w-9 h-9 rounded-full object-cover" />
              </a>
            </div>
            <div className="hidden md:flex justify-start md:justify-center items-center gap-3 mt-6 md:mt-10 flex-wrap md:flex-nowrap">
              <img src="/home/heroline.png" alt="Divider" className="h-6 flex-shrink-0" />
              <p className="font-bold md:font-semibold text-sm md:text-xl" style={{ color: '#737373' }}>Direct PG Website — No Broker, No Commission</p>
            </div>
            <div className="hidden md:flex justify-start md:justify-center items-center gap-3 mt-4 md:mt-2">
              <img src="/home/heroline.png" alt="Divider" className="h-6 flex-shrink-0" />
              <p className="font-bold md:font-semibold md:text-xl" style={{ color: '#737373' }}>For Students & Working Professionals</p>
            </div>
          </div>

          <div className="w-[15.75rem] h-[15.75rem] md:w-80 md:h-80">
            <img
              src="/home/cypg25.jpg"
              alt="PG Building"
              className="w-full h-full object-cover rounded-full border-4"
              style={{ borderColor: '#ff914d' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
