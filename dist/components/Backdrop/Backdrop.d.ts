import React from 'react';
import { MotionValue } from 'framer-motion';
interface IBackdropProps {
    children: React.ReactNode;
    onClick?: () => void;
    y?: MotionValue<number>;
}
declare const Backdrop: ({ children, onClick, y }: IBackdropProps) => JSX.Element;
export default Backdrop;
