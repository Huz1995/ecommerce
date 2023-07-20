'use client';

import React, { FC, ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './dialog';

interface ModelProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export const Model: FC<ModelProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
}) => {
    const onChange = (isOpen: boolean) => {
        console.log(isOpen);
        if (!isOpen) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>{description}</DialogDescription>
                <div className="">{children}</div>
            </DialogContent>
        </Dialog>
    );
};
