import { useState } from 'react';
import ReactQuill from 'react-quill';
import MaskedInput from 'react-text-mask';
import 'react-quill/dist/quill.snow.css';
interface PropertyDetailsProps {

}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({}) => {

    const [value, setValue] = useState('<p></p');
    
    return(
    <div className='m-5 pt-1'>
        <div className=" panel border border-slate-300 mt-5 grid xl:grid-cols-4 gap-3 ">
            <div>
                <label htmlFor="dynamicMask1" className="text-stone-700">
                        Property Code
                </label>
                <MaskedInput
                    id="dynamicMask1"
                    type="text"
                    placeholder="_-__"
                    className="form-input"
                    mask={[/[A-Z]/, '-', /[A-Z]/, /[A-Z]/, /[A-Z]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/ , /[0-9]/ , /[0-9]/]}
                />
            </div>

            <div>
                <label htmlFor="ctnSelect1" className='text-slate-800'>Classfication</label>
                <select id="ctnSelect1" className="form-select text-white-dark" required>
                    <option>Open this select menu</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>

            <div>
                <label htmlFor="ctnSelect1" className='text-slate-800'>Status</label>
                <select id="ctnSelect1" className="form-select text-white-dark" required>
                    <option>Open this select menu</option> 
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>

                <div>
                    <label htmlFor="lot" className='text-slate-800'>Lot Area</label>
                <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                </div>
        </div>
       
        <div className="panel border-slate-300 border relative mb-5 mt-7">
            <span className="absolute -top-3 left-5 bg-white px-2">Address</span>
             <div className='grid grid-cols-5 gap-3  m-3'>
                <div className='col-span-1'>
                    <label htmlFor="lot">House / Lot / Blk / Unit / Floor #</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="lot">Street / Avenue / Road / Highway Name</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="lot">Village / Subdivision / Condominium / Tower Name</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                </div>
                

             </div>
             <div className='grid grid-cols-2 gap-3 m-3'>
                    <div className=''>
                        <label htmlFor="lot">House / Lot / Blk / Unit / Floor #</label>
                        <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                    </div>
                    <div className=''>
                        <label htmlFor="lot">House / Lot / Blk / Unit / Floor #</label>
                        <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
                    </div>
                </div>
        </div>   

        <div className='panel border border-slate-300 grid grid-cols-9 gap-3 mt-7'>
            <div className='col-span-2'>
                    <label htmlFor="lot">Ideal For</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>
            <div className='col-span-2'>
                    <label htmlFor="lot">Flooding</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>
            <div className='col-span-2'>
                    <label htmlFor="lot">Orientation</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>
            <div className='col-span-2'>
                    <label htmlFor="lot">Frontage</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>
            <div className='col-span-1'>
                    <label htmlFor="lot">Structure Age</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>

            <div className='col-span-9'>
                    <label htmlFor="lot">Landmarks</label>
                    <input id='lot' type="text" placeholder="Input here.." className="form-input" required />
            </div>
            <div className='col-span-9'>
                    <label htmlFor="lot">Landmarks</label>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
        </div>         
    </div>
       
    )
}
export default PropertyDetails