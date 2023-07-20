import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            {children}
        </div>
    )
}

export default RootLayout
