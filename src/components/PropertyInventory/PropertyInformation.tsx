import { title } from "process"

interface PropertyInformationProps {
    data?: any
    columns?: any
}

const PropertyInformation: React.FC<PropertyInformationProps> = ({ data, columns }) => {
    const fields = [
       { 
        title: 'Property Code',
        accessor: 'propertyCode'
       },
       {
        title: 'Lot Area (Sqm)',
        accessor: 'lotArea'
       },
       {
        title: 'Structure Age',
        accessor: 'structureAge'
       },
       {
        title: 'Trans. Type',
        accessor: 'transactionType'
       },
       {
        title:'Floor Area (Sqm)',
         accessor: 'floorArea'
       },
       {    
        title: 'Status',
         accessor: 'status'
       },
       {
        title: 'Clasification',
         accessor: 'classification'
       },
       {
        title: 'Price',
         accessor: 'price'
       },
       {
        title: 'Frontage',
         accessor: 'frontage'
       },
       {
        title: 'Property Type',
         accessor: 'propertyType'
       },
       {
        title: 'Price per sqm',
         accessor: ''
       },
       {
        title: 'Ideal for',
         accessor: 'idealFor'
       },
       {
        title: 'Landmarks',
         accessor: 'landmarks'
       },
       {
        title: '',
         accessor: ''
       },
       {
        title: 'Orientation',
         accessor: 'orientation'
       },
       {
        title: '',
         accessor: ''
       },
       {
        title: '',
         accessor: ''
       },
       {
        title: 'Flooding',
         accessor: 'flooding'
       },
    ]

    const address = data.HouseOrLotNumber+' '+data.street+' '+data.village_subdivision+' '+data.city
    return (
       <div className="pt-5">
        {data ? (
            <div>
                <div className=" grid xl:grid-cols-3">
            {fields.map((fields: { title: any; accessor: string | number })=>{
                return (
                    <div className="col-span-1 m-1">
                        <span className="dark-text">{`${fields.title !== '' ? fields.title+' : ' : ''} `} <b>{data[fields.accessor]}</b></span>
                    </div>
                )
            })}
             
        </div>
        <div className="flex justify-between pt-5 pe-10">
            <div className="grid px-5">
                <span>Address : <b>{address}</b></span>
                <span>Description : <b>{data.description}</b> </span>
                <span>Remarks : <b>{data.remarks}</b></span>
            </div>
                <div className="pe-14 ">
                    <span className="text-xs">Property Image</span>
                    <div className="flex items-center">
                    <img src='/assets/images/gmec-icon.jpg' alt="img" className="w-60 h-40" />
                    </div>
                </div>
        </div>
            </div>
        ): (
            <div className="flex justify-center py-28">
                <span className="text-dark text-lg">Select Data below to display here</span>
            </div>
        )}
       </div>
    )
}
export default PropertyInformation