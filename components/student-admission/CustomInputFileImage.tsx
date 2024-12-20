import React, { ChangeEvent } from 'react';

type Field = {
    name: string;
    // Add other properties of field if there are any
}

type Form = {
    // Define the structure of form here
}

type SetFieldValue = (field: string, value: any) => void;

type Props = {
    field: Field;
    form: Form;
    setFieldValue: SetFieldValue;
    previewField: string;
}

const CustomInputFileImage = ({ field, form, setFieldValue, previewField } : Props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
        if (file) {
            setFieldValue(field.name, file);
            // If you need to handle preview, you can use the file reader here
            if (previewField) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFieldValue(previewField, reader.result as string);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return <input type="file" onChange={handleChange} />;
};

export default CustomInputFileImage;