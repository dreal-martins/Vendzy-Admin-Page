import React from "react";

const Menu = ({ fillColor = "#9B9697", active = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99984 18.9584C5.05817 18.9584 1.0415 14.9417 1.0415 10.0001C1.0415 5.05841 5.05817 1.04175 9.99984 1.04175C14.9415 1.04175 18.9582 5.05841 18.9582 10.0001C18.9582 14.9417 14.9415 18.9584 9.99984 18.9584ZM9.99984 2.29175C5.74984 2.29175 2.2915 5.75008 2.2915 10.0001C2.2915 14.2501 5.74984 17.7084 9.99984 17.7084C14.2498 17.7084 17.7082 14.2501 17.7082 10.0001C17.7082 5.75008 14.2498 2.29175 9.99984 2.29175Z"
        fill={active ? fillColor : "#9B9697"}
      />
      <path
        d="M9.99984 10.8334C9.53317 10.8334 9.1665 10.4584 9.1665 10.0001C9.1665 9.54175 9.5415 9.16675 9.99984 9.16675C10.4582 9.16675 10.8332 9.54175 10.8332 10.0001C10.8332 10.4584 10.4665 10.8334 9.99984 10.8334Z"
        fill={active ? fillColor : "#9B9697"}
      />
      <path
        d="M13.3333 10.8334C12.8667 10.8334 12.5 10.4584 12.5 10.0001C12.5 9.54175 12.875 9.16675 13.3333 9.16675C13.7917 9.16675 14.1667 9.54175 14.1667 10.0001C14.1667 10.4584 13.8 10.8334 13.3333 10.8334Z"
        fill={active ? fillColor : "#9B9697"}
      />
      <path
        d="M6.66683 10.8334C6.20016 10.8334 5.8335 10.4584 5.8335 10.0001C5.8335 9.54175 6.2085 9.16675 6.66683 9.16675C7.12516 9.16675 7.50016 9.54175 7.50016 10.0001C7.50016 10.4584 7.1335 10.8334 6.66683 10.8334Z"
        fill={active ? fillColor : "#9B9697"}
      />
    </svg>
  );
};

export default Menu;