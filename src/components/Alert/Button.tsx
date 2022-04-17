import { motion } from 'framer-motion'

/*
import { styled } from '@linaria/react'
const Styles = styled.button`
    height: 44px;
    display: grid;
    background: var(--bg3);
    place-items: center;
    border-top: 1.5px solid var(--borders);
    flex-grow: 1;
    font-size: 15px;
`
*/
export enum IButtonTypes {
    Primary = 'primary',
    Destructive = 'destructive',
}

export interface IButtonProps {
    children: React.ReactNode
    onClick: () => void
    type: IButtonTypes
}

const Button = (props: IButtonProps) => {
    return (
        <div
            onClick={props.onClick}
            transition={{
                duration: 0.2,
            }}
            whileTap={{
                filter: 'brightness(1.5)',
            }}
            whileHover={{
                filter: 'brightness(1.5)',
            }}
        >
            {props.children}
        </div>
    )
}

export default Button
