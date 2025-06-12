import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const param = useParams();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#f5f7fa'
        }}>
            <div style={{
                background: '#fff',
                padding: '2rem 3rem',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                minWidth: '320px',
                textAlign: 'center'
            }}>
                <img
                    src="https://i.pravatar.cc/100"
                    alt="User Avatar"
                    style={{
                        borderRadius: '50%',
                        marginBottom: '1rem',
                        border: '3px solid #e3eafc'
                    }}
                />
                <h2 style={{ color: '#3a3d42', margin: '0.5rem 0' }}> {param.name} </h2>
                <p style={{ color: '#7b8ca7', margin: 0 }}>anjula@example.com</p>
                <p style={{ color: '#a0aec0', margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>Frontend Developer</p>
            </div>
        </div>
    )
}

export default Profile
