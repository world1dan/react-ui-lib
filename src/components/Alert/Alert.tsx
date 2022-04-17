import css from './Alert.module.css'
import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Button, { IButtonTypes } from './Button'
import { motion } from 'framer-motion'

export enum AlertTypes {
    Info = 'info',
    Destructive = 'destructive',
}

export interface IAlertProps {
    children?: React.ReactNode
    handleClose: () => void
    title: string
    description: string
    type: AlertTypes
    closeButtonText: string
    destructiveButtonText?: string
}

const Alert = (props: IAlertProps) => {
    return (
        <Backdrop onClick={props.handleClose}>
            <motion.div
                className={css.alert}
                transition={{
                    duration: 0.1,
                }}
                initial={{
                    opacity: 0.5,
                    scale: 0.96,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    scale: 0.96,
                }}
            >
                {props.children}
                <div className={css.title}>{props.title}</div>
                <div className={css.description}>{props.description}</div>
                <div className={css.buttons}>
                    <Button onClick={props.handleClose}>{props.closeButtonText}</Button>

                    {props.type == 'destructive' && (
                        <Button
                            onClick={props.handleClose}
                            type={IButtonTypes.Destructive}
                        >
                            {props.destructiveButtonText}
                        </Button>
                    )}
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Alert
