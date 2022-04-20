import React from 'react'

import { motion } from 'framer-motion'
import css from './style.module.css'

export enum IButtonTypes {
    Default = 'default',
    Cancel = 'cancel',
    Destructive = 'destructive',
}

export enum IButtonSizes {
    Medium = 'medium',
    Large = 'large',
}

export interface IAlertButtonProps {
    children: React.ReactNode
    onClick: () => void
    type: IButtonTypes
    size?: IButtonSizes
}

const AlertButton = (props: IAlertButtonProps) => {
    return (
        <motion.button
            className={`${css.alert_button} ${css[props.type]} ${
                css[props.size || 'medium']
            }`}
            onClick={props.onClick}
            transition={{
                duration: 0.12,
            }}
            whileTap={{
                filter: 'brightness(1.7)',
            }}
            whileHover={{
                filter: 'brightness(1.4)',
            }}
        >
            {props.children}
        </motion.button>
    )
}

export default AlertButton
