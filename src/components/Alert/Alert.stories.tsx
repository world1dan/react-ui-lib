import React, { ReactElement, useState } from 'react'

import Alert from './Alert'
import AlertButton, { IButtonSizes, IButtonTypes } from './AlertButton/AlertButton'

interface WrapperProps {
    render: (onClose: () => void, show: Boolean) => ReactElement
}

const Wrapper = ({ render }: WrapperProps) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {render(() => setShow(false), show)}
            <button onClick={() => setShow(true)}>Show</button>
        </div>
    )
}

export default {
    title: 'Alert',
    component: Alert,
}

export const Primary = () => (
    <Wrapper
        render={(onClose: VoidFunction, show: Boolean) => (
            <Alert
                show={show}
                title="Удалить фото?"
                caption="Это действие нельзя будет отменить"
                handleClose={onClose}
            >
                <AlertButton
                    onClick={onClose}
                    type={IButtonTypes.Cancel}
                    size={IButtonSizes.Large}
                >
                    Назад
                </AlertButton>
                <AlertButton
                    onClick={onClose}
                    type={IButtonTypes.Cancel}
                    size={IButtonSizes.Large}
                >
                    Отмена
                </AlertButton>
                <AlertButton
                    onClick={onClose}
                    type={IButtonTypes.Cancel}
                    size={IButtonSizes.Large}
                >
                    Выделить
                </AlertButton>
                <AlertButton
                    onClick={onClose}
                    type={IButtonTypes.Cancel}
                    size={IButtonSizes.Large}
                >
                    Выделить
                </AlertButton>
                <AlertButton
                    onClick={() => {}}
                    type={IButtonTypes.Destructive}
                    size={IButtonSizes.Large}
                >
                    Удалить
                </AlertButton>
            </Alert>
        )}
    />
)
