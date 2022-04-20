import React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import css from './Backdrop.module.css'

interface IBackdropProps {
    children: React.ReactNode
    onClick?: () => void
    y?: MotionValue<number>
}

const Backdrop = ({ children, onClick, y }: IBackdropProps) => {
    const input = [0, 0, 200]
    const output = [1, 1, 0]
    const opacity = y ? useTransform(y, input, output) : 1

    return (
        <>
            <motion.div
                className={css.backdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClick}
                transition={{
                    type: 'tween',
                    duration: 0.3,
                }}
                style={{ opacity }}
            />
            {children}
        </>
    )
}

export default Backdrop
