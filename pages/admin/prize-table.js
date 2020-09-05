import MUIDataTable from "mui-datatables";
import useRequest from "../../lib/hooks";
import React from "react";
import { useRouter } from 'next/router'





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
        {value === 100 && 'שכיח'}
        {value === 50 && 'נדיר'}
        {value === 50 && 'נדיר מאוד'}

      </div>
      )
      }
    }
  },
];

const prizeTable = () => {
  const { data } = useRequest({
    url: "/api/prizes",
  });
  const router = useRouter()

  console.log("====================================");
  console.log(data, "lead table");
  console.log("====================================");
  const options = {
    selectableRows: "single",
    onRowClick: (rowData, rowMeta, rowExpanded) => {
      console.log('====================================');
      console.log(rowData, rowMeta,rowExpanded);
      console.log('====================================');
      router.push(`/admin/prize/${rowData[0]}/edit`)
    }
  };
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
};

export default prizeTable;
