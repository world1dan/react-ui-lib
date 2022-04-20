import React from 'react';
export declare enum IButtonTypes {
    Default = "default",
    Cancel = "cancel",
    Destructive = "destructive"
}
export declare enum IButtonSizes {
    Medium = "medium",
    Large = "large"
}
export interface IAlertButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    type: IButtonTypes;
    size?: IButtonSizes;
}
declare const AlertButton: (props: IAlertButtonProps) => JSX.Element;
export default AlertButton;
