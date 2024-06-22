import { Tab } from "@headlessui/react"
import { Fragment, useEffect } from "react"
import { NavLink } from "react-router-dom"
import IconCode from "../components/Icon/IconCode"
import PropertyDetails from "../components/PropertyInventory/PropertyDetailsForm"
import OtherDetails from "../components/PropertyInventory/OtherDetailsForm"
import MakertingInfoForm from "../components/PropertyInventory/MarketingInformationForm"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../store/themeConfigSlice"
interface PropertyInventoryFormProps {

}

const PropertyInventoryForm: React.FC<PropertyInventoryFormProps> = ({}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Inventory Form'));
    });
    
    return (
        <>
          <div className="mb-5">
          <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                    <li>
                        <button type="button">Administrator</button>
                    </li>
                    <li className="before:content-['/'] before:px-1.5">
                        <button className="text-gray-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Property Inventory</button>
                    </li>

                    <li className="before:content-['/'] before:px-1.5">
                        <button className="text-primary dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Property Inventory Form</button>
                    </li>
                    
                 </ol>
            </div>

        <div className="panel">
             <div className="mb-5" x-data="{ tab: 'home'}">
                    <div className="pt-3" id="vertical_line"> 
                            <div className="mb-5">
                                <Tab.Group>
                                    <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <div className="flex-auto text-center !outline-none">
                                                    <button
                                                        className={`${
                                                            selected ? '!border-slate-500 bg-gray-700  text-white !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black font-bold' : ''
                                                        } dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] hover:bg-primary hover:text-white hover:font-bold`}
                                                        style={{ width: '100%' }}
                                                    >
                                                       Property Details
                                                    </button>
                                                </div>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <div className="flex-auto text-center !outline-none">
                                                    <button
                                                        className={`${
                                                            selected ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black bg-gray-700 font-bold text-white' : ''
                                                        } dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white hover:bg-primary hover:text-white hover:font-bold dark:hover:border-[#191e3a]`}
                                                        style={{ width: '100%' }}
                                                    >
                                                        Other Details
                                                    </button>
                                                </div>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <div className="flex-auto text-center !outline-none">
                                                    <button
                                                        className={`${
                                                            selected ? 'w-full !border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black bg-gray-700 font-bold text-white' : ''
                                                        } w-full' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black  hover:bg-primary hover:text-white hover:font-bold`}
                                                        style={{ width: '100%' }}
                                                    >
                                                        Marketing Informat
                                                    </button>
                                                </div>
                                            )}
                                        </Tab>
                                    </Tab.List>
                                    <Tab.Panels>
                                        <Tab.Panel>
                                            <PropertyDetails/>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <OtherDetails/>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <MakertingInfoForm/>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                    </div>
             </div>

             <div className="flex justify-between m-5 mt-10 gap-2">
                <div>
                <NavLink to="/majesty-real-estate-ui/" className="group">
                <button className="btn btn-primary btn-warning">Back</button> 
                </NavLink>
                   
                </div>

                <div className="flex gap-1">
                    <button className="btn btn-primary btn-info">Compute</button>
                    <button className="btn btn-primary btn-dark">Clear</button>
                    <button className="btn btn-primary btn-success">Save</button>
                    <button className="btn btn-primary btn-dark">Update</button>
                    <button className="btn btn-primary btn-danger">Cancel</button>
                </div>
             </div>
             
        </div>
        </>
    )
}

export default PropertyInventoryForm