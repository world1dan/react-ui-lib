import css from './Alert.module.css'
import React from 'react'
import Backdrop from '../Backdrop/Backdrop'

import { AnimatePresence, motion } from 'framer-motion'
import ModalWrapper from '../ModalWrapper/ModalWrapper'

export interface IAlertProps {
    children?: React.ReactNode
    handleClose: () => void
    title: string
    caption: string
    show: Boolean
}

const Alert = (props: IAlertProps) => {
    return (
        <AnimatePresence>
            {props.show && (
                <Backdrop onClick={props.handleClose}>
                    <ModalWrapper>
                        <motion.div
                            className={css.alert}
                            transition={{
                                duration: 0.12,
                            }}
                            initial={{
                                opacity: 0.5,
                                scale: 1.05,
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
                            <div className={css.title}>{props.title}</div>
                            <div className={css.caption}>{props.caption}</div>
                            <div className={css.buttons}>{props.children}</div>
                        </motion.div>
                    </ModalWrapper>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

export default Alert
