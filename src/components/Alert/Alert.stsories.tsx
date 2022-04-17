import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import Alert, { AlertTypes } from './Alert'

export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>

export const Info = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(!show)}>Open Modal</button>
            <AnimatePresence>
                {show && (
                    <Alert
                        handleClose={() => setShow(!show)}
                        title="Alert Title"
                        description="Alert description"
                        type={AlertTypes.Info}
                        closeButtonText="Close"
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export const Destructive = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(!show)}>Open Modal</button>
            <AnimatePresence>
                {show && (
                    <Alert
                        handleClose={() => setShow(!show)}
                        title="Alert Title"
                        description="Alert description"
                        type={AlertTypes.Destructive}
                        closeButtonText="Close"
                        destructiveButtonText="Delete"
                    />
                )}
            </AnimatePresence>
        </>
    )
}
