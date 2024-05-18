import { Route, Routes, useNavigate } from 'react-router-dom';
import { Register, Chat, Login } from './pages'
import { useEffect } from 'react';
import { setAuthToken } from './services/apiService';


function App() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuthToken(token);
            navigate('/chat')
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/" element={<Register />} />
        </Routes>
    );
}

export default App;