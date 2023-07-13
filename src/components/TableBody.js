const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data?.map((details) => {
        return (
          <tr key={details?.id}>
            {columns?.map(({ accessor }) => {
              return <td key={accessor}>{details?.[accessor] || "-"}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
