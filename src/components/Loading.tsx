import { ReactNode, useEffect, useState } from 'react'

interface LoadingProps {
    children: ReactNode
}

export function Loading({ children }: LoadingProps) {
    const [isHydrated, setIsHydrated] = useState(false)

    // Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return <>{isHydrated ? <div>{children}</div> : <div>Loading...</div>}</>
}
