import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { Cards } from "../OverView";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import filterIcon from "../../assets/icons/sortIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import UserTable from "../../components/Tables/UserTable";
import { getAllUserService } from "../../services";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Users = () => {
  const { setHeaderTitle } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setHeaderTitle("Users");
  }, [setHeaderTitle]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getAllUserService();
        if (response.success) {
          setUsers(response.data.data);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } catch (error) {
        if (error.message === "Network Error") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filterUsers = (users) => {
    const filteredUsers = {
      users: [],
      buyers: [],
      sellers: [],
    };

    users.forEach((user) => {
      switch (user.user_type) {
        case "USER":
          filteredUsers.users.push(user);
          break;
        case "buyer":
          filteredUsers.buyers.push(user);
          break;
        case "seller":
          filteredUsers.sellers.push(user);
          break;
        default:
          break;
      }
    });

    return filteredUsers;
  };

  const filteredMembers = filterUsers(users);
  const filteredUsers = filteredMembers.users;
  const filteredBuyers = filteredMembers.buyers;
  const filteredSellers = filteredMembers.sellers;

  if (loading) {
    <Loader />;
  }

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[90vh]">
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <Cards
            name={"Users"}
            number={filteredUsers.length}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            color={"#449E6A"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Vendors"}
            number={filteredSellers.length}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            color={"#449E6A"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Buyers"}
            number={filteredBuyers.length}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
      </div>
      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2>Users</h2>
          <div className="flex justify-between items-center w-[45%]">
            <div className="w-[55%] relative ">
              <input
                className="border border-[#F0F0F0] rounded-full py-1 pl-10 outline-none w-full"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-3 top-1.5">
                <img src={searchIcon} alt="icon" />
              </span>
            </div>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
