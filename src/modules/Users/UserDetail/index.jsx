import React, { useEffect, useState } from "react";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import { FaChevronDown } from "react-icons/fa6";
import messageIcon from "../../../assets/icons/messageIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import avatar from "../../../assets/icons/avatarIcon.svg";
import Transactions from "../../Transactions";
import Orders from "../../Orders";
import { useAppContext } from "../../../contexts";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserById, getUserDocsService } from "../../../services";
import Loader from "../../../components/Loader";
import { getInitials, handleBackNavigate } from "../../../utils/helper";

const UserDetail = () => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);
  const [isKycExpanded, setIsKycExpanded] = useState(false);
  const [istransactionExpanded, setIsTransactionExpanded] = useState(false);
  const [isOrderedExpanded, setIsOrderedExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userDocs, setUserDocs] = useState({});
  const { setHeaderTitle } = useAppContext();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderTitle("User");
  }, [setHeaderTitle]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await getUserById(userId);
        if (response.success) {
          setUser(response.data);
          const getUserDocs = await getUserDocsService(userId);
          setUserDocs(getUserDocs.data);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
        setLoading(false);
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
    getUserDetails();
  }, [userId]);

  const handleDetail = () => {
    setIsDetailExpanded(!isDetailExpanded);
    setIsKycExpanded(false);
  };

  const handleKyc = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(!isKycExpanded);
  };

  const handleTransaction = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(false);
    setIsTransactionExpanded(!istransactionExpanded);
  };

  const handleOrder = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(false);
    setIsTransactionExpanded(false);
    setIsOrderedExpanded(!isOrderedExpanded);
  };

  if (loading) {
    return <Loader />;
  }

  const defaultPic =
    "https://res.cloudinary.com/dfruoqaze/image/upload/v1718272879/nfmbcd53l2xxaqpsop3y.jpg";

  return (
    <div className="h-[85vh] overflow-auto">
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleBackNavigate(navigate)}
          className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-4 py-2 gap-2 shadow-lg"
        >
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
          Back
        </button>
        <button className="bg-[#EF5959] text-white border border-[#F0F0F0] rounded-full px-4 py-2 shadow-lg">
          Suspend account
        </button>
      </div>

      <div className="pt-7">
        <div
          onClick={handleDetail}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isDetailExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Details</h2>
          <div
            onClick={handleDetail}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isDetailExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isDetailExpanded && (
          <div className="flex justify-start items-start p-5">
            <div className="w-[40%]">
              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="border border-[#F0F0F0] rounded-full">
                  <img
                    src={user.user_avatar_url || defaultPic}
                    alt="img"
                    className="w-[96px] h-[96px] rounded-full"
                  />
                </div>
                <div className="">
                  <h2 className="text-[#232323] font-bold text-[1.4rem] capitalize">
                    {user.first_name || "-"} {user.last_name || "-"}
                  </h2>
                  <button
                    className={`${
                      user.account_status === "ACTIVE"
                        ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center rounded-full py-1 px-3 text-[0.9rem]"
                        : "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] text-center rounded-full py-1 px-3 text-[0.9rem]"
                    }`}
                  >
                    {user.account_status}
                  </button>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-4">
                <div className="cursor-pointer">
                  <a href={`mailto:${user.email}`}>
                    <img src={messageIcon} alt="Email" />
                  </a>
                </div>
                <div className="cursor-pointer">
                  <a href={`tel:${user.phone}`}>
                    <img src={phoneIcon} alt="Phone" />
                  </a>
                </div>
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="text-center border border-[#F0F0F0] py-3 px-10 rounded-xl">
                  <h2 className="pb-1 text-[#5C5959] text-[0.9rem]">Escrow</h2>
                  <h2 className="text-[#232323] font-bold">₦20,453.00</h2>
                </div>
                <div className="text-center border border-[#F0F0F0] py-3 px-10 rounded-xl">
                  <h2 className="pb-1 text-[#5C5959] text-[0.9rem]">Wallet</h2>
                  <h2 className="text-[#232323] font-bold">₦905,778.25</h2>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">User ID</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  {user.id || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">First name</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.first_name || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Last name</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.last_name || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Email</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  {user.email || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Phone number</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  {user.phone || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Payment ID</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  www.vendyz.com/{user.first_name || "-"}
                </h2>
              </div>
            </div>

            <div className="w-[25%]">
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Address</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.contact_address}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Country</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.country || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">State</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.state || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">LGA</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.city || "-"}
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Account type</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium capitalize">
                  {user.user_type}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleKyc}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isKycExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">KYC</h2>
          <div
            onClick={handleKyc}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isKycExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isKycExpanded && (
          <div className="flex justify-between items-start p-5">
            <div className="flex w-[40%] justify-between items-start gap-11">
              <div className="p-4">
                <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[270px] border-[3px] border-[#F0F0F0] shadow-xl rounded-[3.2rem] p-5 items-center flex justify-center">
                  {userDocs.identification_doc_url ? (
                    <img
                      src={userDocs.identification_doc_url}
                      alt=""
                      className="w-full h-full"
                    />
                  ) : (
                    <span className="text-[#9B9697] text-[0.9rem]">
                      No file
                    </span>
                  )}
                </div>
                <div className="py-5">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-2">
                    ID Type
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-bold pb-3 capitalize">
                    {userDocs.identification_doc || "-"}
                  </h2>
                  {userDocs.owner_docs_verification_status === "VERIFIED" ? (
                    <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Approved
                    </button>
                  ) : userDocs.owner_docs_verification_status === "PENDING" ? (
                    <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#232323] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Pending
                    </button>
                  ) : (
                    <button className="border-[1.5px] border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Disapproved
                    </button>
                  )}
                </div>
                <div className="pb-4">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-1">
                    ID number
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-medium pb-1">
                    {userDocs.identification_number || "-"}
                  </h2>
                </div>
                {userDocs.owner_docs_verification_status === "PENDING" ? (
                  <div className="flex justify-between items-center gap-3">
                    <button className="bg-[#5271FF] rounded-full py-2 px-4 text-[1rem] text-[#FFFFFF] shadow-xl">
                      Approve
                    </button>
                    <button className="bg-[#FFFFFF] rounded-full py-2 px-4 text-[1rem] text-[#5C5959] shadow-xl border border-[#F0F0F0]">
                      Disapprove
                    </button>
                  </div>
                ) : userDocs.verified_by ? (
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#5271FF] text-white flex justify-center items-center text-[0.875rem] capitalize">
                      {getInitials(userDocs.verified_by)}
                    </div>
                    <div>
                      <h2 className="text-[1rem] 2xl:text-[1.1rem] text-[#9B9697]">
                        {userDocs.verified_by}
                      </h2>
                    </div>
                  </div>
                ) : (
                  "-"
                )}
              </div>
              <div className="p-4">
                <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[270px] border-[3px] border-[#F0F0F0] shadow-xl rounded-[3.2rem] p-5 items-center flex justify-center">
                  {userDocs.proof_of_address_url ? (
                    <img
                      src={userDocs.proof_of_address_url}
                      alt=""
                      className="w-full h-full"
                    />
                  ) : (
                    <span className="text-[#9B9697] text-[0.9rem]">
                      No file
                    </span>
                  )}
                </div>
                <div className="py-5">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-2">
                    Document type
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-bold pb-3 capitalize">
                    {userDocs.proof_of_address_doc || "-"}
                  </h2>
                  {userDocs.proof_of_address_verification_status ===
                  "VERIFIED" ? (
                    <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Approved
                    </button>
                  ) : userDocs.owner_docs_verification_status === "PENDING" ? (
                    <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#232323] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Pending
                    </button>
                  ) : (
                    <button className="border-[1.5px] border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                      Disapproved
                    </button>
                  )}
                </div>
                {userDocs.proof_of_address_verification_status === "PENDING" ? (
                  <div className="flex justify-between items-center gap-3">
                    <button className="bg-[#5271FF] rounded-full py-2 px-4 text-[1rem] text-[#FFFFFF] shadow-xl">
                      Approve
                    </button>
                    <button className="bg-[#FFFFFF] rounded-full py-2 px-4 text-[1rem] text-[#5C5959] shadow-xl border border-[#F0F0F0]">
                      Disapprove
                    </button>
                  </div>
                ) : userDocs.verified_by ? (
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#5271FF] text-white flex justify-center items-center text-[0.875rem] capitalize">
                      {getInitials(userDocs.verified_by)}
                    </div>
                    <div>
                      <h2 className="text-[1rem] 2xl:text-[1.1rem] text-[#9B9697]">
                        {userDocs.verified_by}
                      </h2>
                    </div>
                  </div>
                ) : (
                  "-"
                )}
              </div>
            </div>
            <div className="p-4 w-[35%]">
              <div className="pb-5">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-2">BVN</h2>
                <h2 className="text-[#232323] text-[1rem] font-bold pb-2">
                  1234 5678 901
                </h2>
                <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem]">
                  Approved
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img src={avatar} alt="" />
                <div>
                  <h2>Moses Chima</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleTransaction}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            istransactionExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Transactions</h2>
          <div
            onClick={handleTransaction}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: istransactionExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {istransactionExpanded && (
          <div className="py-5">
            <Transactions />
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleOrder}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isOrderedExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Orders</h2>
          <div
            onClick={handleOrder}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isOrderedExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isOrderedExpanded && (
          <div className="py-5">
            <Orders />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
