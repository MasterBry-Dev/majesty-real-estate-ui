import Table from "../table"

interface MarketingInformationProps {

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

const MarketingInformation: React.FC<MarketingInformationProps> = ({}) => {

    return (
       <div className="pt-5">
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
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.website}</div>
                        </td>
                        <td>{data.url}</td>
                        <td>{data.postedId}</td>
                        <td>{data.postedDate}</td>
                        <td>{data.expiredIn}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
        </div>

       </div>
    )
}
export default MarketingInformation