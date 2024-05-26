import React from "react";
import { useAppContext } from "../../contexts";
import settingButton from "../../assets/icons/settingButton.svg";
import notificationButton from "../../assets/icons/notificationButton.svg";
import { useSidebarContext } from "../../contexts/sidebarContext";

export default function Header() {
  const { headerTitle } = useAppContext();
  const { expanded } = useSidebarContext();

  return (
    <header className="h-[3.5rem] w-full flex justify-center items-center px-3">
      <div className="w-[95%] flex justify-between items-center bg-white">
        <h1 className="font-medium text-[1.25rem]">{headerTitle}</h1>
        <div
          className={`flex justify-between items-center ${
            expanded ? "w-[10%]" : "w-[8%]"
          }`}
        >
          <div className="cursor-pointer">
            <img src={settingButton} alt="setting" />
          </div>
          <div className="cursor-pointer">
            <img src={notificationButton} alt="notification" />
          </div>
        </div>
      </div>
    </header>
  );
}
