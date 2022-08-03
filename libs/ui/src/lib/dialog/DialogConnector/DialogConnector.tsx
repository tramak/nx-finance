import React, {useEffect, useState, ReactNode, SyntheticEvent} from 'react';
import EventEmitter from 'events';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
import { Alert } from '../Alert/Alert';
import { Confirm } from '../Confirm/Confirm';

export type IModalParams = IDialogPropTypes

export interface IConfirmParams extends IModalParams {
  onCancel?: (e?: SyntheticEvent) => void;
  onSuccess?: (e?: SyntheticEvent) => void;
}

export interface IModal {
  open: (component: ReactNode | string, props?: IModalParams) => void;
  close: () => void;
  alert: (component: ReactNode | string, props?: IModalParams) => void;
  confirm: (component: ReactNode | string, props?: IConfirmParams) => void;
}

const ev = new EventEmitter();

export const dialog: IModal = {
  open: (component, props) => {
    ev.emit('open', { component, props });
  },
  close: () => {
    ev.emit('close');
  },
  alert: (component, props) => {
    dialog.open(
      <Alert
        component={component}
        onClose={(e) => {
          dialog.close();
          if (props?.onClose) {
            props?.onClose(e);
          }
        }}
      />, {
      title: props?.title || 'Уведомление!',
      ...(props || {})
    });
  },
  confirm: (component, props) => {
    const { onSuccess, onCancel, ...propsDialog } = props || {};

    dialog.open(
      <Confirm
        component={component}
        onCancel={(e) => {
          dialog.close();
          if (onCancel) {
            onCancel(e);
          }
        }}
        onSuccess={(e) => {
          dialog.close();
          if (onSuccess) {
            onSuccess(e);
          }
        }}
      />, {
        ...(propsDialog || {}),
        onClose: (e) => {
          if (props?.onClose) {
            props?.onClose(e);
          }
          if (onCancel) {
            onCancel(e);
          }
        }
      });
  }
};

export const DialogConnector = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode | string>(null);
  const [props, setProps] = useState<IModalParams>({});

  useEffect(() => {
    const openModal = ({ component, props } : { component: React.ReactNode | string, props: IModalParams }) => {
      setContent(component);
      setProps(props);
      setVisible(true);
    };

    const closeModal = () => {
      setVisible(false);
    };

    ev.on('open', openModal);
    ev.on('close', closeModal);

    return () => {
      ev.off('open', openModal);
      ev.off('close', closeModal);
    }
  }, []);

  const { onClose, ...propsDialog } = props

  return (
    <Dialog
      visible={visible}
      onClose={(e) => {
        setVisible(false);
        if (onClose) {
          onClose(e);
        }
      }}
      {...propsDialog}
    >
      {content}
    </Dialog>
  )
};
