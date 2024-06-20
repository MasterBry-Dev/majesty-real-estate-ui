import { title } from "process"

interface PropertyInformationProps {

}

const PropertyInformation: React.FC<PropertyInformationProps> = ({}) => {
    const fields = [
       { 
        title: 'Property Code : ',
        value:'D-CAL1189'
       },
       {
        title: 'Lot Area (Sqm) : ',
        value:  '930'
       },
       {
        title: 'Structure Age : ',
        value: ''
       },
       {
        title: 'Trans. Type : ',
        value: 'Sale'
       },
       {
        title:'Floor Area (Sqm) : ',
        value: ''
       },
       {    
        title: 'Status : ',
        value: 'Available'
       },
       {
        title: 'Clasification : ',
        value: 'Residential'
       },
       {
        title: 'Price : ',
        value:   '27,900,000.00'
       },
       {
        title: 'Frontage : ',
        value: ''
       },
       {
        title: 'Property Type : ',
        value: 'Vacant Lot'
       },
       {
        title: 'Price per sqm : ',
        value: '30,000.00'
       },
       {
        title: 'Ideal for : ',
        value: ''
       },
       {
        title: 'Landmarks : ',
        value: ''
       },
       {
        title: '    ',
        value: ''
       },
       {
        title: 'Orientation : ',
        value: ''
       },
       {
        title: '    ',
        value: ''
       },
       {
        title: '    ',
        value: ''
       },
       {
        title: 'Flooding : ',
        value: ''
       },
    ]

    return (
       <div className="pt-5">
        <div className=" grid xl:grid-cols-3">
            {fields.map((fields)=>{
                return (
                    <div className="col-span-1 m-1">
                        <span className="dark-text">{`${fields.title}`} <b>{fields.value}</b></span>
                    </div>
                )
            })}
             
        </div>
        <div className="flex justify-between pt-5 pe-10">
            <div className="grid px-5">
                <span>Address : <b>Salmon samara street corner sinilayasi, dagat dagatan, caloocan city </b></span>
                <span>Description : <b>Vacant slot with squaters (58 families), behind main road c4</b> </span>
                <span>Remarks : </span>
            </div>
                <div className="pe-14 ">
                    <span className="text-xs">Property Image</span>
                    <div className="flex items-center">
                    <img src='../dist/assets/images/myhometown.png' alt="img" className="w-60 h-40" />
                    </div>
                </div>
        </div>
       </div>
    )
}
export default PropertyInformation