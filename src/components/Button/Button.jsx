import React from 'react';
import css from './Button.module.css';

export const Button = ({ onClick, children }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};