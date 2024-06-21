interface MarketingInfoFormProps {

}

const MakertingInfoForm: React.FC<MarketingInfoFormProps> = ({}) => {

    return(
      <div className="m-5">
        <div className="grid grid-cols-3 gap-3">
            <div className="panel border-slate-300 border relative mb-5 mt-7 col-span-2">
                    <span className="absolute -top-3 left-5 bg-white px-2">Website and Other Advertisement Posting</span>
                        <h1 className="text-dark font-bold text-3xl">Pcode</h1>
                        
                    <div className="grid grid-cols-1 m-3 gap-2 px-3">
                            <div>
                                <label htmlFor="ctnSelect1">WEBSITE</label>
                                <select id="ctnSelect1" className="form-select text-white-dark" required>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="lot">URL</label>
                                <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                            </div>

                            <div>
                                <label htmlFor="lot">Posted ID</label>
                                <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                            </div>

                            <div>
                                <label htmlFor="ctnSelect1">Date Posted</label>
                                <select id="ctnSelect1" className="form-select text-white-dark" required>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ctnSelect1">Date Expires</label>
                                <select id="ctnSelect1" className="form-select text-white-dark" required>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="lot">Posted Price</label>
                                <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                            </div>


                    </div>            
            </div>
            <div className="panel border-slate-300 border relative mb-5 mt-7 col-span-1">
            <span className="absolute -top-3 left-5 bg-white px-2">MAPLINK (Paste link here)</span>

            </div> 

        </div>

        
       
      </div>
    )
}
export default MakertingInfoForm