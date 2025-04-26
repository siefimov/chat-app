import { useEffect, useRef } from 'react';
import { useChatStore } from '../store';

export const ChatWindow: React.FC = () => {
  const messages = useChatStore((state) => state.messages);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          style={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <p>{message.sender === 'user' ? 'user: ' : 'bot: '}</p>
          <span>{message.text}</span>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};
