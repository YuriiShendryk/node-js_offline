import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/apiService';
import { Header } from '../../components/Header/Header';


export const Register = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <Header/>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{margin: '0 auto'}}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required /><br />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={{ marginTop: 20 }} /><br />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ marginTop: 20 }} /><br />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ marginTop: 20 }} /><br />
                <button type="submit" style={{ margin: '30px auto' }}>Register</button>
            </form>
        </div>
    );
};


