import React from "react";
import buttonStyles from './button.module.css';
export default function Button({children, type, onButtonClick, auxClassNames = [], disabled = false}) {
  const { button } = buttonStyles;
  return (
    <button
      className={`${button} ${auxClassNames.join(' ')}`}
      disabled={disabled}
      type={type}
      onClick={onButtonClick}
    >
      {children}
    </button>
  )
}