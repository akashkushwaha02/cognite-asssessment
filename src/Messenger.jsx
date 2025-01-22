import React, { useState } from 'react';
import './styles.css';

const friendsList = ['Shubham', 'Satyam', 'Sagar'];

const initialMessages = {
  Shubham: [
    { sender: 'Shubham', text: 'Hi! How are you?' },
    { sender: 'You', text: 'I am good, how about you?' },
  ],
  Satyam: [
    { sender: 'Satyam', text: 'Hey! Long time no see.' },
    { sender: 'You', text: 'Yeah, it has been a while!' },
  ],
  Sagar: [
    { sender: 'Sagar', text: 'Are you coming to the party?' },
  ],
};

const MessengerApp = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleFriendSelect = (friend) => {
    setSelectedFriend(friend);
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (!currentMessage.trim() || !selectedFriend) return;

    setMessages((prevMessages) => {
      const updatedMessages = { ...prevMessages };
      if (!updatedMessages[selectedFriend]) {
        updatedMessages[selectedFriend] = [];
      }
      updatedMessages[selectedFriend] = [
        ...updatedMessages[selectedFriend],
        { sender: 'You', text: currentMessage },
      ];
      return updatedMessages;
    });

    const reply = `Reply to: ${currentMessage}`;
    setTimeout(() => {
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[selectedFriend] = [
          ...updatedMessages[selectedFriend],
          { sender: selectedFriend, text: reply },
        ];
        return updatedMessages;
      });
    }, 1000);

    setCurrentMessage('');
  };

  return (
    <div className="messenger-app">
      <div className="friends-list">
        <h3>Friends</h3>
        {friendsList.map((friend) => (
          <div
            key={friend}
            className={`friend ${friend === selectedFriend ? 'selected' : ''}`}
            onClick={() => handleFriendSelect(friend)}
          >
            {friend}
          </div>
        ))}
      </div>

      <div className="chat-window">
        {selectedFriend ? (
          <>
            <h3>Chat with {selectedFriend}</h3>
            <div className="chat-messages">
              {(messages[selectedFriend] || []).map((msg, index) => (
                <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <form onSubmit={handleMessageSend} >
              <input
                type="text"
                placeholder="Type a message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
              />
              <button type='submit'>Send</button>
              </form>
            </div>
          </>
        ) : (
          <h3>Select a friend to start chatting</h3>
        )}
      </div>
    </div>
  );
};

export default MessengerApp;