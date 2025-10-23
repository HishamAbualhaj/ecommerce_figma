import { isValidElement } from "react";

export interface Column<T extends Record<string, React.ReactNode>> {
  key: keyof T;
  lable: string;
}

interface TableProps<T extends Record<string, React.ReactNode>> {
  columns: Column<T>[];
  data?: T[];
}
const Table = <T extends Record<string, React.ReactNode>>({
  columns,
  data,
}: TableProps<T>) => {
  return (
    <>
      <table className="w-full border-separate border-spacing-y-5">
        <thead>
          <tr className="shadow-sm">
            {columns.map((column, i) => (
              <th className="py-5 px-5" key={i}>
                {column.lable}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <tr className="shadow-sm py-2" key={i}>
              {columns.map((col, i) => (
                <td className="p-5" key={i}>
                  {isValidElement(row[col.key])
                    ? row[col.key]
                    : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
