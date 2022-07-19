import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    <div className='checkbox'>
    {/* <div className="mb-2"> */}
      
      <input
        className={meta.touched && meta.error && 'is-invalid'}
        {...field} {...props}
        autoComplete="off"
       />
      <span>   GDPR Approval</span>
      
      </div>
      <ErrorMessage component="div" name={field.name} className="error " />
      </>
    
    
  )
}