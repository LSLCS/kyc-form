"use client"; 
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useFormContext } from '../context/FormContext';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

interface Step1Data {
    firstName: string;
    lastName: string;
    dob: string;
    phoneNumber: string;
    email: string;
}

export default function Step1() {
    const { formData, setFormData } = useFormContext();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Step1Data>({
        defaultValues: formData, // Use stored form data to persist values
    });

    // useEffect(() => {
    //     // Prefill input fields when the component loads
    //     Object.keys(formData).forEach((key) => {
    //         setValue(key as keyof typeof formData, formData[key as keyof typeof formData]);
    //     });
    // }, [formData, setValue]);

    // Use the generic FieldValues type
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setFormData({ ...formData, ...data });
        router.push('/step2');
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


    const formStyle = {
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
        width: '25%', // Assuming there are 4 steps
        backgroundColor: '#0070f3',
        borderRadius: '5px',
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            {/* Progress Bar */}
            <div style={progressBarStyle}>
                <div style={progress}></div>
            </div>
            {/* First Name Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="firstName" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>First Name</label>
                <input
                    {...register('firstName', { required: 'First Name is required' })}
                    placeholder="First Name"
                    defaultValue={formData.firstName || ''}
                    style={inputStyle}
                />
            </div>
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}

            {/* Last Name Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="lastName" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Last Name</label>
                <input
                    {...register('lastName', { required: 'Last Name is required' })}
                    placeholder="Last Name"
                    defaultValue={formData.lastName || ''}
                    style={inputStyle}
                />
            </div>
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}

            {/* Date of Birth Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="dob" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Date of Birth</label>
                <input
                    {...register('dob', { required: 'Date of Birth is required' })}
                    type="date"
                    defaultValue={formData.dob || ''}
                    style={inputStyle}
                />
            </div>
            {errors.dob && <p style={{ color: 'red' }}>{errors.dob.message}</p>}

            {/* Phone Number Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="phoneNumber" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Phone Number</label>
                <input
                    {...register('phoneNumber', { required: 'Phone Number is required' })}
                    type="tel"
                    placeholder="Phone Number"
                    defaultValue={formData.phoneNumber || ''}
                    style={inputStyle}
                />
            </div>
            {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>}

            {/* Email Input with Validation */}
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', alignItems: 'center', width: '50%' }}>
                <label htmlFor="email" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Email</label>
                <input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    placeholder="Email"
                    defaultValue={formData.email || ''}
                    style={inputStyle}
                />
            </div>
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

            {/* Navigation Buttons - Centered */}
            <div >
                <button style={buttonStyle}
                    type="submit"
                    // style={{
                    //     padding: '10px 20px',
                    //     backgroundColor: '#0070f3',
                    //     color: 'white',
                    //     border: 'none',
                    //     borderRadius: '4px',
                    //     cursor: 'pointer',
                    //     fontSize: '16px'
                    // }}
                >
                    Next
                </button>
            </div>
        </form>
    );
}