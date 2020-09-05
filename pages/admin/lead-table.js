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
    name: "phone",
    label: "טלפון",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "prize",
    label: "זכיה",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "created_at",
    label: "תאריך",
    options: {
      customBodyRender: (value) => {
        return (
          <div>
            <Moment locale="he_IL" format="d MMM hh:ss">
                {value}
            </Moment>
          </div>
        )
      },
    },
  },
  {
    name: "compoleted",
    label: "מישוש",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div>
            <Switch
              checked={value}
              onChange={async (e) => {
                console.log(tableMeta.rowData[0], tableMeta);
                updateValue(!value);
                try {
                  const updatedLead = await axios.post("/api/completedToggle", {
                    id: tableMeta?.rowData[0],
                    compoleted: !tableMeta?.rowData[4],
                  });
                  console.log("====================================");
                  console.log(updatedLead, { test: tableMeta?.rowData[4] });
                  console.log("====================================");
                } catch (error) {
                  console.log("====================================");
                  console.log(e);
                  console.log("====================================");
                }
              }}
            />
          </div>
        );
      },
    },
  },
];

const leadTable = () => {
  const { data } = useRequest({
    url: "/api/leads",
  });
  console.log("====================================");
  console.log(data, "lead table");
  console.log("====================================");
  const options = {
    selectableRows: "multiple",
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>טבלת ליידים - חישגד מיינסטרים</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "0 auto",
          width: "100vw",
        }}
      >
        {data ? (
          <MUIDataTable
            title={"MAINSTREAM LEAD LIST"}
            data={data.allLeads}
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

export default leadTable;
