import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'positive' | 'error' | 'attention' | 'neutral';
};

export const Tag = ({ children, variant = 'neutral', ...props }: PropsWithChildren<TagProps>) => {
  return (
    <div className={`${styles.tag} ${styles[variant]}`} {...props}>
      {children}
    </div>
  );
};
