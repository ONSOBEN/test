import React from 'react';

class CustomFileInput extends React.Component<{ register: any }> {
    render() {
        let {register} = this.props;
        return (
            <section className="relative py-2 w-1/2 mx-auto border border-fileUpload mt-4" >
                <input
                    type="file"
                    id="file-input"
                    {...register('identity', {required: true})}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                    htmlFor="file-input"
                    className="block w-full px-4 text-center text-primary rounded cursor-pointer "
                >
                    Select File
                </label>
            </section>
        );
    }
}


export default CustomFileInput;