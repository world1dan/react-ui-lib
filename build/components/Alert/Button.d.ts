/// <reference types="react" />
export declare enum IButtonTypes {
    Primary = "primary",
    Destructive = "destructive"
}
export interface IButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    type: IButtonTypes;
}
declare const Button: (props: IButtonProps) => JSX.Element;
export default Button;
