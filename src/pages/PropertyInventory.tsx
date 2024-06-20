import Table from "../components/table"
import Select from 'react-select';
import { Tab } from '@headlessui/react';
import { Fragment, useEffect } from "react";
import { setPageTitle } from "../store/themeConfigSlice";

import PropertyInformation from "../components/PropertyInventory/PropertyInformation";
import OtherInformation from "../components/PropertyInventory/OtherInformation";
import MarketingInformation from "../components/PropertyInventory/MarketingInformation";
import { useDispatch } from "react-redux";

interface PropertyInventoryProps {

}

const PropertyInventory: React.FC<PropertyInventoryProps> = ({}) =>{

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Property Inventory'));
    });
    const columns = [
        { 
            accessor: 'code', 
            title: 'Property Code', 
            sortable: true 
        },
        {
            accessor: 'transType',
            title: 'Trans Type', 
            sortable: true 
        },
        { 
            accessor: 'propertyType', 
            title: 'Property Type', 
            sortable: true 
        },
        { 
            accessor: 'houseLotNumber', 
            title: 'House/Lot#',
            sortable: true 
        },
        { 
            accessor: 'street', 
            title: 'Street',
            sortable: true 
        },
        { 
            accessor: 'location', 
            title: 'Brgy/Dist/Municipality',
            sortable: true 
        },
        { 
            accessor: 'village', 
            title: 'Village/Subd.',
            sortable: true 
        },
        { 
            accessor: 'city', 
            title: 'City',
            sortable: true 
        },
        { 
            accessor: 'lotArea', 
            title: 'Lot Area',
            sortable: true 
        }
        
        ]


        const rowData = [
            {
                code: 'D-CAL1189',
                transType: 'Sale',
                propertyType: 'Vacant lot',
                houseLotNumber: 'Lot 31 & Lot 34',
                street: 'Salmon samara street',
                location: 'Camarin',
                village: 'Dagat dagatan',
                city: 'caloocan city',
                lotArea: ''
        
            },
            {
                code: 'D-CAL1190',
                transType: 'Sale',
                propertyType: 'Vacant lot',
                houseLotNumber: 'Lot 65',
                street: 'Gumamela street',
                location: 'Tala',
                village: 'umbong',
                city: 'caloocan city',
                lotArea: ''
        
            }
        ]
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

    return (
        <div>
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
                <div className='col-span-3 panel'>
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
                                                <PropertyInformation/>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                                <OtherInformation/>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                                <MarketingInformation/>
                                        </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>

                    </div>

            </div>

            <Table fields={columns} values={rowData} show={true}/>
        </div>    
    )
}
export default PropertyInventory