import React from "react";

const OverlaySection = () => {
  return (
    <div className="relative w-full" style={{ height: "150vh" }}>
      {/* Background Image */}
      <img
        src="/overlay-img.jpg" // ← Apna image path yaha daal
        alt="Hero Robot"
        className="w-100px h-full object-cover"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-70 bg-gradient-to-b from-transparent via-[rgba(0,99,248,0.6)] to-white pointer-events-none" />
    </div>
  );
};

export default OverlaySection;
