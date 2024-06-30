import Table from "../table"

interface MarketingInformationProps {
data: any;
columns: any;
}

    const tableData = [
        {
            id: 1,
            website: 'testing.ph',
            url: 'www.testing.ph',
            postedId: '231',
            postedDate: 'June 05 2024',
            expiredIn: 'july 05 2024',
           
        }
    ];

const MarketingInformation: React.FC<MarketingInformationProps> = ({ data, columns }) => {

    return (
       <div className="pt-5">
        {data ? (
             <div className="panel border-slate-300 border relative mb-5 h-96">
                <span className="absolute -top-3 left-5 bg-white px-2">My Hometown and Advertisement Website</span>
                <div className="flex justify-end mx-5 mb-2">
                    <button className="btn btn-success btn-sm">Make ads</button>
                    <button className="btn btn-danger m ms-2 btn-sm">Delete ads</button>
        
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Website</th>
                            <th>URL</th>
                            <th>Posted ID</th>
                            <th>Posted Date</th>
                            <th>Date Expire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                            <div className="whitespace-nowrap"></div>
                            </td>
                            <td></td>
                            <td>{data.url}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
             </div>
        ) : (
            <div className="flex justify-center py-28">
            <span className="text-dark text-lg">Select Data below to display here</span>
        </div>
        ) }

       </div>
    )
}
export default MarketingInformation