import React from 'react';
import { useForm } from 'react-hook-form';

const useContactForm = () => {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label></label>
                    <input {...register("Package_Name")} className="p-2" required/>
                    <input {...register("Package_Id")} placeholder="image link" className="p-2" required/>
                    <input type="number" {...register("Price")} placeholder="add costing in BDT" className="p-2" required/>
                    <input type="submit" />
                </form>
        </>
    );
};

export default useContactForm;