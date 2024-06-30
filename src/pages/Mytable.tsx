import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Dropdown from "../components/Dropdown";
import IconHorizontalDots from "../components/Icon/IconHorizontalDots";

interface TableProps {
  columns?: Array<{ title: string, accessor: string }>;
  data?: Array<{ [key: string]: any }>;
  display?: (rowData: any) => void;
  click?: (rowData: any) => void;
}

const MyTable: React.FC<TableProps> = ({ columns, data, display, click }) => {
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';


  return (
    <div className="table-bordered mb-5 panel h-auto">
      <div className="table-container" style={{overflowY: 'auto' }}>
        <table>
          <thead >
            <tr >
              {columns?.map((column, index) => (
                <th key={index} className="text-xs">{column.title}</th>
              ))}
             {click && <th className="text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr  key={rowIndex} onClick={() => display && display(row)} style={{ cursor: 'pointer' }}>
                {columns?.map((column, colIndex) => (
                  <td className="text-xs" key={colIndex}>{row[column.accessor] as any}</td>
                ))}
                {click && (
                    <td className="text-center">
                    <div className="flex justify-end gap-1">
                      <button className="btn btn-primary btn-sm">he</button>
                      <button className="btn btn-primary btn-sm">he</button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
