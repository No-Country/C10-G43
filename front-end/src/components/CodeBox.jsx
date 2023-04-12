import React from 'react';

const CodeBox = ({value, onChange}) => {

    return (
        <input className='w-[46px] h-[60px] bg-neutral-700 border-2 border-slate-500 font-semibold text-white pl-4'
            type="number"
            inputMode="numeric"
            required='required'
            maxLength='1'
            value={value}
            onChange={onChange}
        />
    );
};

export default CodeBox;