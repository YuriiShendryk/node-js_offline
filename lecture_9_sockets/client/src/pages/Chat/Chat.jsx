import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { getMessages } from '../../services/apiService';
import { Message } from '../../components/Message/Message';
import { Header } from '../../components/Header/Header';
import { format } from 'date-fns'



export const socket = io(process.env.REACT_APP_SOCKET_SERVER);

export const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const currentUser = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        // Listen for new messages from Socket.io
        socket.on('message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        // Clean up the socket listener when the component unmounts
        return () => {
            socket.off('message');
        };
    }, []);


   
    useEffect(() => {
        // Fetch messages from the server when the component mounts
        if (!messages.length) { 
            getMessages()
                .then((data) => {
                console.log(data)
                setMessages(data);
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
            });
        }
         
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);


    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('message', { text: message, author: currentUser._id });
        setMessage('');
    };

    return (
        <div>
            <Header/>
            <ul className='messages'>
                {messages.length && messages.map((msg) => 
                {  
                    const createdAt = msg?.createdAt && format(msg.createdAt, 'HH:mm:ss dd/MM/yyyy')
                    const userName = msg?.author ? `${msg?.author?.firstName} ${msg?.author?.lastName}` : 'anonim'
                    return <li key={msg?._id}><Message className={`${msg?.author?._id === currentUser?._id && 'right'}`} userName={userName} text={msg.text} createdAt={createdAt} /></li>
                }
                )}
                <li ref={messagesEndRef}/>
            </ul>
            <form onSubmit={sendMessage} style={{maxWidth: '100%'}}>
                <textarea
                    name="text"
                    placeholder="Type a message..."
                    value={message}
                    rows={6}
                    cols={16}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                /><br />
                <button type="submit" style={{marginLeft: 'auto'}}>Send</button>
            </form>
        </div>
    );
};


