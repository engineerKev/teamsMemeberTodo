import React from "react";
import inputStyles from './input.module.css'
export default function Input({ value, label, placeholder, inputOnChange, auxClassNames = [] }) {
  const { input, inputLabel } = inputStyles;
  return (
    <label className={inputLabel} htmlFor={label}>
      <input
        id={label} 
        name={label}
        className={`${input} ${auxClassNames.join(' ')}`}
        placeholder={placeholder}
        onChange={inputOnChange}
        value={value}
      />
    </label>
  )
}