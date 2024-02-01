import React, { useState } from 'react'

const InputText = ({
  label,
  name,
  inputValue,
  onChange,
  type = 'text',
  placeholder,
  // error,
  // disabled,
  classes = '',
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`mb-[1rem] block text-16 font-[700] text-[#4f4f4f]
           `}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`focus:shadow-outline w-full appearance-none rounded-[1.5rem] bg-[#f8f8f8] p-[1.3rem] text-14 font-[400] placeholder-[#C7C7C7] focus:outline-none`}
        // disabled={disabled}
      />
      {/*{error && <div className="text-sm text-red-600">{error}</div>}*/}
    </div>
  )
}

export default InputText
