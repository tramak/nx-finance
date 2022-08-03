import React, { ReactNode, SyntheticEvent } from 'react';
import styles from './Alert.module.scss';

export interface IAlertProps {
  component: ReactNode | string;
  onClose?: (e: SyntheticEvent) => void;
}

export const Alert = ({ component, onClose }: IAlertProps) => {
  const closeHandler = (e: SyntheticEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <div className={styles.block}>
      {component}

      <div className={styles.footer}>
        <button
          onClick={closeHandler}
        >
          ok
        </button>
      </div>
    </div>
  )
};
