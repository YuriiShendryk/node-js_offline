import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, setAuthToken } from '../../services/apiService';
import { Header } from '../../components/Header/Header';


export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            localStorage.setItem('authToken', data.token);
            setAuthToken(data.token);
            navigate('/chat');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <Header/>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{margin: '0 auto'}}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{marginTop: 20}}/><br />
                <button type="submit" style={{ margin: '30px auto' }}>Login</button>
            </form>
        </div>
    );
};


