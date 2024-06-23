import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { NavLink, useLocation } from 'react-router-dom';


    interface TableProps  {
        fields: any[];
        values?: any[];
        show: boolean;

    }

const Table: React.FC<TableProps>  = ({fields, values, show}) => {
   
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(values);
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        if(values) {
            setRecordsData([...initialRecords!.slice(from, to)]);
        }
       
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        // setInitialRecords(() => {
        //     return rowData.filter((item) => {
        //         return (
        //             item.code.toLowerCase().includes(search.toLowerCase()) ||
        //             item.transType.toLowerCase().includes(search.toLowerCase()) ||
        //             item.propertyType.toLowerCase().includes(search.toLowerCase()) ||
        //             item.houseLotNumber.toLowerCase().includes(search.toLowerCase()) ||
        //             item.street.toString().toLowerCase().includes(search.toLowerCase()) ||
        //             item.location.toLowerCase().includes(search.toLowerCase()) ||
        //             item.village.toLowerCase().includes(search.toLowerCase())
        //         );
        //     });
        // });
        // // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

 
    return (
        <div>
            {/* <h1 className='mx-3 text-2xl text-dark font-bold py-4'>PROPERTY INVENTORY</h1> */}
            <div className="panel mt-6">
                <div className=" flex justify-between md:items-center md:flex-row flex-col mb-5 gap-5">
                  {show && ( <h5 className="font-semibold text-lg dark:text-white-light">{values && values.length} Records/s Found</h5>)}

                  <div className='grid xl:flex xl:justify-end'>
                    <button className='btn btn-primary me-2 btn-sm btn-dark'>Preview Selection</button>
                    <button className='btn btn-primary me-2 btn-sm btn-dark'>Select All</button>
                    <button className='btn btn-primary me-2 btn-sm btn-dark'>Clear Selection</button>
                    <button className='btn btn-primary me-2 btn-sm btn-dark'>Copy Details</button>
                    <button className='btn btn-primary me-2 btn-sm btn-success'>Approve Record</button>
                    <button className='btn btn-primary me-2 btn-sm btn-warning'>For Revision</button>
                    <button className='btn btn-primary me-2 btn-sm btn-secondary'>Print PIS</button>
                    <NavLink to={'/property-inventory/form'}><button className='btn btn-primary me-2 btn-sm btn-success'>Add</button></NavLink>
                    <button className='btn btn-primary me-2 btn-sm btn-warning'>Edit</button>
                    <button className='btn btn-primary me-2 btn-sm btn-danger'>Delete</button>

                   </div>
                  
                </div>
                
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-compact"
                        records={recordsData}
                        columns={fields}
                        totalRecords={initialRecords && initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
