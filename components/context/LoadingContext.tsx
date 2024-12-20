"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextValue {
    isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulated loading logic
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

