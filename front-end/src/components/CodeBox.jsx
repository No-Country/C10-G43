import React from 'react';

const CodeBox = ({value, onChange}) => {

    return (
        <input className='w-[46px] h-[60px] font-semibold text-white pl-4 bg-transparent border-2 border-violet-500'
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