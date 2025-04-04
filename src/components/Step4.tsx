// File Upload & Summary
"use client"; 
import { useFormContext } from '../context/FormContext';
import { useRouter } from 'next/navigation';

export default function Step3() {
    const { formData} = useFormContext();
    const router = useRouter();

        // Style Objects
        // const inputStyle = {
        //     display: 'block',
        //     marginBottom: '10px',
        //     padding: '8px',
        //     width: '100%',
        //     borderRadius: '4px',
        //     border: '1px solid #ccc',
        // };
    
        const buttonStyle = {
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            // marginTop: '20px',
        };
    
    
        const divStyle = {
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
            width: '100%', // Assuming there are 4 steps
            // width: `${(currentStep / 4) * 100}%`, // Assuming there are 4 steps
            backgroundColor: '#0070f3',
            borderRadius: '5px',
        };
    
    return (

        <div style={divStyle}>

        {/* Progress Bar */}
        <div style={progressBarStyle}>
            <div style={progress}></div>
        </div>   
            <div style={{
                textAlign: 'center',
                width: '100%',
                maxWidth: '500px'
            }}>
                <h2>Review Your Information</h2>
            <div style={{ marginLeft: '80px', textAlign: 'left' }}>
                <p><strong>First Name:</strong> {formData.firstName} <button onClick={() => router.push('/step1')}>Edit</button></p>
                <p><strong>Last Name:</strong> {formData.lastName} <button onClick={() => router.push('/step1')}>Edit</button></p>
                <p><strong>Date of Birth:</strong> {formData.dob} <button onClick={() => router.push('/step1')}>Edit</button></p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber} <button onClick={() => router.push('/step1')}>Edit</button></p>
                <p><strong>Email:</strong> {formData.email} <button onClick={() => router.push('/step1')}>Edit</button></p>
                <p><strong>Street Address:</strong> {formData.street} <button onClick={() => router.push('/step2')}>Edit</button></p>
                <p><strong>Zip Code:</strong> {formData.zipCode} <button onClick={() => router.push('/step2')}>Edit</button></p>
                <p><strong>Country:</strong> {formData.country} <button onClick={() => router.push('/step2')}>Edit</button></p>
                <p><strong>ID Type:</strong> {formData.idType} <button onClick={() => router.push('/step3')}>Edit</button></p>
            </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '20px'
                }}>
                    <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => router.push('/step3')}
                    >
                        Back
                    </button>
                    <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => alert('Form Submitted!')}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
        // </div>

    );
}