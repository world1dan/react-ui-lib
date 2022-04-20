import React from 'react'

import css from './style.module.css'

interface IModalWrapperProps {
    children: React.ReactNode
}
const ModalWrapper = (props: IModalWrapperProps) => {
    return (
        <div className={css.modal_wrapper}>
            <div className={css.modal}>{props.children}</div>
        </div>
    )
}

export default ModalWrapper
