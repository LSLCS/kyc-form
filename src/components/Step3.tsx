"use client"; 
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useFormContext } from '../context/FormContext';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

interface Step3Data {
    idType: string;
    file?: File | null;
}

export default function Step3() {

    const { formData, setFormData} = useFormContext();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Step3Data>({
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
        router.push('/step4');
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
        width: '75%', // Assuming there are 4 steps
        // width: `${(currentStep / 4) * 100}%`, // Assuming there are 4 steps
        backgroundColor: '#0070f3',
        borderRadius: '5px',
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        {/* Progress Bar */}
        <div style={progressBarStyle}>
            <div style={progress}></div>
        </div>        
        {/* ID Type Dropdown with Validation */}
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
            <label htmlFor="idType" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>ID Type</label>
            <select
                {...register('idType', { required: 'ID Type is required' })}
                defaultValue={formData.idType || ''}
                style={inputStyle}
            >
                <option value="">Select ID Type</option>
                <option value="driverLicense">Driver License</option>
                <option value="passport">Passport</option>
                <option value="nationalID">National ID</option>
                <option value="birthCertificate">Birth Certificate</option>
                <option value="voterID">Voter ID</option>
            </select>
        </div>
        {errors.idType && <p style={{ color: 'red' }}>{errors.idType.message}</p>}

        {/* File Upload with Validation */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px',marginBottom: '15px', alignItems: 'center', width: '50%' }}>
            <label htmlFor="file" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Upload ID</label>
            <input
                {...register('file')}
                // {...register('file', { required: 'ID upload is required' })}
                type="file"
                style={inputStyle}
            />
        </div>
        {errors.file && <p style={{ color: 'red' }}>{errors.file.message}</p>}

        {/* Note before file upload */}
        <div style={{ marginBottom: '50px', width: '100%', textAlign: 'center' }}>
            <p>Please upload an identification document, e.g., Driver License.</p>
        </div>

        {/* Navigation Buttons - Centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
            <button
                type="button"
                onClick={() => router.push('/step2')}
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
