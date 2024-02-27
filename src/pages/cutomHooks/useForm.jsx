import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        handleSubmit,
        resetForm
    };
};

export default useForm;
