import { useTable, useGlobalFilter, useFilters } from "react-table";
import { data as mockData } from "./MOCK_DATA";
import { COLUMNS } from "./columns";
import { useMemo } from "react";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

// IMPORTANT!!
// Note that this is client side filtering - only the data available in the
// client, i.e. the browser will be filtered. If the table is showing a
// subset of the total data (for example, the first 100 records out of a few
// hundred thousand of records), you'll need server side filtering instead!

// NOTE that global filtering and column filtering work in conjunction 
// with each other - column filtering filters the subset obtained with
// global filtering! :)
export const ColumnFilteringTable = () => {
  // React table requires memoisation
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, []);

  // To avoid having to add the key: value pair:
  //     Filter: ColumnFilter,
  // to every column definition object in columns.js, we create a _default_
  // column definition here (see below). Notice how we then add this 
  // default column to the object argument passed to the useTable() hook.
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    }
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
