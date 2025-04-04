"use client"; 
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useFormContext } from '../context/FormContext';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

interface Step2Data {
    street: string;
    country: string;
    zipCode?: string;
}

export default function Step2() {
    const { formData, setFormData } = useFormContext();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Step2Data>({
        defaultValues: formData, // Use stored form data to persist values
    });

    // useEffect(() => {
    //     // Prefill input fields when the component loads
    //     Object.keys(formData).forEach((key) => {
    //         setValue(key as keyof typeof formData, formData[key as keyof typeof formData]);
    //     });
    // }, [formData, setValue]);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setFormData({ ...formData, ...data });
        router.push('/step3');
    };


    // Style Objects
    const inputStyle = {
        display: 'block',
        marginBottom: '10px',
        padding: '8px',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        // marginTop: '20px',
    };


    const formStyle: React.CSSProperties = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    };

    // Progress bar styles
    const progressBarStyle = {
        height: '10px',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        marginBottom: '20px',
    };

    const progress = {
        height: '100%',
        width: '50%', // Assuming there are 4 steps
        backgroundColor: '#0070f3',
        borderRadius: '5px',
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            {/* Progress Bar */}
            <div style={progressBarStyle}>
                <div style={progress}></div>
            </div>
            {/* Country Dropdown with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="country" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Country</label>
                <select
                    {...register('country', { required: 'Please select your country' })}
                    defaultValue={formData.country || ''}
                    style={inputStyle}
                >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                </select>
            </div>
            {errors.country && <p style={{ color: 'red' }}>{errors.country.message}</p>}

            {/* Street Address Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="street" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Street Address</label>
                <input
                    {...register('street', { required: 'Street address is required' })}
                    placeholder="Street Address"
                    defaultValue={formData.street || ''}
                    style={inputStyle}
                />
            </div>
            {errors.street && <p style={{ color: 'red' }}>{errors.street.message}</p>}

            {/* Zip Code Input (Optional) */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="zipCode" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Zip Code</label>
                <input
                    {...register('zipCode')}
                    placeholder="Zip Code (Optional)"
                    defaultValue={formData.zipCode || ''}
                    style={inputStyle}
                />
            </div>

            {/* Navigation Buttons - Centered */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
                <button
                    type="button"
                    onClick={() => router.push('/step1')}
                    style={buttonStyle}
                >
                    Back
                </button>
                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Next
                </button>
            </div>
        </form>
    );
}
