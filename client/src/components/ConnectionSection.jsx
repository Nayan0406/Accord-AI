import { FiPhoneCall } from "react-icons/fi";

const ConnectSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full min-h-min flex flex-col items-center justify-center relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Left Image - Full width on mobile, 1/3 on desktop */}
        <div className="w-full lg:w-1/3 max-w-md lg:max-w-none mx-auto lg:mx-0">
          <img
            src="/brain-img.png"
            alt="AI Brain"
            className="rounded-2xl sm:rounded-[1.5rem] w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full flex flex-col gap-6 sm:gap-7 lg:pl-10">
          {/* Title + Avatars */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1c1e] leading-tight text-center sm:text-left">
              Let&apos;s<br className="hidden sm:block" />connect.
            </h2>

            {/* Avatars */}
            <div className="flex justify-center sm:justify-end -space-x-3">
              {["/people-1.png", "/people-2.png", "/people-3.png", "/people-4.png"].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="team"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover border-2 border-white"
                />
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-full px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 w-full sm:w-[280px] md:w-[300px]">
              <img
                src="/a-1.png"
                alt="Atharva"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#1c1c1e] text-sm sm:text-base">Atharva</h4>
                <p className="text-xs sm:text-sm text-gray-500 truncate">Project manager</p>
              </div>
              <div className="bg-blue-700 p-2 sm:p-3 rounded-full text-white flex-shrink-0">
                <FiPhoneCall className="text-base sm:text-lg" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-full px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 w-full sm:w-[280px] md:w-[300px]">
              <img
                src="/k-1.png"
                alt="Kshitij"
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#1c1c1e] text-sm sm:text-base">Kshitij</h4>
                <p className="text-xs sm:text-sm text-gray-500 truncate">Operational Head</p>
              </div>
              <div className="bg-blue-700 p-2 sm:p-3 rounded-full text-white flex-shrink-0">
                <FiPhoneCall className="text-base sm:text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;