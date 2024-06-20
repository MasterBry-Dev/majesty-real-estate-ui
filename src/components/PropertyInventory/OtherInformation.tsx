interface OtherInformationProps {

}

const OtherInformation: React.FC<OtherInformationProps> = ({}) => {

    return (
       <div className="pt-5 gap-5">
       
        <div className="panel border-slate-800 border relative mb-5">
        <span className="absolute -top-3 left-5 bg-white px-2">Seller Information</span>
        <div className="grid ">
            <div className="grid grid-cols-2">
            <span>Listing Type : </span>
            <span>Seller Type : </span>
            </div>
            
            <span className="mb-2">Seller Name : </span>
            <span className="mb-2">Seller Contact # : </span>

            <div className="grid grid-cols-2">
            <span>Company : </span>
            <span>Commission : </span>
            </div>

        </div>
        </div>

        <div className="grid panel border-slate-800 border relative mb-5">
        <span className="absolute -top-3 left-5 bg-white px-2">Documents / Seller expenses</span>
        <span className="mb-2">Documents: </span>
        <span>Seller Expenses :</span>
        </div>

        <div className="panel border-slate-800 border relative ">
        <span className="absolute -top-3 left-5 bg-white px-2">Other information</span>
        <div className="grid grid-cols-2">
        <span>Date Source : </span>
        <span>Source By : </span>
        <span>Last Update : </span>
        <span>Updated By : </span>
        <span>Area Group : </span>
        <span>Account Officer : </span>
        <span>Source thru : </span>
        <span>Encoded By : </span>
        <span>Publish Date : </span>
        </div>
       
        </div>
       </div>

       
    )
}
export default OtherInformation