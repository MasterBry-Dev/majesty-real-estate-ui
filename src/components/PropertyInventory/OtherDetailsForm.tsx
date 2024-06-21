import { useState } from "react";
import ReactQuill from "react-quill"

interface OtherDetailsProps {

}

const OtherDetails: React.FC<OtherDetailsProps> = ({ }) => {
    const [value, setValue] = useState('<p></p');
    
    return(
        <div className="m-5">
            {/* 1st section */}
            <div className="grid grid-cols-3 gap-3">
                {/* section 1.1 */}
                <div className="panel border-slate-300 border relative mb-5 mt-7 col-span-2">
                    <span className="absolute -top-3 left-5 bg-white px-2">Seller / Broker Information</span>

                    <div className="grid grid-cols-2 m-3 gap-2">
                       <div className="col-span-2">
                            <label htmlFor="lot">Name</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                       </div>
                       
                       <div className="">
                            <label htmlFor="lot">Type</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                       </div>

                       <div className="">
                            <label htmlFor="lot">Contact #</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                       </div>

                       <div className="">
                            <label htmlFor="lot">Commission</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                       </div>

                       <div className="">
                            <label htmlFor="lot">Company</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                       </div>
                    </div>
                </div> 

                {/* section 1.2 */}
                <div className="grid">
                    <div className="panel border-slate-300 border relative mt-7 col-span-1">
                        <span className="absolute -top-3 left-5 bg-white px-2">Documents</span>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary" checked  />
                                                    <span>Title</span>
                                            </label>
                                    </div>
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary"  />
                                                    <span>Vicinity Map</span>
                                            </label>
                                    </div>
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary"  />
                                                    <span>Tax Dec.</span>
                                            </label>
                                    </div>
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary" checked  />
                                                    <span>Lot Plan</span>
                                            </label>
                                    </div>
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary"  checked />
                                                    <span>ATS</span>
                                            </label>
                                    </div>
                                    <div>
                                            <label className="inline-flex">
                                                    <input type="checkbox" className="form-checkbox outline-primary"/>
                                                    <span>Tax Clearance</span>
                                            </label>
                                    </div>
                                </div>
                            </div>
                    </div>  
                    {/* section 1.3 */}
                    <div className="panel border-slate-300 border relative mb-5 mt-7 col-span-1">
                        <span className="absolute -top-3 left-5 bg-white px-2">Type of Seller</span>
                        <div className="grid grid-cols-2 gap-3 m-2">
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary rounded-full"/>
                                <span>Individual</span>
                            </label>
                         </div>

                         <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary rounded-full" checked />
                                <span>Corporation</span>
                            </label>
                         </div>
                         <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary rounded-full"/>
                                <span>Institution</span>
                            </label>
                         </div>

                         <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary rounded-full"/>
                                <span>Partnership</span>
                            </label>
                         </div>

                        </div>
                    </div>  
               </div>
            </div>


            {/* 2nd section */}
            <div className="grid grid-cols-2 gap-3">
                {/* section 2.1 */}
                <div className="panel border-slate-300 border relative mb-5 mt-3 col-span-1">
                    <span className="absolute -top-3 left-5 bg-white px-2">Source Information</span>
                    <div className="grid grid-cols-2 gap-3 m-2">
                        <div>
                            <label htmlFor="lot">Date Source</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                        </div>

                        <div>
                            <label htmlFor="lot">Publish Date</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="lot">Source Thru</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="lot">Source By</label>
                            <input id='lot' type="text" placeholder="Some Text..." className="form-input" required />
                        </div>
                    </div>
                </div> 

                {/* section 2.2 */}
                <div className="panel border-slate-300 border relative mb-5 mt-3 col-span-1">
                    <span className="absolute -top-3 left-5 bg-white px-2">Seler Expenses</span>
                    <div className="grid grid-cols-4 gap-4 m-5">
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary" checked  />
                                <span>Capital Gain Tax</span>
                            </label>
                        </div>

                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Bussiness Tax</span>
                            </label>
                        </div>

                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Document Stamp</span>
                            </label>
                        </div>

                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Registration Fees</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Brokers Commission</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>VAT</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Transfer Tax</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Notarial Fees</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Estate Tax</span>
                            </label>
                        </div>
                        <div className="">
                            <label className="inline-flex">
                                <input type="checkbox" className="form-checkbox outline-primary"/>
                                <span>Net Price</span>
                            </label>
                        </div>
                        

                    </div>
                </div>  
                    
            </div>


            {/* 3rd section */}
            <div className="grid grid-cols-1 gap-3">
                <div className="panel border-slate-300 border relative mb-5 mt-3 col-span-1">
                    <span className="absolute -top-3 left-5 bg-white px-2">Other Information</span>
                    <div className="grid grid-cols-4 gap-3 m-2">
                        <div>
                            <label htmlFor="ctnSelect1">Group</label>
                            <select id="ctnSelect1" className="form-select text-white-dark" required>
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="ctnSelect1">Account Officer</label>
                            <select id="ctnSelect1" className="form-select text-white-dark" required>
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="ctnSelect1">Last Update</label>
                            <select id="ctnSelect1" className="form-select text-white-dark" required>
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="ctnSelect1">Updated By</label>
                            <select id="ctnSelect1" className="form-select text-white-dark" required>
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>

                        <div className="col-span-4">
                            <label htmlFor="lot">Remarks</label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
       
    )
}
export default OtherDetails