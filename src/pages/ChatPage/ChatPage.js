import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import styles from './ChatPage.module.css'; // Assuming your CSS file name is correct
const API_URL = process.env.REACT_APP_API_URL;


const ChatPage = () => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const socket = io('http://localhost:9000'); // Update with your server URL if needed

	const senderId = 'user_2JEFnGFazbo0yBE7ytCgruQv0nm';
	const receiverId = 'user_2mcMFN3Qop8ukR61ZnVp8ktL8ZB';

	// Fetch chat messages on component mount
	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await axios.get(`${API_URL}/messages/${senderId}/${receiverId}`);
				setMessages(response.data.messages);
			} catch (err) {
				console.error('Error fetching messages:', err);
			}
		};

		fetchMessages();

		// Listen for new messages via socket
		socket.on('newMessage', (message) => {
			setMessages((prev) => [...prev, message]);
		});

		return () => {
			socket.disconnect();
		};
	}, [senderId, receiverId]);

	// Handle sending a new message
	const sendMessage = async (e) => {
		e.preventDefault();
		if (!newMessage.trim()) return;

		try {
			const response = await axios.post(`${API_URL}/messages/send`, {
				senderId,
				receiverId,
				content: newMessage,
			});

			setMessages((prev) => [...prev, response.data.message]);
			setNewMessage('');
			socket.emit('sendMessage', response.data.message);
		} catch (err) {
			console.error('Error sending message:', err);
		}
	};

	return (
		<div className={styles.chatContainer}>
			<h1>Chat Page</h1>
			<div className={styles.chatBox}>
				{messages.map((message, index) => (
					<div
						key={index}
						className={`${styles.message} ${message.senderId === senderId ? styles.sent : styles.received
							}`}
					>
						<p>{message.content}</p>
					</div>
				))}
			</div>
			<form className={styles.chatInput} onSubmit={sendMessage}>
				<input
					type="text"
					placeholder="Type a message..."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ChatPage;
