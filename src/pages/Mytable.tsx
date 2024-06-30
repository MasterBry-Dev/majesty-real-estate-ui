import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import Dropdown from "../components/Dropdown";
import IconHorizontalDots from "../components/Icon/IconHorizontalDots";

interface TableProps {
  columns?: Array<{ title: string, accessor: string }>;
  data?: Array<{ [key: string]: any }>;
  display?: (rowData: any) => void;
  click?: (rowData: any) => void;
  test?: (rowData: any) => void;
  buttons: any;
}

const MyTable: React.FC<TableProps> = ({ columns, data, display, click, buttons }) => {
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

  const handleRowClick = (row: any, rowIndex: number) => {
    setActiveRowIndex(rowIndex);
    if (display) {
      display(row);
    }
  };

  return (
    <div className="panel">
        <div  className="flex justify-end gap-2 mb-5">
            {buttons?.map((btn: any, index: any) => (
                  <button key={index}  onClick={() => btn.click && btn.click(index + 1)}className={`btn btn-sm ${btn.btn_color}`}>{btn.button}</button> 
            ))}
        </div>
          <div className=" mb-5">
                <div className="table-responsive rounded-lg" style={{ overflowY: 'auto' }}>
                  <table className="">
                    <thead >
                      <tr>
                        {columns?.map((column, index) => (
                          <th  key={index} className="text-xs">{column.title}</th>
                        ))}
                        {click && <th className="text-center">Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((row, rowIndex) => (
                        <tr 
                          key={rowIndex} 
                          onClick={() => handleRowClick(row, rowIndex)} 
                          style={{ cursor: 'pointer', backgroundColor: activeRowIndex === rowIndex ? '#5b5b5b' : 'transparent' }}
                        >
                          {columns?.map((column, colIndex) => (
                            <td className={`text-xs break-keep ${activeRowIndex === rowIndex ? 'text-white': 'text-dark'}`} key={colIndex}>
                              {/* {colIndex === 0 && activeRowIndex === rowIndex && '→ '} */}
                              {row[column.accessor] as any}
                            </td>
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
    </div>
    
    
  );
};

export default MyTable;
