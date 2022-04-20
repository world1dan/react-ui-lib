import React from 'react';
export interface CanvasProps {
    render: React.ElementType;
}
declare const Canvas: ({ render }: CanvasProps) => JSX.Element;
export default Canvas;
