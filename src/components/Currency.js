import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: name
        })
        console.log("Currency:", currency)
    }, [name, currency])

    return (
        <div className='alert alert-success w-50 mx-3'>
            <select className="form-select mb-3 alert alert-success" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="$" name="$ Dollar"> $ Dollar</option>
                <option defaultValue value="£" name="£ Pound">£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;