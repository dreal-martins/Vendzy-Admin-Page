import React, { useEffect, useState } from "react";
import { ConfigProvider, Table } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  getAllUserService,
  getUserById,
  getUserDocsService,
} from "../../../services";
import { toast } from "react-toastify";

const UserTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDocs, setUserDocs] = useState({});
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getAllUserService();
        if (usersResponse.success) {
          setUsers(usersResponse.data.data);
        } else {
          toast.error("An error occurred while fetching users.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.message === "Network Error") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleExpand = async (key) => {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
    } else {
      setExpandedRowKeys([...expandedRowKeys, key]);

      if (!userDocs[key]) {
        try {
          const [docsResponse, userResponse] = await Promise.all([
            getUserDocsService(key),
            getUserById(key),
          ]);

          setUserDocs((prev) => ({ ...prev, [key]: docsResponse.data }));
          setUserDetails((prev) => ({ ...prev, [key]: userResponse.data }));
        } catch (error) {
          console.error("Error fetching user details or docs:", error);
          toast.error("An error occurred while fetching user details.");
        }
      }
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        const fullName = `${record.first_name || "-"} ${
          record.last_name || "-"
        }`;
        const defaultPic =
          "https://res.cloudinary.com/dfruoqaze/image/upload/v1718272879/nfmbcd53l2xxaqpsop3y.jpg";
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={record.user_avatar_url || defaultPic}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h4 className="text-[#232323] text-[0.9rem] font-medium capitalize">
                {fullName}
              </h4>
              <p className="text-[#9B9697] text-[0.9rem]">
                {record.referral_code}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (text, record) => (
        <div>
          <h4 className="text-[#232323] text-[0.9rem] font-medium">
            {record.phone || "-"}
          </h4>
          <p className="text-[#9B9697] text-[0.9rem]">{record.email}</p>
        </div>
      ),
    },
    {
      title: "Account Type",
      dataIndex: "user_type",
      key: "user_type",
      render: (text) => (
        <h2 className="text-[#232323] font-medium uppercase">{text}</h2>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <h2 className="text-[#232323] font-medium">
          {new Date(text).toLocaleDateString()}
        </h2>
      ),
    },
    {
      title: "Account Status",
      key: "account_status",
      dataIndex: "account_status",
      render: (text, record) => {
        const isExpanded = expandedRowKeys.includes(record.id);
        return (
          <div className="flex justify-between items-center">
            <h2
              className={`${
                text === "ACTIVE"
                  ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center rounded-full py-1 px-3 text-[0.9rem]"
                  : "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] text-center rounded-full py-1 px-3 text-[0.9rem]"
              }`}
            >
              {text}
            </h2>

            <div className="flex justify-between items-center w-[30%]">
              <h1
                className="text-[1.1rem] cursor-pointer"
                onClick={() => handleExpand(record.id)}
              >
                <FaChevronDown
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </h1>
              <h1 className="text-[1.1rem] cursor-pointer">
                <HiDotsHorizontal />
              </h1>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerColor: "#9B9697",
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={users.map((user) => ({ ...user, key: user.id }))}
        loading={loading}
        pagination={true}
        expandedRowKeys={expandedRowKeys}
        rowClassName={(record) =>
          expandedRowKeys.includes(record.key) ? "expanded" : ""
        }
        expandable={{
          expandIcon: () => {},
          expandedRowRender: (record) => {
            const docs = userDocs[record.key] || {};
            const user = userDetails[record.key] || {};

            return (
              <div className="py-5 pl-[3.2rem]">
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Basic information
                </h2>
                <div className="flex justify-between items-start pt-3">
                  <div className="w-[30%]">
                    <div className="">
                      <h2 className="text-[0.9rem] text-[#9B9697]">Address</h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3 capitalize">
                        {user.contact_address || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                        Country
                      </h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                        {user.country || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                        Payment ID
                      </h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                        {user.payment_id || "-"}
                      </h2>
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <h2 className="text-[#9B9697] text-[0.9rem]">State</h2>
                    <div className="pt-2">
                      <h2 className="font-medium text-[#232323] text-[1rem]">
                        {user.state || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">LGA</h2>
                      <h2 className="font-medium text-[#232323] text-[1rem]">
                        {user.city || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">BVN</h2>
                      <h2 className="text-[1rem] text-[#5C5959] pt-3 font-medium">
                        {user.bvn || "-"}
                      </h2>
                    </div>
                  </div>

                  <div className="w-[30%]">
                    <h2 className="text-[#9B9697] text-[0.9rem]">Documents</h2>
                    <div className="flex justify-start items-center gap-5 pt-2 pb-4">
                      <div className="w-[35%]">
                        {docs.identification_doc_url ? (
                          <img
                            src={docs.identification_doc_url}
                            alt=""
                            className="w-[90px] h-[90px] border border-[#F0F0F0] shadow-lg rounded-xl"
                          />
                        ) : (
                          "-"
                        )}

                        <h2 className="text-[#5C5959] pt-2 font-medium text-[0.9rem]">
                          {docs.identification_doc || "ID card"}
                        </h2>
                      </div>
                      <div className="w-[35%]">
                        {docs.proof_of_address_url ? (
                          <img
                            src={docs.proof_of_address_url}
                            alt=""
                            className="w-[90px] h-[90px] border border-[#F0F0F0] shadow-lg rounded-xl"
                          />
                        ) : (
                          "-"
                        )}

                        <h2 className="text-[#5C5959] pt-2 font-medium text-[0.9rem] capitalize">
                          {docs.proof_of_address_doc || "Proof of address"}
                        </h2>
                      </div>
                    </div>
                    <Link
                      to={`user-detail/${record.id}`}
                      className="border border-[#F0F0F0] rounded-full py-1 px-4 font-medium text-[0.9rem] text-[#5271FF]"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            );
          },
        }}
        onExpand={(expanded, record) => handleExpand(record.key)}
      />
    </ConfigProvider>
  );
};

export default UserTable;
