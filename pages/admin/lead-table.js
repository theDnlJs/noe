import MUIDataTable from "mui-datatables";
import useRequest from "../../lib/hooks";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import React from "react";
import Moment from "react-moment";
import { useUser } from "../../utils/auth/useUser";
import Link from "next/link";
import AdminAppBar from '../../components/AdminAppBar'

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
            <Moment locale="he_IL" format="d MMM HH:ss">
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
                console.log(tableMeta.rowData[0], !value);
                updateValue(!value);
                try {
                  const updatedLead = await axios.put("/api/completedToggle", {
                    id: tableMeta?.rowData[0],
                    compoleted: !value,
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
  const options = {
    selectableRows: "none",
  };
  const { user, logout } = useUser();
  const { data } = useRequest({
    url: "/api/leads",
  });
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
  const completed = data?.allLeads?.filter((item)=>{
    console.log(item)
    item.compoleted === true
  })
  return (
    <>
    <h4 style={{ textAlign:'center',display:'felx',justifyContent:'center'}}>
    עד כה מספר המשתתפים הוא {'  '}
    {data && data.allLeads.length}
    {'  '}
    </h4>
    <h4 style={{ textAlign:'center',display:'felx',justifyContent:'center'}}>
    מספר המשתתפים שלא ממישמו {'  '}
    {data && completed.length }
    {'  '}
    </h4>
 
    <AdminAppBar/>
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
