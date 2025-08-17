import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const Card = ({ children, variant = 'primary', ...props }: PropsWithChildren<CardProps>) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`} {...props}>
      {children}
    </div>
  );
};
