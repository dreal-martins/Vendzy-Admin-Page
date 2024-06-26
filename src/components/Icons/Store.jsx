import React from "react";

const Store = ({ fillColor = "#9B9697", active = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={active ? fillColor : "#9B9697"}
        d="M45.8 16.4v-.3l-5-10.9A2 2 0 0 0 39 4H9a2 2 0 0 0-1.8 1.2L2.3 16.1v.3a6 6 0 0 0 1 5.2 6.9 6.9 0 0 0 2.8 2V41a2.9 2.9 0 0 0 3 3H39a2.9 2.9 0 0 0 3-3V23.6a6.9 6.9 0 0 0 2.8-2 6 6 0 0 0 1-5.2M6 17.6 10.3 8h27.4l4.3 9.6a1.9 1.9 0 0 1-.4 1.5 2.1 2.1 0 0 1-1.8.9h-.9a2.2 2.2 0 0 1-2.3-2.1 2 2 0 0 0-4 0 2.1 2.1 0 0 1-2.2 2.1h-2.2a2.1 2.1 0 0 1-2.2-2.1 2 2 0 0 0-4 0 2.1 2.1 0 0 1-2.2 2.1h-2.2a2.1 2.1 0 0 1-2.2-2.1 2 2 0 0 0-4 0A2.2 2.2 0 0 1 9.1 20h-.9a2.1 2.1 0 0 1-1.8-.9 1.9 1.9 0 0 1-.4-1.5M35 40V27h-7v13H10V23.9a5.9 5.9 0 0 0 3.4-1.5 6.3 6.3 0 0 0 4.2 1.6h2.2a6.3 6.3 0 0 0 4.2-1.6 6.3 6.3 0 0 0 4.2 1.6h2.2a6.3 6.3 0 0 0 4.2-1.6 5.9 5.9 0 0 0 3.4 1.5V40Z"
      />
      <path fill={active ? fillColor : "#9B9697"} d="M13 27h11v10H13z" />
    </svg>
  );
};

export default Store;
