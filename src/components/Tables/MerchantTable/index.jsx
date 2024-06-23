import React, { useEffect, useState } from "react";
import { ConfigProvider, Table } from "antd";
import { FaChevronDown } from "react-icons/fa";
import idCardImg from "../../../assets/images/idCard.svg";
import proofOfImg from "../../../assets/images/proofOfAddress.svg";
import { Link } from "react-router-dom";
import {
  getAllMerchantService,
  getMerchantByIdService,
  getMerchantDocsService,
} from "../../../services/merchant";
import { toast } from "react-toastify";
import { getInitials } from "../../../utils/helper";

const MerchantTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [merchantDetails, setMerchantDetails] = useState({});
  const [merchantDocs, setMerchantDocs] = useState({});

  useEffect(() => {
    const getMerchants = async () => {
      try {
        const response = await getAllMerchantService();
        setMerchants(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
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
    getMerchants();
  }, []);

  const handleExpand = async (key) => {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
    } else {
      setExpandedRowKeys([...expandedRowKeys, key]);

      if (!merchantDetails[key] || !merchantDocs[key]) {
        try {
          const [detailsResult, docsResult] = await Promise.allSettled([
            getMerchantByIdService(key),
            getMerchantDocsService(key),
          ]);

          if (detailsResult.status === "fulfilled") {
            console.log("details", detailsResult.value);
            setMerchantDetails((prev) => ({
              ...prev,
              [key]: detailsResult.value.data,
            }));
          } else {
            console.error(
              "Error fetching merchant details:",
              detailsResult.reason
            );
            handleFetchError(detailsResult.reason);
          }

          if (docsResult.status === "fulfilled") {
            setMerchantDocs((prev) => ({
              ...prev,
              [key]: docsResult.value.data,
            }));
          } else {
            console.error("Error fetching merchant docs:", docsResult.reason);
            handleFetchError(docsResult.reason);
          }
        } catch (error) {
          console.error("Unexpected error:", error);
          toast.error("An unexpected error occurred.");
        }
      }

      function handleFetchError(error) {
        if (error.message === "Network Error") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while fetching data.");
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

        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {record.user_avertar_url ? (
              <img
                src={record.user_avertar_url}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <div className="w-[40px] h-[40px] rounded-full bg-[#5271FF] text-white flex justify-center items-center text-[1rem] capitalize mr-[10px]">
                {getInitials(fullName)}
              </div>
            )}

            <div>
              <h4 className="text-[#232323] text-[0.9rem] font-medium">
                {fullName}
              </h4>
              <p className="text-[#9B9697] text-[0.9rem]">
                {record.user_txn_ref || "-"}
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
      render: (text) => <h2 className="text-[#232323] font-medium">{text}</h2>,
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
        const isExpanded = expandedRowKeys.includes(record.key);
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
                onClick={() => handleExpand(record.key)}
              >
                <FaChevronDown
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
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
        dataSource={merchants.map((merchant) => ({
          ...merchant,
          key: merchant.id,
        }))}
        pagination={true}
        loading={loading}
        expandedRowKeys={expandedRowKeys}
        rowClassName={(record) =>
          expandedRowKeys.includes(record.key) ? "expanded" : ""
        }
        expandable={{
          expandIcon: () => {},
          expandedRowRender: (record) => {
            const merchant = merchantDetails[record.key] || {};
            const docs = merchantDocs[record.key] || {};
            console.log("merchant", merchant);
            console.log("merchant docs", docs);

            return (
              <div className="py-5 pl-[3.2rem]">
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Basic information
                </h2>
                <div className="flex justify-between items-start pt-3">
                  <div className="w-[30%]">
                    <div>
                      <h2 className="text-[0.9rem] text-[#9B9697]">Address</h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                        {merchant.address || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                        Country
                      </h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                        {merchant.country || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                        Payment ID
                      </h2>
                      <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                        {merchant.payment_id || "-"}
                      </h2>
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <h2 className="text-[#9B9697] text-[0.9rem]">State</h2>
                    <div className="pt-2">
                      <h2 className="font-medium text-[#232323] text-[1rem]">
                        {merchant.state || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">LGA</h2>
                      <h2 className="font-medium text-[#232323] text-[1rem]">
                        {merchant.city || "-"}
                      </h2>
                      <h2 className="text-[0.9rem] text-[#9B9697] pt-3">BVN</h2>
                      <h2 className="text-[1rem] text-[#5C5959] pt-3 font-medium">
                        {merchant.bvn || "-"}
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
                            class
                            Name="w-full h-full"
                          />
                        ) : (
                          "-"
                        )}
                        <h2 className="text-[#5C5959] font-medium text-[0.9rem]">
                          ID card
                        </h2>
                      </div>
                      <div className="w-[35%]">
                        {docs.proof_of_address_url ? (
                          <img
                            src={docs.proof_of_address_url}
                            alt=""
                            className="w-full h-full"
                          />
                        ) : (
                          "-"
                        )}
                        <h2 className="text-[#5C5959] font-medium text-[0.9rem]">
                          Proof of address
                        </h2>
                      </div>
                    </div>
                    <Link
                      to={`merchant-detail/${record.id}`}
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

export default MerchantTable;
