import React, { useState } from "react";
// import logo from "../../assets/images/halfLogo.svg";
import logo_full from "../../assets/images/logo.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../../contexts/sidebarContext";
import Menu from "../Icons/Menu";
import adminImg from "../../assets/images/adminImg.svg";
import Rectangle from "../Icons/Indicatator";

export default function Sidebar({ children }) {
  const { expanded, setExpanded } = useSidebarContext();

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col justify-center border-r shadow-sm">
        <div className="pb-2 flex justify-between items-center relative">
          {expanded ? (
            <img
              src={logo_full}
              alt="phylar logo"
              className={`transition-all h-[35px] w-[138px] pl-1 `}
            />
          ) : (
            <img
              src={logo_full}
              alt="phylar logo"
              className={`transition-all w-[38px] h-[30px] pl-2`}
            />
          )}

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="absolute rounded-full bg-gray-100 hover:bg-gray-200 -right-4 z-20 p-1"
          >
            {expanded ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />}
          </button>
        </div>

        <div className="flex-1 pr-3 mt-4 2xl:mt-8 flex flex-col">
          {children}
        </div>

        <div className="border-t flex justify-start items-center gap-3 px-1 py-3">
          {/* <SidebarItem
            active={false}
            text={"Logout"}
            path={"/auth"}
            icon={<Menu />}
          /> */}

          {expanded && (
            <>
              <div className="">
                <img src={adminImg} alt="" />
              </div>
              <div className="">
                <h2 className="text-[0.9rem] text-[#232323] font-medium">
                  Emmanuel Israel
                </h2>
                <h2 className="text-[0.8rem] text-[#9B9697]">Admin</h2>
              </div>
            </>
          )}

          <div className={`${!expanded && "pl-[10px]"} cursor-pointer`}>
            <Menu />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, path, pathlist }) {
  const { expanded } = useSidebarContext();
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRoute = () => {
    if (path) {
      navigate(`${path}`);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleRoute}
      className={`group cursor-pointer relative flex justify-start items-center gap-4  ${
        expanded && pathname === path ? "" : ""
      }`}
    >
      <div
        className={`flex items-center  ${
          isHovered ? "text-[#5271ff]" : "text-[#9B9697]"
        }`}
      >
        {expanded && pathname === path && <Rectangle />}
        <span className="pl-3">
          {React.cloneElement(icon, {
            fillColor: isHovered ? "#5271FF" : "#9B9697",
          })}
        </span>
        <span
          className={`overflow-hidden flex flex-col transition-all ${
            expanded ? "w-32 ml-3" : "w-0"
          }`}
        >
          <span
            className={`${
              (pathname === path ? "!text-[#5271FF]" : "text-[#9B9697]",
              isHovered ? "text-[#5271FF]" : "text-[#9B9697]")
            }  font-medium text-[1rem] py-3 `}
          >
            {text}
          </span>
        </span>
      </div>

      {!expanded && (
        <div
          className={`absolute left-8 top-3 rounded-md px-2 py-1 ml-4 bg-[#1F2734] text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50`}
        >
          {pathlist ? (
            <ul
              className={`overflow-hidden transition-all duration-500 z-50 flex flex-col gap-3 p-2`}
            >
              {pathlist.map((list, i) => {
                return (
                  <li key={i}>
                    <Link to={list.path}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            text
          )}
        </div>
      )}
    </div>
  );
}
