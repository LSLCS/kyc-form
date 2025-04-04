"use client"; 
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const divStyle: React.CSSProperties = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
        // marginTop: '20px',
    };
    return (
        <div style={divStyle}>
            <h1>Welcome to KYC Form</h1>
            <button style={buttonStyle} onClick={() => router.push('/step1')}>Start</button>
        </div>
    );
}
