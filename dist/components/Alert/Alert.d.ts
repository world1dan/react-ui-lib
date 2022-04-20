import React from 'react';
export interface IAlertProps {
    children?: React.ReactNode;
    handleClose: () => void;
    title: string;
    caption: string;
    show: Boolean;
}
declare const Alert: (props: IAlertProps) => JSX.Element;
export default Alert;
