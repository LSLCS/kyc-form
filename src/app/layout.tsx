import { FormProvider } from '../context/FormContext';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <FormProvider>
                    {children}
                </FormProvider>
            </body>
        </html>
    );
}