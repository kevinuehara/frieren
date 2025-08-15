import React from 'react';
import styles from './styles.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'text' | 'outline' | 'danger' | 'success' | 'warning';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  const className = `${styles.button} ${styles[variant] || ''}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
