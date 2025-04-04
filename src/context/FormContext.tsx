"use client"; 
import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    country?: string;
    dob?: string;
    street?: string;
    zipCode?: string;
    phoneNumber?: string;
    idType?: string;
    file?: File | null;
}

interface FormContextType {
    formData: FormData;
    setFormData: (data: FormData) => void;
    // currentStep: number;
    // setCurrentStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({});
    // const [currentStep, setCurrentStep] = useState<number>(1); // Track current step

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
        {/* <FormContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}> */}
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};