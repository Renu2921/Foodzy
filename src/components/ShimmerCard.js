const ShimmerCard = () => {
  const shimmerCount = 6;
  return (
    <div className="shimmer-container">
      {Array(shimmerCount)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-content">
              <div className="shimmer-line line-short"></div>
              <div className="shimmer-line line-full"></div>
              <div className="shimmer-line line-medium"></div>
              <div className="shimmer-line line-small"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;
