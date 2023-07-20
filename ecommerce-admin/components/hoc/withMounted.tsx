import React, { ComponentType, FC, useEffect, useState } from 'react';

type HOC<TProps> = (Component: ComponentType<TProps>) => ComponentType<TProps>;

export const withMounted = <TProps extends object>(
    Component: ComponentType<TProps>
): FC<TProps> => {
    const WrappedComponent: FC<TProps> = (props: TProps) => {
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            setIsMounted(true);
        }, []);

        if (!isMounted) return null;

        return <Component {...props} />;
    };

    return WrappedComponent;
};
