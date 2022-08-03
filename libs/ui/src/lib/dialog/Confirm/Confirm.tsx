import React, { ReactNode, SyntheticEvent } from 'react';
import styles from './Confirm.module.scss';

export interface IConfirmProps {
  component: ReactNode | string;
  onCancel?: (e?: SyntheticEvent) => void;
  onSuccess?: (e?: SyntheticEvent) => void;
}

export const Confirm = ({ component, onCancel, onSuccess }: IConfirmProps) => {
  const cancelHandler = (e: SyntheticEvent) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  const successHandler = (e: SyntheticEvent) => {
    if (onSuccess) {
      onSuccess(e);
    }
  };

  return (
    <div className={styles.block}>
      {component}

      <div className={styles.footer}>
        <button
          onClick={cancelHandler}
        >
          cancel
        </button>
        <button
          onClick={successHandler}
        >
          ok
        </button>
      </div>
    </div>
  )
};
