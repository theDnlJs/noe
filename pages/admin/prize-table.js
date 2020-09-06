import MUIDataTable from "mui-datatables";
import useRequest from "../../lib/hooks";
import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../../utils/auth/useUser";
import Link from "next/link";

const columns = [
  {
    name: "_id",
    label: "id",
    options: {
      display: "excluded",
    },
  },
  {
    name: "name",
    label: "שם",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "desc",
    label: "תיאור",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "smsTemplate",
    label: "הודעת sms",
  },
  {
    name: "imgUrl",
    label: "תמונה",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <img
              alt={value}
              style={{ width: "50px", height: "50px" }}
              src={value}
            />
          </>
        );
      },
    },
  },
  {
    name: "quantity",
    label: "כמות",
  },
  {
    name: "chances",
    label: "סיכוי",
    options: {
      customBodyRender: (value) => {
        return (
          <div>
            {value === 100 && "שכיח"}
            {value === 50 && "נדיר"}
            {value === 1 && "נדיר מאוד"}
          </div>
        );
      },
    },
  },
];

const prizeTable = () => {
  const router = useRouter();
    const options = {
      selectableRows: "none",
      onRowClick: (rowData, rowMeta, rowExpanded) => {
        console.log("====================================");
        console.log(rowData, rowMeta, rowExpanded);
        console.log("====================================");
        router.push(`/admin/prize/${rowData[0]}/edit`);
      },
    };
  const { data } = useRequest({
    url: "/api/prizes",
  });
  const { user, logout } = useUser();
  if (!user) {
    return (
      <>
        <p>היי גבר</p>
        <p>
          אתה לא מחובר
          <Link href={"/auth"}>
            <a> התחבר</a>
          </Link>
        </p>
      </>
    );
  }
  if (user) {
    
    console.log("====================================");
    console.log(data, "lead table");
    console.log("====================================");
    return (
      <>
        <h1 style={{ textAlign: "center" }}>טבלת פרסים - חישגד מיינסטרים</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {data ? (
            <MUIDataTable
              title={"MAINSTREAM LEAD LIST"}
              data={data.allPrizes}
              columns={columns}
              options={options}
            />
          ) : (
            <div>
              <h1>רגע גבר, טוען לך...</h1>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default prizeTable;
