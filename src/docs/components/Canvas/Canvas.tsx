import React from 'react'

import css from './style.module.scss'

export interface CanvasProps {
    render: React.ElementType
}

const Canvas = ({ render }: CanvasProps) => {
    const Component = render
    return (
        <div className={css.canvas}>
            <Component />
        </div>
    )
}
export default Canvas
