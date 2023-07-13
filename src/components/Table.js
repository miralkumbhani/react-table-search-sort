import TableBody from "./TableBody";
import TableHead from "./TableHead";
import data from "../data/data.json";
import { useState } from "react";

const Table = () => {
  const [tableData, setTableData] = useState(data);
  const columns = [
    {
      label: "ID",
      accessor: "id",
      sortable: true,
    },
    {
      label: "First Name",
      accessor: "first_name",
      sortable: true,
    },
    {
      label: "Last Name",
      accessor: "last_name",
      sortable: true,
    },
    {
      label: "Email",
      accessor: "email",
      sortable: true,
    },
    {
      label: "Gender",
      accessor: "gender",
      sortable: false,
    },
    {
      label: "University",
      accessor: "university",
      sortable: true,
    },
  ];

  const handleSorting = (sortField, sortOrder) => {
    console.log(
      "🚀 ~ file: Table.js:34 ~ handleSorting ~ sortOrder:",
      sortOrder
    );
    console.log(
      "🚀 ~ file: Table.js:34 ~ handleSorting ~ sortField:",
      sortField
    );
    if (sortField) {
      const sortedData = [...data].sort((a, b) => {
        return (
          a?.[sortField]
            ?.toString()
            ?.localeCompare(b?.[sortField]?.toString(), "en", {
              numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sortedData);
    }
  };

  return (
    <>
      <h3>Table with Sorting and Searching</h3>
      <table>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody data={tableData} columns={columns} />
      </table>
    </>
  );
};

export default Table;
