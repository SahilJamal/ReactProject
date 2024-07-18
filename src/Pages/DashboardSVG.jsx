import React, { useState } from "react";

const Dashboard = ({ isHovered, onHover }) => {
  const fill = isHovered ? "#FFD700" : "#87CEEB";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      width="800"
      height="600"
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="#f4f4f4" />

      {/* Dashboard Container */}
      <rect x="50" y="50" width="700" height="500" fill="#ffffff" />

      {/* Chart */}
      <rect x="100" y="100" width="200" height="150" fill={fill} />
      <text x="200" y="180" fontSize="20" fill="#ffffff" textAnchor="middle">
        Chart
      </text>

      {/* Card */}
      <rect x="400" y="100" width="200" height="150" fill={fill} />
      <text x="500" y="180" fontSize="20" fill="#000000" textAnchor="middle">
        Card
      </text>

      {/* Interaction Indicator */}
      {isHovered && <circle cx="750" cy="50" r="20" fill="#FF0000" />}
    </svg>
  );
};

const DashboardSVG = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Dashboard isHovered={isHovered} onHover={() => setIsHovered(true)} />
      <Dashboard isHovered={false} onHover={() => setIsHovered(false)} />
    </div>
  );
};

export default DashboardSVG;
