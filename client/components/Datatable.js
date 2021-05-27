import { forwardRef, useRef, useState } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Height from '@material-ui/icons/Height';
import MaterialTable from 'material-table';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Resize: forwardRef((props, ref) => <Height {...props} ref={ref} />),
};

export default function Datatable(props) {
  const tableRef = useRef();
  const [state, setState] = useState(
    {
      text: "text",
      selecteds: 0,
      data: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          isMarried: true,
          birthDate: new Date(1987, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
        {
          id: 2,
          name: "Nguyễn Văn B",
          isMarried: true,
          birthDate: new Date(1998, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
        {
          id: 3,
          name: "Nguyễn Văn C",
          isMarried: true,
          birthDate: new Date(2005, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
        {
          id: 4,
          name: "Nguyễn Văn D",
          isMarried: true,
          birthDate: new Date(1962, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
        {
          id: 5,
          name: "Nguyễn Văn E",
          isMarried: true,
          birthDate: new Date(1974, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
        {
          id: 6,
          name: "Nguyễn Văn F",
          isMarried: true,
          birthDate: new Date(2020, 1, 1),
          sex: "Male",
          insertDateTime: "2020-11-23T08:15:30-05:00",
        },
      ],
      columns: [
        {
          title: "ID",
          field: "id",
          cellStyle: {
            maxWidth:70,
          }
        },
        {
          title: "Fullname",
          field: "name",
          editable: "always",
          cellStyle: {
            minWidth:250,
          }
        },
        {
          title: "Sex",
          field: "sex",
          disableClick: true,
          editable: "always",
          cellStyle: {
            minWidth:250,
          }
        },
        { 
          title: "Birth", 
          field: "birthDate", 
          type: "date",
          cellStyle: {
            minWidth:250,
          }
        },
        { 
          title: "Created Time", 
          field: "insertDateTime", 
          type: "datetime",
          cellStyle: {
            minWidth:250,
          }
        },
      ],
    }
  );
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    <MaterialTable
      icons={tableIcons}
      tableRef={tableRef}
      columns={state.columns}
      data={state.data}
      title="Demo Datatable"
      onFilterChange={(appliedFilter) => {
        console.log("selected Filters : ", appliedFilter);
      }}
      options={{
        tableLayout: "auto",
        columnResizable: true,
        headerSelectionProps: {
          color: "primary",
        },
        paginationType: 'stepped',
        selection: false,
        selectionProps: (rowData) => {
          rowData.tableData.disabled = rowData.name === "A1";
          return {
            disabled: rowData.name === "A1",
            color: "primary",
          };
        },
      }}
    >

    </MaterialTable>
    </>
  )
}