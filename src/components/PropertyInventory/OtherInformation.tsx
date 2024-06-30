interface OtherInformationProps {
data?: any;
columns?: any;
}

const OtherInformation: React.FC<OtherInformationProps> = ({ data, columns }) => {

    console.log(data)
    return (
       <div className="pt-5 gap-5">
       {data ? (
        <div>
            <div className="panel border-slate-300 border relative mb-5">
                <span className="absolute -top-3 left-5 bg-white px-2">Seller Information</span>
                <div className="grid ">
                    <div className="grid grid-cols-2">
                    <span>Listing Type : <b>{data.listingType}</b></span>
                    <span>Seller Type : <b>{data.individual_corporation}</b></span>
                    </div>
                    
                    <span className="mb-2">Seller Name : <b>{data.contactPerson}</b> </span>
                    <span className="mb-2">Seller Contact # : <b>{data.contactNo}</b></span>

                    <div className="grid grid-cols-2">
                    <span>Company : <b>{data.company}</b> </span>
                    <span>Commission : <b>{data.commission}</b> </span>
                    </div>

                </div>
                </div>

                <div className="grid panel border-slate-300 border relative mb-5">
                <span className="absolute -top-3 left-5 bg-white px-2">Documents / Seller expenses</span>
                <span className="mb-2">Documents: <b>{data.documents}</b> </span>
                <span>Seller Expenses : <b>{data.sellerExpenses}</b></span>
                </div>

                <div className="panel border-slate-300 border relative ">
                <span className="absolute -top-3 left-5 bg-white px-2">Other information</span>
                <div className="grid grid-cols-2">
                <span>Date Source :  <b>{data.dateSource}</b></span>
                <span>Source By : <b>{data.sourceBy}</b></span>
                <span>Last Update : <b>{data.lastUpdate}</b></span>
                <span>Updated By : <b>{data.updatedBy}</b></span>
                <span>Area Group : <b>{data.areaGroupSpecialist}</b></span>
                <span>Account Officer : <b>{data.accountOfficer}</b></span>
                <span>Source thru : <b>{data.sourceThru}</b></span>
                <span>Encoded By : <b>{data.encodedBy}</b></span>
                <span>Publish Date : <b>{data.publishDate}</b></span>
                </div>
            
            </div>
        </div>
       ) : (
        <div className="flex justify-center py-28">
        <span className="text-dark text-lg">Select Data below to display here</span>
    </div>
       )}
        
       </div>

       
    )
}
export default OtherInformation