import { useState } from "react";

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortOrder = (accessor) => {
    const order =
      accessor === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setSortOrder(order);
    handleSorting(accessor, order);
  };

  return (
    <thead>
      <tr>
        {columns?.map(({ label, accessor, sortable }) => {
          const sortClassName = sortable
            ? sortField === accessor && sortOrder === "asc"
              ? "up"
              : sortField === accessor && sortOrder === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSortOrder(accessor) : null}
              className={sortClassName}
            >
              {label}
              {sortable ? (
                sortField === accessor && sortOrder === "asc" ? (
                  <i className="bi bi-caret-up-fill"></i>
                ) : sortField === accessor && sortOrder === "desc" ? (
                  <i className="bi bi-caret-down-fill"></i>
                ) : (
                  <i className="bi bi-caret-down-fill"></i>
                )
              ) : (
                ""
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
