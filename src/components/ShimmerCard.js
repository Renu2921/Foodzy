import React from "react";

const ShimmerCard = () => {
  const shimmerCount = 6;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 animate-pulse">
      {Array(shimmerCount)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gray-300 w-full"></div>

            {/* Content placeholder */}
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;
