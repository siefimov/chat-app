import { useEffect, useRef } from 'react';
import { useChatStore } from '../store';

export const ChatWindow: React.FC = () => {
  const messages = useChatStore((state) => state.messages);
  const isBotLoading = useChatStore((state) => state.isBotLoading);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
        >
          <div>
            {message.sender === 'user' ? (
              <span className="avatar user">U</span>
            ) : (
              <span className="avatar bot">B</span>
            )}
          </div>
          <div className="message-text">{message.text}</div>
          <div className="message-time">{formatTime(message.timestamp)}</div>
        </div>
      ))}
      {isBotLoading && (
        <div className="message bot loading">Bot is typing...</div>
      )}
      <div ref={messageEndRef} className="ref" />
    </div>
  );
};
