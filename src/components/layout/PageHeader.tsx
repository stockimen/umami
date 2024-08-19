import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import { Icon } from 'react-basics';
import styles from './PageHeader.module.css';

export function PageHeader({
  title,
  icon,
  className,
  breadcrumb,
  children,
}: {
  title?: ReactNode;
  icon?: ReactNode;
  className?: string;
  breadcrumb?: ReactNode;
  children?: ReactNode;
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://umami.739527.xyz/script.js";
    script.defer = true;
    script.setAttribute('data-website-id', "64d8b676-2262-405b-af91-66a702e092f5");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <>
      <div className={styles.breadcrumb}>{breadcrumb}</div>
      <div className={classNames(styles.header, className)}>
        {icon && (
          <Icon size="lg" className={styles.icon}>
            {icon}
          </Icon>
        )}

        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.actions}>{children}</div>
      </div>
    </>
  );
}

export default PageHeader;
