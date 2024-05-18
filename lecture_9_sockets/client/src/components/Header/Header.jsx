import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    
    const isLoginPage = pathname === '/login';
    const isRegisterPage = pathname === '/';


    const token = localStorage.getItem('authToken');


     const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/login');
     };
    
    
    const goToLoginPage = () => {
        navigate('/login');
     };
    
    const goToRegisterPage = () => {
        navigate('/');
     };
    
    
  return (
    <header style={{ padding: '10px 0', borderBottom: '2px solid #fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Wetelo chat</h1>
          <>
              {!token ? (
                <div style={{padding: 0}}>
                    { isLoginPage && <button onClick={goToRegisterPage} style={{background: '#000', marginRight: 10}}>Sign up</button> }
                    { isRegisterPage && <button onClick={goToLoginPage} style={{background: '#000'}}>Sign in</button> }
                </div> ) :
                <button onClick={handleLogout} style={{background: '#000'}}>Logout</button>
              }
          </>
          
    </header>
  )
}

