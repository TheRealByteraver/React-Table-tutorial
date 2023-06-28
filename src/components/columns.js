import { ColumnFilter } from './ColumnFilter';


// Header == label for each column
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    // We need to disable filtering with an additional key "disableFilters". 
    // Note that "ColumnFilter" is a React Component that receives "setFilter"
    // as a parameter.
    // Filter: ColumnFilter, // removed here as it is added in the
    // "ColumnFilteringTable" component, in the definition of the "defaultColumn"
    disableFilters: true,
    sticky: 'left',

  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
    // Filter: ColumnFilter,
    sticky: 'left',
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
    // Filter: ColumnFilter,
    sticky: 'left',
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    // customize the output of the table cell. This does not affect sorting,
    // only how the table visualizes the data, here the date of birth.
    Cell: ({value}) => {
      const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const date = new Date(value);
      const day = days[date.getDay()]; // 0 == sunday
      const month = months[date.getMonth()];
      const year = `${date.getFullYear()}`;
      return `${day}, ${date.getDate()} of ${month}, ${year}`;
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Footer: "Email",
  },
  {
    Header: "Age",
    accessor: "age",
    Footer: "Age",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
