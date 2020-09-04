import MUIDataTable from "mui-datatables";
import useRequest from "../../lib/hooks";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

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
    name: "מימוש",
    options: {
      filter: true,
      sort: false,
      customBodyRender:   (value, tableMeta, updateValue) => {
        return (
          <div>
            <Switch
              checked={value}
              onChange={ async (e) => {
                console.log(tableMeta.rowData[0])
                updateValue(!value);
                try {
                 const updatedLead = await axios.post('/api/completedToggle', { id: tableMeta?.rowData[0] , value})
                  console.log('====================================');
                  console.log(updatedLead);
                  console.log('====================================');
                } catch (error) {
                  console.log('====================================');
                  console.log(e);
                  console.log('====================================');
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
  const options = {
    selectableRows: "multiple",
  };

  return (
    <>
      <div>ליידים</div>
      {data ? (
        <MUIDataTable
          title={"MAINSTREAM LEAD LIST"}
          data={data.allLeads}
          columns={columns}
          options={options}
        />
      ) : (
        "רגע גבר, טוען..."
      )}
    </>
  );
  // if (data) {
  //   return (

  //   );
  // } else {
  //   return (
  //     <><h1>רגע גבר, טוען...</h1></>
  //   )
  // }
};

export default leadTable;
