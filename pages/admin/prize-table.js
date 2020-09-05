import MUIDataTable from "mui-datatables";
import useRequest from "../../lib/hooks";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import React from "react";
import Moment from "react-moment";

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
    },
  },
  {
    name: "quantity",
    label: "כמות",
  },
];

const prizeTable = () => {
  const { data } = useRequest({
    url: "/api/prizes",
  });
  console.log("====================================");
  console.log(data, "lead table");
  console.log("====================================");
  const options = {
    selectableRows: "multiple",
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
