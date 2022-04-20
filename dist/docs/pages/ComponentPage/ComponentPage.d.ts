import React from 'react';
export interface ComponentPageProps {
    name: string;
    component: React.ComponentType;
}
declare const ComponentPage: ({ name, component }: ComponentPageProps) => JSX.Element;
export default ComponentPage;
