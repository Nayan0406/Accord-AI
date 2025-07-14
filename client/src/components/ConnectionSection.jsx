import { FiPhoneCall } from "react-icons/fi";

const ConnectSection = () => {
  return (
     <section className="bg-gray-100 py-16 px-4 w-full min-h-screen flex flex-col items-center justify-center relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/brain-img.png"
            alt="AI Brain"
            className="rounded-[1.5rem] w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-2 w-full flex flex-col gap-7 md:pl-10">
          {/* Title + Avatars */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1c1c1e] leading-tight text-center sm:text-left">
              Let&apos;s<br />connect.
            </h2>

            {/* Avatars */}
            <div className="flex justify-center sm:justify-end -space-x-3">
              {["/people-1.png", "/people-2.png", "/people-3.png", "/people-4.png"].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="team"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white"
                />
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center sm:justify-start">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-full px-6 py-4 flex items-center gap-4 w-full sm:w-[300px]">
              <img
                src="/a-1.png"
                alt="Atharva"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-[#1c1c1e]">Atharva</h4>
                <p className="text-sm text-gray-500">Project manager</p>
              </div>
              <div className="bg-blue-700 p-3 rounded-full text-white">
                <FiPhoneCall className="text-lg" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-full px-6 py-4 flex items-center gap-4 w-full sm:w-[300px]">
              <img
                src="/k-1.png"
                alt="Kshitij"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-[#1c1c1e]">Kshitij</h4>
                <p className="text-sm text-gray-500">Operational Head</p>
              </div>
              <div className="bg-blue-700 p-3 rounded-full text-white">
                <FiPhoneCall className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
