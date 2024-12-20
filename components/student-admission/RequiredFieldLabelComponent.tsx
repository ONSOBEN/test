import React from 'react';
import { TbAsterisk } from 'react-icons/tb';

const RequiredFieldLabelComponent = ({ labelText, labelClassName, htmlFor } : any) => {
    return (
        <div className="flex z-10">
            <label className={labelClassName} htmlFor={htmlFor}>
                {labelText}
            </label>
            <TbAsterisk className='w-2 h-2 text-lms-error' />
        </div>
    );
};

export default RequiredFieldLabelComponent;
