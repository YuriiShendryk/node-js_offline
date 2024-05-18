
import axios from 'axios';

const API_URL = 'http://localhost:3000';


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signUp`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};


export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signIn`, loginData);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setAuthToken(response.data.token);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};


export const getMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/messages`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};


export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};
