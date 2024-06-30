import Table from "../components/table"
import Select from 'react-select';
import { Tab } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { setPageTitle } from "../store/themeConfigSlice";

import PropertyInformation from "../components/PropertyInventory/PropertyInformation";
import OtherInformation from "../components/PropertyInventory/OtherInformation";
import MarketingInformation from "../components/PropertyInventory/MarketingInformation";
import { useDispatch } from "react-redux";
import MyTable from "./Mytable";
import { PropertyInventoryModel } from "../models/PropertyInventoryModel";
import { columns, rowData } from "../mockData/PropertyInventoryData";
import { useNavigate } from "react-router-dom";

interface PropertyInventoryProps {

}

const PropertyInventory: React.FC<PropertyInventoryProps> = ({}) =>{
    const navigate = useNavigate();
    const [displayData, setDisplayData] = useState<string>('');
    const onDisplay = (row: any) => {
        setDisplayData(row)
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Property Inventory'));
    });

    const options = [
        { value: 'any', label: 'Any' },
        { value: 'approved', label: 'Approved' },
        { value: 'disabled', label: 'Disabled' },
    ];

    const searchColumn = [
        'EAO Approval',
        'Trans. Type',
        'City',
        'Property Type',
        'Lot',
        'Floor Area',
        'Price',
        'All Fields',
    ]

    const test = (row: any) => {
        navigate(`/property-inventory/form`)
    };
    const buttons = [
        {
            button: 'Preview Selection',
            btn_color: 'btn-outline-dark'
        },
        {
            button: 'Select All',
            btn_color: 'btn-outline-dark'
        },
        {
            button: 'Clear Selection',
            btn_color: 'btn-outline-dark'
        },
        {
            button: 'Copy Details',
            btn_color: 'btn-outline-dark'
        },
        {
            button: 'Approve Record',
            btn_color: 'btn-outline-success'
        },
        {
            button: 'For Revision',
            btn_color: 'btn-outline-warning'
        },
        {
            button: 'Print-PIS',
            btn_color: 'btn-outline-dark'
        },
        {
            button: 'Add',
            btn_color: 'btn-outline-success',
            click: test
        },
        {
            button: 'Edit',
            btn_color: 'btn-outline-warning'
        },
        {
            button: 'Delete',
            btn_color: 'btn-outline-danger'
        }
    ]

    return (
        <>
        {/* breadcrumbs */}
        <div className="mb-5">
                <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                    <li>
                        <button type="button">Administrator</button>
                    </li>
                    <li className="before:content-['/'] before:px-1.5">
                        <button className="text-primary dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Property Inventory</button>
                    </li>
                    
                 </ol>
        </div>
    
        {/* main container */}
        <div>
            {/*  */}
            <div className='grid xl:grid-cols-4 gap-3'>
                <div className='col-span-1 panel'>
                    <h2 className='text-dark font-bold text-base mb-7'>Search</h2>
                    {searchColumn.map((data)=>{
                        return(
                            <div className='grid grid-cols-3 mb-2'>
                                <span className='my-2 col-span-1 text-dark font-bold'>{data}</span>
                                <Select className='col-span-2' defaultValue={options[0]} options={options} isSearchable={true} />
                            </div>      
                        )
                    })}
                    
                </div>
                <div className='xl:col-span-3 col-span-1 panel'>
                    <Tab.Group>
                                <Tab.List className=" mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                            >
                                               Property Information
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                            >
                                               Other Information
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                            >
                                               Marketing Information
                                            </button>
                                        )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels>
                                        <Tab.Panel>
                                                <PropertyInformation data={displayData} columns={columns} />
                                        </Tab.Panel>
                                        <Tab.Panel>
                                                <OtherInformation data={displayData} columns={columns}/>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                                <MarketingInformation data={displayData} columns={columns}/>
                                        </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>

                    </div>

            </div>

          <div className="mt-3">
          <MyTable data={rowData} columns={columns} display={onDisplay} buttons={buttons} test={test}/>
          </div>
        </div>
        </>    
    )
}
export default PropertyInventory