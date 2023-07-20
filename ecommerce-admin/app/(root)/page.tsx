'use client';
import { withMounted } from '@/components/hoc/withMounted';
import { Model } from '@/components/ui/model';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

const SetupPage = () => {
    const [isOpen, setIsOpen] = useState(true);

    const ModelWithMounted = withMounted(Model);

    return (
        <div>
            <UserButton afterSignOutUrl="/" />
            <ModelWithMounted
                title="Setup"
                description="Setup your store"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default SetupPage;
