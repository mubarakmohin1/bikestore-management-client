import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
    return (
       <div className='w-50 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2 mt-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2 mt-2' placeholder='supplierName' {...register("suppliername", { required: true, maxLength: 20 })} />
      <input  type="number" className='mb-2' placeholder='price' {...register("price")} />
      <input  type="number" className='mb-2' placeholder='quantity' {...register("quantity")} />
      <input className='mb-2' placeholder='about' {...register("about")} />
      <input className='mb-2' placeholder='photo url' {...register("picture")} />
      
      <input type="Add Stock" />
    </form>
       </div>
    );
};

export default AddService;