import React from 'react';
export declare enum AlertTypes {
    Info = "info",
    Destructive = "destructive"
}
export interface IAlertProps {
    children?: React.ReactNode;
    handleClose: () => void;
    title: string;
    description: string;
    type: AlertTypes;
    closeButtonText: string;
    destructiveButtonText?: string;
}
declare const Alert: (props: IAlertProps) => JSX.Element;
export default Alert;
