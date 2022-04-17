import React from 'react'
import Canvas from '../../components/Canvas/Canvas'

export interface ComponentPageProps {
    name: string
    component: React.ComponentType
}

const ComponentPage = ({ name, component }: ComponentPageProps) => {
    return (
        <div>
            <h1>{name}</h1>

            <Canvas render={component} />
        </div>
    )
}

export default ComponentPage
