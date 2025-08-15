import React from 'react';
import styles from './styles.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};
