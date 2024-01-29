'use client'

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from '@/components/spinner';


  const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    if (isLoading) {
        return (
            <div>
                <Spinner size='lg' />
            </div>
        )
    }
    if (isAuthenticated) { 
        return redirect('/')
    }
    return (
        <div>
            {children}
        </div> 
    );
}

export default MainLayout;